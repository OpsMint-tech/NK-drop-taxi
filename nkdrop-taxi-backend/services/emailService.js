const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

// Verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.error("SMTP Connection Error:", error.message);
    } else {
        console.log("SMTP Server is ready to take our messages");
    }
});

const loadHtmlTemplate = (templateId) => {
    let templatePath = '';
    switch (templateId) {
        case 1:
            templatePath = path.join(__dirname, '../templates/emails/booking_user.html');
            break;
        case 2:
            templatePath = path.join(__dirname, '../templates/emails/booking_owner.html');
            break;
        case 3:
            templatePath = path.join(__dirname, '../templates/emails/feedBack.html');
            break;
        default:
            throw new Error(`Unexpected template value: ${templateId}`);
    }
    return fs.readFileSync(templatePath, 'utf8');
};

const getEmailSubject = (templateId) => {
    switch (templateId) {
        case 1: return "Your Booking Confirmation – NK Drop Taxi";
        case 2: return "New Booking Received – NK Drop Taxi";
        case 3: return "You’ve Received New Feedback";
        default: throw new Error(`Unexpected template value: ${templateId}`);
    }
};

const buildEmailTemplate = (fullName, templateId, bookingTable, type) => {
    let noteContent = type === "roundTrip" ? "Maximum 250km per day." : "Maximum 130kms package.";
    const timestamp = new Date().toLocaleString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    let html = loadHtmlTemplate(templateId);
    return html
        .replace(/{{fullName}}/g, fullName)
        .replace(/{{timestamp}}/g, timestamp)
        .replace(/{{bookingTable}}/g, bookingTable)
        .replace(/{{noteContent}}/g, noteContent);
};

const buildFeedbackTemplate = (templateId, data) => {
    const timestamp = new Date().toLocaleString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    let html = loadHtmlTemplate(templateId);
    return html
        .replace(/{{name}}/g, data.name || '')
        .replace(/{{email}}/g, data.email || '')
        .replace(/{{message}}/g, data.message || '')
        .replace(/{{timestamp}}/g, timestamp);
};

const sendEmail = async (to, fullName, bookingTable, templateId, type) => {
    try {
        const subject = getEmailSubject(templateId);
        const html = buildEmailTemplate(fullName, templateId, bookingTable, type);

        const info = await transporter.sendMail({
            from: process.env.FROM_EMAIL,
            to: to,
            subject: subject,
            html: html,
        });

        console.log(`Email sent successfully to ${to}: ${info.messageId}`);
    } catch (error) {
        console.error(`Failed to send email to ${to}:`, error);
        throw error;
    }
};

const sendFeedbackEmail = async (to, data) => {
    try {
        const templateId = 3;
        const subject = getEmailSubject(templateId);
        const html = buildFeedbackTemplate(templateId, data);

        const info = await transporter.sendMail({
            from: process.env.FROM_EMAIL,
            to: to,
            subject: subject,
            html: html,
        });

        console.log(`Feedback email sent successfully to ${to}: ${info.messageId}`);
    } catch (error) {
        console.error(`Failed to send feedback email to ${to}:`, error);
        throw error;
    }
};

module.exports = {
    sendEmail,
    sendFeedbackEmail
};
