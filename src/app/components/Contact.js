'use client';

import { useState } from "react";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, mobile, message }),
      });

      const userData = await response.json();

      if (response.ok) {
        setName("");
        setEmail("");
        setMobile("");
        setMessage("");
        setFormSubmitted(true);
        setErrorMessage("");
      } else {
        setErrorMessage(userData.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setErrorMessage('An error occurred. Please try again.');
    }

    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-12 bg-gray-100">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <p className="text-center pb-2">How can you communicate?</p>
        <h2 className="text-2xl font-bold text-[#695AA6] font-baloo mb-4 text-center">
          Contact Me
        </h2>

        {formSubmitted && (
          <p className="mb-4 text-green-500 font-semibold">
            Thank you for connect with me!
          </p>
        )}

        {errorMessage && (
          <p className="mb-4 text-red-500 font-semibold">{errorMessage}</p>
        )}

        <form onSubmit={handleSubmit}>
          {/* Full Name Input */}
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-2 p-2 rounded-lg bg-gray-50 border focus:ring-2 focus:ring-blue-500"
          />

          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-4 w-full p-2 rounded-lg bg-gray-50 border focus:ring-2 focus:ring-blue-500"
          />

          {/* Mobile Input */}
          <input
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="mt-4 w-full p-2 rounded-lg bg-gray-50 border focus:ring-2 focus:ring-blue-500"
          />

          {/* Message Textarea */}
          <textarea
            rows="4"
            placeholder="Write your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-4 w-full p-4 rounded-lg bg-gray-50 border focus:ring-2 focus:ring-blue-500"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 bg-[#695AA6] text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-all ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
