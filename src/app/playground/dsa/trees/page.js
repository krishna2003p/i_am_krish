"use client";

import { DsaCard, dsaTopicsData } from "@/app/components/dsacards"; // Import common data and card component
import { useRouter } from "next/navigation";

export default function TreesPage() {
  const router = useRouter();
  const treesData = dsaTopicsData.trees; // Access trees-related data from the common file

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 text-white flex flex-col items-center py-16 px-8">
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
        <h1 className="text-5xl font-extrabold mb-4 font-baloo">Trees - Data Structure</h1>
        <p className="text-xl max-w-3xl mx-auto px-4">
          Explore tree data structures like Binary Tree, Binary Search Tree, and AVL Tree.
        </p>
      </div>

      {/* Interactive Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {treesData.map((item) => (
          <DsaCard
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}
