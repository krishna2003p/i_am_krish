"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // To navigate back

export default function PlayGround() {
  const [cardsData, setCardsData] = useState([]);
  const router = useRouter(); // For back navigation

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/JSON/playground_cards.json");
        const data = await response.json();
        setCardsData(data.projects); // Access the 'projects' array from JSON
      } catch {
        console.log("Some error occurred while fetching projects.");
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-500 flex flex-col items-center py-12 px-8">
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

      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 font-baloo">
        Welcome to the PlayGround
      </h1>
      <p className="text-xl md:text-xl text-gray-200 mb-12 text-center px-4 max-w-3xl">
        Explore the different sections below and enhance your skills with these tools.
      </p>

      {/* Card Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {cardsData.map((card) => (
          <Link href={card.link} legacyBehavior key={card.title}>
            <a className="bg-white rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center space-y-4 border-2 border-transparent hover:border-indigo-400 hover:bg-gradient-to-r from-indigo-500 to-purple-500 hover:text-white">
              {/* Card Icon */}
              <Image
                src={card.icon}
                alt={card.title}
                width={80}
                height={80}
                className="mb-4 rounded-full border-4 border-indigo-500 p-2 transition-all duration-300 ease-in-out transform hover:scale-110"
              />
              {/* Card Title */}
              <h3 className="text-2xl font-semibold text-gray-800 transition-all duration-300 ease-in-out transform hover:text-white">{card.title}</h3>
              {/* Card Description */}
              <p className="text-gray-600 text-sm transition-all duration-300 ease-in-out transform hover:text-gray-200">{card.description}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
