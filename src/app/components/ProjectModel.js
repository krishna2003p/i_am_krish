export default function Modal({ isOpen, onClose, project }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-2/3 md:w-1/2 lg:w-2/3 p-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-lg font-bold"
        >
          &times;
        </button>
        <div className="text-center">
          <img
            src={project.image}
            alt={project.name}
            className="mx-auto rounded-lg mb-6 w-48 h-48 object-cover shadow-lg"
          />
          <h3 className="text-3xl font-bold text-gray-800 mb-4">{project.name}</h3>
          <p className="text-gray-600 mb-6">{project.description}</p>
          <div className="flex justify-center space-x-4 mb-6">
            <div className="text-gray-800 font-semibold">Technologies Used:</div>
            <div className="flex flex-wrap justify-center gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-2 mb-6">
            <div className="font-semibold text-gray-800">Features:</div>
            <ul className="list-disc pl-6 space-y-1 text-left text-gray-600">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-[#695AA6] text-white rounded-lg hover:bg-[#523D85] transition-all"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
