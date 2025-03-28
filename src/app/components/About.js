import Image from "next/image";

export default function About() {
    return (
      <section id="about" className="py-16 bg-gray-50">
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
              <p className="text-primary text-xl font-medium mb-2">Who Am I?</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#695AA6] font-baloo">
                About Me
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                I’m <b>Krishna Prajapati</b>, a skilled ReactJS Developer with 1.5+ years of experience and a focus on
                building high-performance web applications. Currently leading the ReactJS team at Cloudshope Pvt. Ltd.,
                I’ve developed scalable solutions like our flagship autodialer service, integrating ReactJS, Python, and
                FastAPI to enhance efficiency and user experience.
                <br />
                <br />
                With a solid background in backend technologies like FastAPI, MySQL, Elasticsearch, and Kafka, I’m
                passionate about creating seamless, impactful applications that align with business goals. My approach
                combines technical precision with innovative problem-solving to deliver results.
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
  