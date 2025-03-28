"use client";

import { useState } from "react";
import Image from "next/image";

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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
        setErrorMessage(userData.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setErrorMessage("An error occurred. Please try again.");
    }

    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded-lg p-8">
          {/* Left Side: Image */}
          <div className="flex justify-center">
            <Image
              src="/img/contact-us.png"
              alt="Contact Us"
              width={400}
              height={400}
              className="w-full max-w-md object-cover"
            />
          </div>

          {/* Right Side: Contact Form */}
          <div>
            <p className="text-center pb-2">How can you communicate?</p>
            <h2 className="text-2xl font-bold text-[#695AA6] font-baloo mb-4 text-center">
              Contact Me
            </h2>

            {formSubmitted && (
              <p className="mb-4 text-green-500 font-semibold">
                Thank you for connecting with me!
              </p>
            )}

            {errorMessage && <p className="mb-4 text-red-500 font-semibold">{errorMessage}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 rounded-lg bg-gray-50 border focus:ring-2 focus:ring-blue-500"
                required
              />

              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 rounded-lg bg-gray-50 border focus:ring-2 focus:ring-blue-500"
                required
              />

              <input
                type="text"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full p-2 rounded-lg bg-gray-50 border focus:ring-2 focus:ring-blue-500"
                required
              />

              <textarea
                rows="4"
                placeholder="Write your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-4 rounded-lg bg-gray-50 border focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#695AA6] text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-all ease-in-out"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
