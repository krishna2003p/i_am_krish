"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation"; // For back navigation

export default function DSACards() {
  const router = useRouter(); // For back navigation

  const [topicsData] = useState([
    {
      title: "Arrays",
      description: "Explore various algorithms and operations on arrays.",
      icon: "/img/array.jpeg",
      link: "/playground/dsa/arrays",
    },
    {
      title: "Linked Lists",
      description: "Learn about different types of linked lists and their operations.",
      icon: "/img/linklist.png",
      link: "/playground/dsa/linked-lists",
    },
    {
      title: "Trees",
      description: "Master tree traversals, binary trees, and more.",
      icon: "/img/tree.jpeg",
      link: "/playground/dsa/trees",
    },
    {
      title: "Sorting",
      description: "Explore popular sorting algorithms like Bubble, Merge, and Quick Sort.",
      icon: "/img/sorting.png",
      link: "/playground/dsa/sorting",
    },
    {
      title: "Graphs",
      description: "Dive into graph traversal algorithms like BFS, DFS, etc.",
      icon: "/img/graph.jpeg",
      link: "/playground/dsa/graphs",
    },
    {
      title: "Dynamic Programming",
      description: "Understand the concepts and techniques behind dynamic programming.",
      icon: "/img/dynamic_programming.png",
      link: "/playground/dsa/dynamic-programming",
    },
    // Add more DSA topics as needed
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-600 flex flex-col items-center py-12 px-8">
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

      {/* Hero Section */}
      <div className="text-center text-white mb-16">
        <h1 className="text-5xl font-extrabold mb-4 font-baloo">Welcome to DSA Playground</h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto px-4">
          Discover various data structures and algorithms. Learn by interacting with hands-on tutorials.
        </p>
      </div>

      {/* Card Container for DSA Topics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {topicsData.map((topic) => (
          <Link href={topic.link} legacyBehavior key={topic.title}>
            <a className="bg-white rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center space-y-4 border-2 border-transparent hover:border-blue-400 hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-white">
              {/* Topic Icon */}
              <Image
                src={topic.icon}
                alt={topic.title}
                width={80}
                height={80}
                className="mb-4 rounded-full border-4 border-blue-500 p-2 transition-all duration-300 ease-in-out transform hover:scale-110"
              />
              {/* Topic Title */}
              <h3 className="text-2xl font-semibold text-gray-800 transition-all duration-300 ease-in-out transform hover:text-white">{topic.title}</h3>
              {/* Topic Description */}
              <p className="text-gray-600 text-sm transition-all duration-300 ease-in-out transform hover:text-gray-200">{topic.description}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
