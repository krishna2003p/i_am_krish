"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

export default function PageNotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-gray-900 text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-40 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-40 w-[300px] h-[300px] bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
            transition: { duration: 2, repeat: Infinity },
          }}
        >
          <ExclamationTriangleIcon className="w-20 h-20 mx-auto text-yellow-400 mb-4" />
        </motion.div>

        <h1 className="text-9xl font-bold tracking-tight">
          4<span className="text-purple-500">0</span>4
        </h1>
        <p className="mt-4 text-lg font-medium text-gray-300">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="mt-2 text-sm text-gray-400">
          But hey, let’s take you back to the right path.
        </p>

        {/* Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8"
        >
          <Link
            href="/"
            className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg text-white shadow-lg hover:shadow-2xl hover:from-purple-500 hover:to-blue-500 transition-all"
          >
            Go Home
          </Link>
        </motion.div>
      </motion.div>

      {/* Decorative Floating Icons */}
      <motion.div
        className="absolute top-10 left-10 text-6xl text-pink-500 opacity-40"
        animate={{ y: [0, -10, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        💫
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-20 text-8xl text-blue-400 opacity-30"
        animate={{ y: [0, 15, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        ✨
      </motion.div>
      <motion.div
        className="absolute top-20 right-40 text-7xl text-indigo-500 opacity-20"
        animate={{ x: [0, 10, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        ⚡
      </motion.div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-sm text-gray-400 z-10">
        Made with <span className="text-red-500">♥</span> by{" "}
        <a href="#" className="underline hover:text-gray-200">
          Krishna Prajapati
        </a>
      </footer>
    </div>
  );
}
