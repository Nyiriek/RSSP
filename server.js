require("dotenv").config();

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const app = express();

app.use(helmet());

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 20
});

app.use("/contact", limiter);

const transporter = nodemailer.createTransport({

    host: "smtp.office365.com",

    port: 587,

    secure: false,

    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }

});

app.post("/contact", async (req, res) => {

    const { name, email, message } = req.body;

    if (!name || !email || !message) {

        return res.status(400).json({
            success: false,
            message: "Please complete all fields."
        });

    }

    try {

        await transporter.sendMail({

            from: process.env.EMAIL_USER,

            replyTo: email,

            to: process.env.EMAIL_USER,

            subject: `New Contact Form Message from ${name}`,

            html: `
                <h2>New Website Contact</h2>

                <p><strong>Name:</strong> ${name}</p>

                <p><strong>Email:</strong> ${email}</p>

                <p><strong>Message</strong></p>

                <p>${message}</p>
            `

        });

        await transporter.sendMail({

            from: process.env.EMAIL_USER,

            to: email,

            subject: "We've received your message",

            html: `
                <h2>Thank you for contacting Revive South Sudan Party</h2>

                <p>Hello ${name},</p>

                <p>We have successfully received your message.</p>

                <p>Our team will respond as soon as possible.</p>

                <br>

                <p>Regards,</p>

                <strong>Revive South Sudan Party</strong>
            `

        });

        res.json({

            success: true,

            message: "Message sent successfully."

        });

    }

    catch (err) {

        console.error(err);

        res.status(500).json({

            success: false,

            message: "Unable to send email."

        });

    }

});

app.listen(process.env.PORT, () => {

    console.log(`Server running on port ${process.env.PORT}`);

});