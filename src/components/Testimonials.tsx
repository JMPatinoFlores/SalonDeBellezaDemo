"use client";

import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../app/styles.css";

export const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "María López",
            comment:
                "¡Increíble servicio! Mi cabello nunca había lucido tan saludable y brillante. El equipo es súper profesional y atento. ✨",
            service: "Color de Cabello",
            image: "/maria.jpg",
        },
        {
            id: 2,
            name: "Fernanda González",
            comment:
                "Me hicieron un maquillaje de boda espectacular. Se mantuvo intacto toda la noche. ¡Mil gracias! 💄💍",
            service: "Maquillaje de Boda",
            image: "/fernanda.jpg",
        },
        {
            id: 3,
            name: "Ana Pérez",
            comment:
                "Amé el diseño de mis uñas. Muy detallistas y pacientes. Súper recomendado. 💅🏼",
            service: "Manicure Semipermanente",
            image: "/ana.jpg",
        },
        {
            id: 4,
            name: "Carlos Ramírez",
            comment:
                "Buscaba un corte moderno y me entendieron perfecto. Definitivamente regresaré. ✂️🔥",
            service: "Corte para Hombre",
            image: "/carlos.jpg",
        },
        {
            id: 5,
            name: "Jessica Torres",
            comment:
                "Me hicieron un lifting de pestañas que quedó precioso. ¡Mis ojos se ven enormes! 👀💖",
            service: "Lifting de Pestañas",
            image: "/jessica.jpg",
        },
        {
            id: 6,
            name: "Daniela Morales",
            comment:
                "Me encantó el peinado para la fiesta. Recibí muchísimos cumplidos. ¡Gracias por hacerlo con tanto cariño! 🎉👑",
            service: "Peinado de Fiesta",
            image: "/daniela.jpg",
        },
        {
            id: 7,
            name: "Liliana Mendoza",
            comment:
                "El pedicure spa estuvo de ensueño. Un momento de relajación que necesitaba. 🧖‍♀️🦶🏼",
            service: "Pedicure Spa",
            image: "/liliana.jpg",
        },
    ];

    return (
        <div className="h-full">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                breakpoints={{
                    680: { slidesPerView: 1 },
                    1024: { slidesPerView: 3 },
                }}
                navigation={true}
                className="mx-10"
            >
                {testimonials.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col items-center justify-center my-10 shadow-md rounded-2xl">
                            <div className="bg-pink-50 rounded-t-2xl p-6 relative w-full flex flex-col items-center min-h-[200px] text-center">
                                <p className="italic text-xl py-5">
                                    “{item.comment}”
                                </p>
                                <div className="absolute -bottom-10">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={100}
                                        height={100}
                                        className="rounded-full border-4 border-pink-600 object-cover"
                                    />
                                </div>
                            </div>
                            <div className="bg-pink-600 w-full rounded-b-2xl pt-12 pb-6 text-center">
                                <h3 className="text-xl font-bold text-white">
                                    {item.name}
                                </h3>
                                <h3 className="text-white uppercase font-sans tracking-widest">
                                    {item.service}
                                </h3>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
