"use client";

import { useState } from "react";
import Modal from "./ProjectModel";
import Image from "next/image";

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Autodialer",
      description:
        "A scalable, efficient outbound calling system built with ReactJS, Python, and FastAPI.",
      image: "/autodialer.png",
      githubUrl: "https://github.com/yourusername/autodialer",
    },
    {
      title: "Smart City",
      description:
        "An intuitive Java-based desktop app for streamlined urban management.",
      image: "/smart-city.png",
      githubUrl: "https://github.com/yourusername/smartcity",
    },
    {
      title: "ATM Banking",
      description:
        "A secure Java application simulating ATM functions for transactions and balance checks.",
      image: "/atm.png",
      githubUrl: "https://github.com/yourusername/atmbanking",
    },
    {
      title: "Institute Management",
      description:
        "A ReactJS and Elasticsearch platform for managing student and staff data.",
      image: "/college.webp",
      githubUrl: "https://github.com/yourusername/institutemanagement",
    },
    {
      title: "Atithi Agman",
      description:
        "A ReactJS and MySQL platform for managing food and attending the guest.",
      image: "/atithi.jpeg",
      githubUrl: "https://github.com/yourusername/atithiagman",
    },
    {
      title: "Kwix.Live",
      description:
        "A ReactJS and Elasticsearch platform for managing student and staff data.",
      image: "/kwix.png",
      githubUrl: "https://github.com/yourusername/kwixlive",
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <section className="p-16 bg-gray-50" id="service">
      <div className="container mx-auto text-center">
        <p className="text-gray-600 text-lg">What I Do?</p>
        <h6 className="text-4xl font-bold mb-12 text-[#695AA6] font-baloo">
          Projects
        </h6>
        <div className="flex flex-wrap -mx-4">
          {projects.map((project, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="relative bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group flex flex-col h-full">
                <div className="p-6 flex-grow">
                  <div className="mb-4 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={80}
                      height={80}
                      className="mx-auto group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h6 className="text-xl font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h6>
                  <p className="text-gray-600">{project.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => openModal(project)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                  >
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reusable Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </section>
  );
}
