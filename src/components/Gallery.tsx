"use client";

import Image from "next/image";
import { Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../app/styles.css";

export const Gallery = () => {
    const galleryImages = [
        { src: "/maquillajeboda.jpeg", tags: ["#maquillajedeboda", "#glam"] },
        { src: "/colorcabello.jpeg", tags: ["#colorcabello", "#haircolor"] },
        { src: "/pedicurespa.jpeg", tags: ["#pedicurespa", "#spaday"] },
        {
            src: "/extensionespestañas.jpeg",
            tags: ["#pestañas", "#extensiones"],
        },
        { src: "/cortecapas.jpeg", tags: ["#cortedecapas", "#haircut"] },
        { src: "/diseñocejas.jpeg", tags: ["#diseñodecejas", "#brows"] },
        {
            src: "/peinadofiesta.jpeg",
            tags: ["#peinadodefiesta", "#partyhair"],
        },
        { src: "/manicuresemiperm.jpeg", tags: ["#manicure", "#nails"] },
        {
            src: "/colorfantasia.jpeg",
            tags: ["#colorfantasia", "#fantasyhair"],
        },
        { src: "/peinadorecogido.jpeg", tags: ["#peinadorecogido", "#updo"] },
        { src: "/lifting.jpeg", tags: ["#liftingdepestañas", "#lashes"] },
        { src: "/tintecejas.jpeg", tags: ["#tintedecejas", "#browtint"] },
        {
            src: "/maquillajesocial.jpeg",
            tags: ["#maquillajesocial", "#socialmakeup"],
        },
        { src: "/cortebob.jpeg", tags: ["#cortebob", "#bobhaircut"] },
        { src: "/pedicurediseño.jpeg", tags: ["#pedicureconarte", "#nailart"] },
        {
            src: "/pestañasvolruso.jpeg",
            tags: ["#volumenruso", "#lashesonfleek"],
        },
        { src: "/cortehombre.jpeg", tags: ["#cortehombre", "#barbershop"] },
        { src: "/trenzado.jpeg", tags: ["#trenzado", "#braids"] },
        { src: "/diseñouñas.jpeg", tags: ["#diseñodeuñas", "#naildesign"] },
        {
            src: "/microblanding.jpeg",
            tags: ["#microblading", "#cejasperfectas"],
        },
    ];

    return (
        <div className="h-full">
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 5 },
                }}
                loop={true}
            >
                {galleryImages.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative group flex flex-col justify-end h-[550px]  w-full rounded-2xl overflow-hidden px-8 my-10">
                            <Image
                                src={item.src}
                                alt={item.tags.join(" ")}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-wrap gap-2">
                                {item.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="text-white text-xs bg-pink-600/70 px-2 py-1 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
