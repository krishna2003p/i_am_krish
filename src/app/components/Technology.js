// components/TechnicalSkills.jsx
import React from 'react';
import { CircleStackIcon, CodeBracketIcon, ServerStackIcon, WrenchScrewdriverIcon, ComputerDesktopIcon } from '@heroicons/react/24/solid';
const skillsData = [
  {
    category: 'Programming',
    icon: <CodeBracketIcon className="w-6 h-6 text-purple-800" />,
    items: ['Python', 'JavaScript', 'Java', 'PHP'],
  },
  {
    category: 'Frontend',
    icon: <ComputerDesktopIcon className="w-6 h-6 text-sky-800" />,
    items: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'BootStrap', 'Material-UI', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    icon: <ServerStackIcon className="w-6 h-6 text-blue-800" />,
    items: ['Node.js', 'Express.js', 'REST APIs', 'WebSocket', 'JWT', 'OAuth'],
  },
  {
    category: 'Databases',
    icon: <CircleStackIcon className="w-6 h-6 text-yellow-400" />,
    items: ['Kafka', 'ElasticSearch', 'Redis', 'MySQL', 'MongoDB'],
  },
  {
    category: 'Tools/Platforms',
    icon: <WrenchScrewdriverIcon className="w-6 h-6 text-cyan-400" />,
    items: ['Git/GitHub/Gitlab', 'VS Code', 'Vercel', 'Figma', 'Vim Editor', 'Postman'],
  },
];

const TechnicalSkills = () => {
  return (
    <section className="bg-gray-50 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-12 item-center justify-center gap-8 ms-5 px-20">
        {/* left side column */}
        <div className="col-span-4">
            <h2 className="text-[#695AA6] font-baloo font-bold text-5xl ms-5">Technical Skills</h2>
            <p className="ms-5 text-xl mt-2 text-gray-700">Skilled in developing real-time systems using WebSocket, Kafka, and Redis with a focus on performance and reliability.</p>
        </div>

        {/* Right side column */}
        <div className='col-span-8 ms-5'>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:bg-gray-300 transition duration-300"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-bold ml-3 text-[#695AA6]">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="bg-gray-100 text-[#695AA6] px-3 py-1 rounded-full text-sm font-medium hover:bg-[#695AA6] transition duration-300 cursor-pointer hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
      
    </section>
  );
};

export default TechnicalSkills;