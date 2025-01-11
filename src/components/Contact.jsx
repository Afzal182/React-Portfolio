import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_esq3bj1", // Replace with your EmailJS service ID
        "template_dyrag44", // Replace with your EmailJS template ID
        formData,
        "U4zDtDA4KVTU5JhIY" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setSuccessMessage("Your message has been sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form fields
        },
        (error) => {
          setSuccessMessage("Failed to send the message. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter Your Message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Let's talk
            </button>
          </form>
        </div>
        {successMessage && (
          <p className="text-center mt-4 text-green-500">{successMessage}</p>
        )}
      </div>
    </div>
  );
}

export default Contact;
