"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

export default function Clients() {
  const [technologyData, setTechnologyData] = useState([]);

  useEffect(() => {
    fetch("/JSON/technology.json")
      .then((response) => response.json())
      .then((data) => setTechnologyData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section id="clients" className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={600}
          autoplay={{ delay: 2000 }}
          slidesPerView="auto"
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 40 },
            480: { slidesPerView: 3, spaceBetween: 60 },
            640: { slidesPerView: 4, spaceBetween: 80 },
            992: { slidesPerView: 6, spaceBetween: 120 },
          }}
          className="w-full"
        >
          {technologyData.map((client, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center text-center">
              <Image
                src={client.src}
                alt={client.title}
                width={150} 
                height={150} 
                className="w-[150px] h-[150px] object-contain"
              />
              <p className="mt-2 text-sm font-semibold">{client.title}</p>
              <p className="text-xs text-gray-500">{client.category}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
