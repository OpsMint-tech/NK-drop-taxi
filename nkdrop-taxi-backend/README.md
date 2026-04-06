# Ravi Cabs Backend (Node.js Migration)

This is the Node.js backend for Ravi Cabs, migrated from a Java Spring Boot implementation. It handles taxi booking requests, customer feedback, and real-time notifications via Email and Telegram.

## 🚀 Technical Stack

- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express.js](https://expressjs.com/) - Lightweight web framework for handling REST APIs.
- **Email Service:** [Nodemailer](https://nodemailer.com/) - Used for sending transactional emails (Booking Confirmations, Admin Alerts).
- **Telegram Bot:** [Telegraf](https://telegraf.js.org/) - Handles real-time booking notifications to a Telegram Group.
- **Environment Management:** [Dotenv](https://www.npmjs.com/package/dotenv) - Manages sensitive credentials and configurations.
- **Security:** [CORS](https://www.npmjs.com/package/cors) enabled for cross-origin frontend requests.

---

## 🏗 Project Architecture & Flow

The application follows a modular service-oriented architecture:

1.  **Entry Point (`server.js`):** Initializes the Express server, applies middleware (CORS, BodyParser), and hooks into the routes.
2.  **Routing (`routes/api.js`):** Defines the endpoints and parses incoming request data.
3.  **Services (`services/`):**
    *   `emailService.js`: Logic for loading HTML templates, replacing dynamic data (placeholders), and sending emails via SMTP.
    *   `telegramService.js`: Formats booking details into HTML-styled messages and pushes them to a Telegram group via Bot API.
4.  **Templates (`templates/emails/`):** Contains the professional responsive HTML email layouts used by the email service.

### 🔄 Booking Flow
1.  **Request:** Frontend sends a POST request to `/api/v1/book-now`.
2.  **Validation:** Backend filters out empty fields from the request body.
3.  **Telegram Alert:** `telegramService` immediately formats and sends the booking details to the admin group.
4.  **Customer Email:** `emailService` sends a "Booking Confirmation" to the user using the `booking_user.html` template.
5.  **Admin Email:** `emailService` sends a "New Booking Received" alert to the admin using the `booking_owner.html` template.
6.  **Response:** Returns a `200 OK` success message to the client.

---

## 📡 API Documentation

### 1. Health Check
- **URL:** `/api/v1`
- **Method:** `GET`
- **Response:** `Ok.`

### 2. Send Feedback Email
- **URL:** `/api/v1/send-email`
- **Method:** `POST`
- **Payload:**
  ```json
  {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "message": "Great service!"
  }
  ```
- **Action:** Sends a feedback email to the admin.

### 3. Process Booking (Book Now)
- **URL:** `/api/v1/book-now`
- **Method:** `POST`
- **Payload:**
  ```json
  {
    "fullName": "John Doe",
    "email": "customer@example.com",
    "mobileNumber": "9876543210",
    "pickupLocation": "Chennai",
    "dropLocation": "Salem",
    "date": "2024-12-01",
    "time": "10:00 AM",
    "tripType": "roundTrip",
    ...
  }
  ```
- **Action:** Syncs with Telegram and triggers multiple email workflows.

---

## 🛠 Setup & Installation

### Prerequisites
- Node.js installed on your system.

### Installation
1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Configure Environment Variables: Create/Edit the `.env` file in the root directory:
    ```env
    PORT=8080
    SMTP_USER=vigneshkumaroffsec@gmail.com
    SMTP_PASS=your_app_password
    TELEGRAM_BOT_TOKEN=your_bot_token
    TELEGRAM_CHAT_ID=your_chat_id
    ADMIN_EMAIL=admin@example.com
    ```
3.  Start the server:
    ```bash
    npm start
    ```

---

## 🐳 Docker Deployment
The project includes a `Dockerfile` for easy containerization:
```bash
docker build -t ravicabs-backend .
docker run -p 8080:8080 ravicabs-backend
```
