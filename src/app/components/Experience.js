import react from "@heroicons/react";

export default function Experience() {
    return <>
        <section id="experience" className="py-5 bg-gray-50">
            <div className="grid grid-cols-12 item-center justify-center gap-8 ms-5 px-20">
                {/* TITLE OF WORK EXPERIENCE */}
                <div className="col-span-4">
                    <h2 className="text-[#695AA6] font-baloo font-bold text-5xl ms-5">Work Experience</h2>
                    <p className="ms-5 text-xl mt-2 text-gray-700">Adaptable full stack developer with a strong foundation in both frontend and backend development.</p>
                </div>

                {/* Second Column code */}


                <div className="col-span-12 md:col-span-8 p-4 ms-5">
                    {/* One experience block */}
                    <div className="relative pl-6 border-l-2 border-[#695AA6]">
                        {/* Dot */}
                        <span className="absolute -left-[9px] top-2.0 w-4 h-4 bg-[#695AA6] rounded-full"></span>

                        <div className="mb-6">
                            <h3 className="font-bold text-gray-500 text-xl">
                                💻 Java Intern 
                            </h3>
                            
                            <p className="text-sm text-[#695AA6] mb-2 "><span className="text-[#695AA6] text-lg font-bold">Torion Softwares</span>   .Jun 2023 - July 2023 (6 Months)</p>
                            <ul className="list-disc list-inside text-black text-base space-y-4">
                                <li>Developed "Smart City" desktop application using Java (Swing)</li>
                                <li>Implemented user-friendly interfaces and efficient back-end logic</li>
                                <li>Gained experience in software development methodologies, debugging, and testing</li>
                                <li>Developed ATM Banking and Bank Management System projects</li>
                                <li>Acquired in-depth knowledge of object-oriented programming concepts and data structures</li>
                            </ul>
                        </div>
                    </div>

                    <div className="relative pl-6 border-l-2 border-[#695AA6]">
                        {/* Another dot for second block */}
                        <span className="absolute -left-[9px] w-4 h-4 bg-[#695AA6] rounded-full"></span>

                        <div>
                            <h3 className="font-bold text-gray-500 text-xl">
                                🖥️💾  Full Stack Developer 
                            </h3>
                            <p className="text-sm text-[#695AA6] mb-2 "><span className="text-[#695AA6] text-lg font-bold">Cloudshope Technology</span>   Aug 2023 - Present</p>
                            <ul className="list-disc list-inside text-black text-base space-y-4">
                                <li>Led ReactJS team in developing and maintaining high-performance web applications using Next.js</li>
                                <li>Spearheaded flagship autodialer service development with ReactJS (Next.js), Python (socket programming), and FastAPI</li>
                                <li>Developed chat application for WhatsApp communication, integrating WebSocket for real-time messaging, and leveraging Python, Elasticsearch, and Kafka for scalability</li>
                                <li>Collaborated with cross-functional teams to integrate complex backend services with frontend solutions</li>
                                <li>Received multiple awards for contributions to project delivery and process optimization</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}