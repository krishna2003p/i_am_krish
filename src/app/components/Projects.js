"use client";

import { useEffect, useState } from "react";
import Modal from "./ProjectModel";
import Image from "next/image";

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);

  // Fetch Projects from JSON file
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/JSON/projects.json");
        const data = await response.json();
        setProjects(data.projects); // Access the 'projects' array from JSON
      } catch {
        console.log("Some error occurred while fetching projects.");
      }
    };
    fetchProjects();
  }, []);

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
            <div key={index} className={`group w-full h-80 sm:w-1/2 lg:w-1/4 p-4 mb-8 transform transition duration-300 ${index % 2 === 0 ? '-translate-y-8' : 'translate-y-8'
              }`}>
              <div className="relative rounded-tl-3xl rounded-bl-3xl rounded-br-3xl hover:bg-gray-300 transition duration-300 h-full border border-gray-400 ">
                <div className="p-6 flex-grow text-left">
                  <div className="mb-4 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={60}
                      height={60}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h6 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#695AA6] transition-colors duration-300">
                    {project.name}
                  </h6>
                  <p className="text-gray-600 mt-5">{project.short_description}</p>
                </div>
                <div className="text-start ms-5 mt-0 opacity-0 group-hover:opacity-100 transform transition duration-300 translate-x-0 group-hover:translate-x-1">
                  <p className="flex items-center gap-1 text-gray-700 cursor-pointer hover:text-blue-700 " onClick={() => openModal(project)}>
                    Learn More
                    <span> → </span>
                  </p>
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
