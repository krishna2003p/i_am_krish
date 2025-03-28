"use client";

import { useRouter } from "next/navigation"; 

export default function Main(){
    const router = useRouter();
    const go_to_playground = () => {
        router.push("/playground");
    }

    return(
        <div id="home" className="relative bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: "url('img/header.jpg')" }}>
            <div className="text-center px-4 sm:px-6 lg:px-8 flex flex-col items-start">
                <h1 className="text-xl md:text-6xl font-bold mb-4 font-baloo text-[#212529]">
                    <p className="text-left">HI!</p>
                    <p className="down">I am Krishna Prajapati</p>
                </h1>
                <p className="md:text-4xl text-left mb-4">Full Stack Developer</p>

                {/* Button aligned to the left */}
                <button className="mt-2 text-white p-3 pl-5 pr-5 rounded-full bg-[#695AA6] self-start" onClick={go_to_playground}>
                    Visit My Works
                </button>
            </div>
                        {/* Image with a blurred bottom effect */}
                        <div className="absolute bottom-0 left-0 w-full h-[10%] bg-gradient-to-t from-gray-50 via-gray-50 to-transparent z-20" />
        </div>
    );
}
