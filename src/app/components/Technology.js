import Image from 'next/image';

export default function Technology() {
  const projects = [
    { 
      src: "/react.png", 
      title: "Web Designing", 
      category: "Web Templates" 
    },
    { 
      src: "/nextjs.jpg", 
      title: "Web Designing", 
      category: "Web Templates" 
    },
    { 
      src: "/python.jpeg", 
      title: "Web Designing", 
      category: "Web Templates" 
    },
    { 
      src: "/fast_api.jpeg", 
      title: "Web Designing", 
      category: "Web Templates" 
    },
    { 
      src: "/java.png", 
      title: "Web Designing", 
      category: "Web Templates" 
    },
    { 
      src: "/elastic.png", 
      title: "Web Designing", 
      category: "Web Templates" 
    },
    { 
        src: "/kafka.jpeg", 
        title: "Web Designing", 
        category: "Web Templates" 
      },
      { 
        src: "/mysql.jpeg", 
        title: "Web Designing", 
        category: "Web Templates" 
      },
  ];

  return (
    <section className="p-16 bg-gray-50" id="portfolio">
      <div className="container mx-auto text-center">
        <p className="text-gray-600 text-lg">What I Did?</p>
        <h6 className="text-4xl font-bold mb-12 text-[#695AA6] font-baloo">Technologies</h6>
        <div className="flex flex-wrap -mx-4">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8"
            >
              <a 
                href="#" 
                className="relative block group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={project.src}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h4 className="text-lg font-bold">{project.title}</h4>
                    <p className="text-sm">{project.category}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
