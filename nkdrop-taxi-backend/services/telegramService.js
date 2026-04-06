const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.telegram.getMe().then((botInfo) => {
    console.log(`Telegram Bot is ready: @${botInfo.username}`);
}).catch(err => {
    console.error("Telegram Bot Error:", err.message);
});

const sendBookingDetailsToGroup = async (data) => {
    const mobile = data.mobileNumber;
    const tripType = (data.tripType || '').trim();
    let driverBeta = "";
    let returnDateLine = "";
    let notes = "Minimum 130kms package";

    if (tripType.toLowerCase() === "roundtrip") {
        returnDateLine = `🔁 <b>Return Date:</b> ${data.returnDate || 'N/A'}\n`;
        notes = "Minimum 250kms package";
        driverBeta = "💰 <b>Driver Beta:</b> Rs 400 per day.";
    }

    const message = `
🚗 <b>New Booking Received!</b>

👤 <b>Name:</b> ${data.fullName}
📧 <b>Email:</b> ${data.email}
📱 <b>Mobile:</b> <a href="tel:${mobile}">${mobile}</a>

📍 <b>Pickup:</b> ${data.pickupLocation}
📍 <b>Drop:</b> ${data.dropLocation}
🗓️ <b>Date:</b> ${data.date}
🕒 <b>Time:</b> ${data.time}
${returnDateLine}
🚕 <b>Vehicle Type:</b> ${data.vehicleType}
🔁 <b>Trip Type:</b> ${tripType}
📏 <b>Distance:</b> ${data.distance}
💰 <b>Price:</b> ${data.price}
⏱️ <b>Total Duration:</b> ${data.totalDuration}
💰 <b>Rate Per Km:</b> ${data.ratePerKm}
💰 <b>Extra Per Km:</b> ${data.extraPerKm}
${driverBeta}

<i>Note: Toll gate, waiting charges, parking, and state permit are extra. ${notes}.</i>
    `;

    try {
        await bot.telegram.sendMessage(process.env.TELEGRAM_CHAT_ID, message, { parse_mode: 'HTML' });
        console.log("Booking details sent to Telegram group.");
    } catch (error) {
        console.error("Failed to send booking details to Telegram:", error);
    }
};

const sendMessageToGroup = async (messageText) => {
    try {
        await bot.telegram.sendMessage(process.env.FEEDBACK_CHAT_ID, messageText);
        console.log("Message sent to Telegram group.");
    } catch (error) {
        console.error("Failed to send message to Telegram:", error);
    }
};

// Start the bot (if needed to listen for updates, but here we mostly send)
// bot.launch(); 

module.exports = {
    sendBookingDetailsToGroup,
    sendMessageToGroup
};
