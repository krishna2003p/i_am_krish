"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Correct import

export default function Login() {
  const router = useRouter(); // Initialize router

  const username = "username@developer.com";
  const pwd = "password";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function checkAuth(e) {
    e.preventDefault(); // Prevent form submission refresh

    if (email === username && password === pwd) {
      router.push("/2308"); // Redirect on success
    } else {
      alert("Invalid credentials!"); // Show error message
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <h1 className="text-4xl font-bold mb-4">Login</h1>
      <form className="flex flex-col space-y-4" onSubmit={checkAuth}>
        <input
          type="email"
          placeholder="Email"
          className="p-2 border border-gray-300 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border border-gray-300 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}
