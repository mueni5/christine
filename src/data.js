export const projects = [

  {
    title: "Wetto E-commerce App",
    subtitle: "React, SQLite and Sinatra",
    description:
      "Shopping app that enables users to shop easily and conviniently",
    image: "./project-1.gif",
    link: "https://github.com/mueni5/e-commerce-project-front-end",
  },
  {
    title: "Linda Mama app",
    subtitle: "React, Postgresql and rails",
    description:
      "App for improving prenatal care and supporting healthy pregnancies.",
    image: "lindamama.png",
    link: "https://linda-mama-fullstack.onrender.com/",
  },
  {
    title: "Portfolio",
    subtitle: "React and db.json",
    description:
      "An older simple version of my portfolio that i was practising to build",
    image: "Screenshot.png",
    link: "https://github.com/mueni5/my-portfolio",
  },
  
  {
    title: "Epic Todo App",
    subtitle: "React and db json",
    description:
      "An app where a user can view, add, update and delete items in their to-do list.",
    image: "./project-4.gif",
    link: "https://github.com/mueni5/Todo-App-project",
  },
];

export const testimonials = [
  {
    quote:
      "I highly recommend Christine. She is well equiped with right skills and right attitude.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "K Daniel",
    company: "Moringa School",
  },
  {
    quote:
      "An amazing, brilliant developer who is ready to assist, open to collaborations and its fun to work with her!.",
    image: "https://randomuser.me/api/portraits/men/94.jpg",
    name: "Amos W",
    company: "Dooble.io",
  },
];

export const skills = [
  "JavaScript",
  "React",
  "Ruby.rb",
  "Ruby on rails",
  "PostgresQL",
  "SQLite",
  "HTML",
  "Git",
  "CSS",
];

// const express = require("express");
// const nodemailer = require("nodemailer");
// const bodyParser = require("body-parser");
// const app = express();

// // Parse incoming JSON data
// app.use(bodyParser.json());

// // Define an API endpoint for handling form submissions
// app.post("/submit-form", (req, res) => {
//   const { name, email, message } = req.body;

//   // Perform any necessary processing on the form data

//   // Set up Nodemailer for sending emails
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "mbuvichristine5@gmail.com",
//       pass: "",
//     },
//   });

//   const mailOptions = {
//     from: "gmail.com",
//     to: "mbuvichristine5@gmail.com",
//     subject: "New Form Submission",
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//   };

//   // Send the email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//       res.status(500).send("Error sending email");
//     } else {
//       console.log("Email sent: " + info.response);
//       res.send("Response sent successfully");
//     }
//   });
// });

// app.listen(3001, () => {
//   console.log("Server is running on port 3001");
// });
