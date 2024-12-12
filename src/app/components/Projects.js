import Image from 'next/image';

export default function Projects() {
  return (
    <section className="p-16 bg-gray-50" id="service">
      <div className="container mx-auto text-center">
        <p className="text-gray-600 text-lg">What I Do?</p>
        <h6 className="text-4xl font-bold mb-12 text-[#695AA6] font-baloo">Projects</h6>
        <div className="flex flex-wrap -mx-4">
          {/* Project Card Template */}
          {[
            {
              title: "Autodialer",
              description: "A scalable, efficient outbound calling system built with ReactJS, Python, and FastAPI.",
              image: "/autodialer.png",
            },
            {
              title: "Smart City",
              description: "An intuitive Java-based desktop app for streamlined urban management.",
              image: "/smart-city.png",
            },
            {
              title: "ATM Banking",
              description: "A secure Java application simulating ATM functions for transactions and balance checks.",
              image: "/atm.png",
            },
            {
              title: "Institute Management",
              description: "A ReactJS and Elasticsearch platform for managing student and staff data.",
              image: "/college.webp",
            },
          ].map((project, index) => (
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
                {/* Interactive Hover Activity */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h6 className="text-xl font-bold text-white mb-4">Discover More</h6>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
