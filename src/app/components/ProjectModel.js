export default function Modal({ isOpen, onClose, project }) {
    if (!isOpen || !project) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 p-6 relative">
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
              alt={project.title}
              className="mx-auto rounded-lg mb-4 w-32 h-32 object-cover"
            />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
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
  