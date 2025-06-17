import Image from "next/image";
import { CodeBracketSquareIcon } from "@heroicons/react/24/solid";

export default function About() {
  return (
    <section id="about" className="py-5 bg-gray-50">
      {/* <div className="absolute bottom-0 left-0 w-full h-[10%] bg-gradient-to-t from-gray-50 via-gray-50 to-transparent z-20" /> */}
      {/* Container */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Left Column: Image */}
          <div className="md:w-1/3 flex justify-center">
            <Image
              src="/img/man.png"
              alt="Krishna Prajapati"
              width={320}
              height={320}
              className="rounded-full shadow-lg object-cover border-4 border-primary"
            />
          </div>

          {/* Right Column: Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-primary text-xl font-medium mb-2 text-cyan-900">Who Am I?</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#695AA6] font-baloo">
              About Me
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              <span className="text-[#695AA6] font-bold ">Hey there! 👋 </span>I'm <strong>Krishna Prajapati</strong>, a Full Stack Developer with 2+ years of experience passionate about building high-performance web applications.
              At Cloudshope Technologies.
            </p>

            {/* <p className="text-gray-700 leading-relaxed mb-6 bg-white p-3 shadow-lg border-l-4 border-2 border-purple-800 rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-none">I lead the ReactJS team, where I've spearheaded the development of scalable solutions like our flagship autodialer and real-time chat platform, leveraging ReactJS (Next.js), Python, FastAPI, Elasticsearch, and Kafka.
            </p> */}

            <div className="relative">
      <p className="text-gray-700 leading-relaxed mb-6 bg-white p-3 shadow-lg border-l-4  border-purple-800 rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-none">
        I lead the ReactJS team, where I've spearheaded the development of scalable solutions like our flagship autodialer and real-time chat platform, leveraging ReactJS (Next.js), Python, FastAPI, Elasticsearch, and Kafka.
      </p>
      <span className="absolute -left-3 -top-1 transform -translate-y-1/2 text-purple-800 text-3xl rounded-lg">
        <CodeBracketSquareIcon className="w-8 h-8 " /> {/* This will display the React logo */}
      </span>
    </div>

            <p className="text-gray-700 leading-relaxed mb-6">My expertise spans both frontend and backend, ensuring seamless and efficient digital experiences.
              I'm dedicated to delivering impactful results, recognized with awards for project delivery and process optimization.
              <br />
              <br />
              Let’s connect and make something extraordinary!
            </p>
            <a
              href="/Krishna_Prajapati.pdf"
              download="Krishna_Prajapati_CV"
              className="inline-block py-3 px-6 rounded-full bg-primary text-[#523D85] font-medium hover:bg-[#523D85] hover:text-white transition-all border"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
