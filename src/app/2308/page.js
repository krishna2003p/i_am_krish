"use client";
import { useState } from "react";
import { Mail, Briefcase, User, MessageCircle } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function StyledForm() {
  const [formData, setFormData] = useState({
    subject: "",
    email: "",
    company: "",
    manager: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("📧 Mail sent successfully!");
        setFormData({ subject: "", email: "", company: "", manager: "" }); // Reset form
      } else {
        toast.error(`❌ ${data.message || "Error sending email."}`);
      }
    } catch (error) {
      toast.error("❌ Error sending email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">🚀 Contact Us</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Input Fields */}
          {[
            { name: "subject", icon: MessageCircle, placeholder: "Subject" },
            { name: "email", icon: Mail, placeholder: "Email" },
            { name: "company", icon: Briefcase, placeholder: "Company Name" },
            { name: "manager", icon: User, placeholder: "Manager Name" },
          ].map(({ name, icon: Icon, placeholder }) => (
            <div className="relative" key={name}>
              <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                name={name}
                placeholder={placeholder}
                value={formData[name]}
                onChange={handleChange}
                className="pl-10 w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none text-black"
                required
              />
            </div>
          ))}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-3 rounded-xl font-semibold hover:bg-indigo-600 transition-all"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit ✈️"}
          </button>
        </form>
      </div>
    </div>
  );
}
