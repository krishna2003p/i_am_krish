export default function Experience() {
    return (
        <section id="experience" className="py-10 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 px-6 sm:px-10 md:px-16 lg:px-24 items-start">
                {/* Title Section */}
                <div className="md:col-span-4">
                    <h2 className="text-[#695AA6] font-baloo font-bold text-4xl sm:text-5xl mb-4">
                        Work Experience
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700">
                        Adaptable full stack developer with a strong foundation in both frontend and backend development.
                    </p>
                </div>

                {/* Experience Section */}
                <div className="md:col-span-8">
                    {/* Experience Block 1 */}
                    <div className="relative pl-6 border-l-2 border-[#695AA6] mb-8">
                        {/* Dot */}
                        <span className="absolute -left-2 -top-2 w-4 h-4 bg-[#695AA6] rounded-full"></span>
                        <h3 className="font-bold text-gray-500 text-lg sm:text-xl">
                            💻 Java Intern
                        </h3>
                        <p className="text-sm text-[#695AA6] mb-2">
                            <span className="font-bold text-base sm:text-lg">Torion Softwares</span> — Jun 2023 - July 2023 (6 Months)
                        </p>
                        <ul className="list-disc list-inside text-black text-sm sm:text-base space-y-3">
                            <li>Developed "Smart City" desktop application using Java (Swing)</li>
                            <li>Implemented user-friendly interfaces and efficient back-end logic</li>
                            <li>Gained experience in software development methodologies, debugging, and testing</li>
                            <li>Developed ATM Banking and Bank Management System projects</li>
                            <li>Acquired in-depth knowledge of object-oriented programming concepts and data structures</li>
                        </ul>
                    </div>

                    {/* Experience Block 2 */}
                    <div className="relative pl-6 border-l-2 border-[#695AA6]">
                        <span className="absolute -left-2 -top-2 w-4 h-4 bg-[#695AA6] rounded-full"></span>
                        <h3 className="font-bold text-gray-500 text-lg sm:text-xl">
                            🖥️💾 Full Stack Developer
                        </h3>
                        <p className="text-sm text-[#695AA6] mb-2">
                            <span className="font-bold text-base sm:text-lg">Cloudshope Technology</span> — Aug 2023 - Present
                        </p>
                        <ul className="list-disc list-inside text-black text-sm sm:text-base space-y-3">
                            <li>Led ReactJS team in developing and maintaining high-performance web applications using Next.js</li>
                            <li>Spearheaded flagship autodialer service development with ReactJS (Next.js), Python (socket programming), and FastAPI</li>
                            <li>Developed chat application for WhatsApp communication with WebSocket, Python, Elasticsearch, and Kafka</li>
                            <li>Collaborated with cross-functional teams to integrate backend services with frontend solutions</li>
                            <li>Received multiple awards for contributions to project delivery and process optimization</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
