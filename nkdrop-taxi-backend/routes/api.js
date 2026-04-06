const express = require('express');
const router = express.Router();
const emailService = require('../services/emailService');
const telegramService = require('../services/telegramService');

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

router.get('/', (req, res) => {
    res.send('Ok.');
});

router.post('/send-email', async (req, res) => {
    try {
        const emailRequest = req.body;
        // Filter empty values
        const filteredRequest = Object.fromEntries(
            Object.entries(emailRequest).filter(([_, v]) => v != null && v.toString().trim() !== '')
        );

        await emailService.sendFeedbackEmail(ADMIN_EMAIL, filteredRequest);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/book-now', async (req, res) => {
    try {
        console.log("Booking Request:", req.body);
        const bookingRequest = req.body;

        // Filter empty values
        const filteredRequest = Object.fromEntries(
            Object.entries(bookingRequest).filter(([_, v]) => v != null && v.toString().trim() !== '')
        );

        const bookingTable = generateBookingTable(filteredRequest);

        if (filteredRequest.tripType && filteredRequest.tripType.trim() === 'roundTrip') {
            filteredRequest.driverBeta = "Rs 400 per day.";
        }

        // Parallel tasks
        await Promise.all([
            telegramService.sendBookingDetailsToGroup(filteredRequest),
            emailService.sendEmail(filteredRequest.email, filteredRequest.fullName, bookingTable, 1, filteredRequest.tripType),
            emailService.sendEmail(ADMIN_EMAIL, filteredRequest.fullName, bookingTable, 2, filteredRequest.tripType)
        ]);

        res.status(200).json({ message: 'Booking processed successfully' });
    } catch (error) {
        console.error("Booking error:", error);
        res.status(500).json({ error: error.message });
    }
});

function generateBookingTable(bookingDetails) {
    let rows = "";
    for (const [key, value] of Object.entries(bookingDetails)) {
        rows += `<tr>
            <th>${capitalize(key)}</th>
            <td>${value}</td>
        </tr>`;
    }
    return rows;
}

function capitalize(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = router;
