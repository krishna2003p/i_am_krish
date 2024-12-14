"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ArrayPage() {
  const router = useRouter(); // For back navigation
  const [arrayData] = useState([
    {
      title: "Array Basics",
      description: "Learn the fundamentals of arrays, how to define and manipulate arrays.",
      icon: "/icons/array-icon.png",
      link: "#",
    },
    {
      title: "Array Traversal",
      description: "Explore different ways to traverse through an array.",
      icon: "/icons/array-icon.png",
      link: "#",
    },
    {
      title: "Searching Algorithms",
      description: "Master searching algorithms like Linear Search and Binary Search.",
      icon: "/icons/array-icon.png",
      link: "#",
    },
    {
      title: "Sorting Algorithms",
      description: "Understand sorting techniques like Bubble Sort, Merge Sort, and Quick Sort.",
      icon: "/icons/array-icon.png",
      link: "#",
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-500 to-teal-600 text-white flex flex-col items-center py-16 px-8">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 text-white text-lg hover:text-gray-300 flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        Back
      </button>

      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4 font-baloo">Arrays - Data Structure</h1>
        <p className="text-xl max-w-3xl mx-auto px-4">
          Dive deep into arrays, one of the most fundamental data structures. Explore concepts like array traversal, searching, and sorting algorithms.
        </p>
      </div>

      {/* Interactive Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {arrayData.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center space-y-4 border-2 border-transparent hover:border-teal-400 hover:bg-gradient-to-r from-green-500 to-teal-500 hover:text-white transform hover:scale-105 transition-all duration-300"
          >
            {/* Icon */}
            <Image
              src={item.icon}
              alt={item.title}
              width={80}
              height={80}
              className="mb-4 rounded-full border-4 border-teal-500 p-2 transform hover:scale-110 transition-all duration-300 ease-in-out"
            />
            {/* Title */}
            <h3 className="text-2xl font-semibold transition-all duration-300 ease-in-out transform hover:text-white">
              {item.title}
            </h3>
            {/* Description */}
            <p className="text-gray-600 text-sm transition-all duration-300 ease-in-out transform hover:text-gray-200">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
