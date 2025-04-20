"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { GiHairStrands, GiLipstick } from "react-icons/gi";
import { PiPaintBrushHousehold, PiHairDryer } from "react-icons/pi";
import { MdFace3 } from "react-icons/md";
import { FaHandSparkles } from "react-icons/fa";
import { TbMoodKid } from "react-icons/tb";
import Link from "next/link";
import { datosCliente } from "@/contants/clientInfo";

export default function Hero() {
    const services = [
        {
            name: "Corte de cabello",
            price: "Desde $50",
            icon: GiHairStrands,
        },
        {
            name: "Alisado",
            price: "Desde $100",
            icon: PiHairDryer,
        },
        {
            name: "Coloración de cabello",
            price: "Desde $100",
            icon: PiPaintBrushHousehold,
        },
        {
            name: "Peinados",
            price: "Desde $50",
            icon: MdFace3,
        },
        {
            name: "Maquillaje",
            price: "Desde $50",
            icon: GiLipstick,
        },
        {
            name: "Manicura",
            price: "Desde $50",
            icon: FaHandSparkles,
        },
        {
            name: "Corte para niños",
            price: "Desde $50",
            icon: TbMoodKid,
        },
    ];

    return (
        <section
            id="home"
            className="relative text-white flex h-screen items-center justify-center w-full text-center"
        >
            <Image
                src="/haircut.jpg"
                alt="haircut"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 flex flex-col items-center px-2 md:px-8 w-full">
                <p className="uppercase tracking-widest mb-2 font-sans font-semibold">
                    ▹ Salon de belleza ◃
                </p>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
                    <span className="italic font-light">Resalta</span> Tu{" "}
                    <span className="italic font-light">Belleza Natural</span>
                </h1>
                <p className="max-w-3xl mb-8 font-sans">
                    Nullam pharetra facilisis erat, ac iaculis arcu vestibulum
                    id. Phasellus tincidunt elit ultricies lorem semper, id
                    sodales magna viverra. Donec facilisis.
                </p>
                <div className="w-full my-8">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        modules={[Autoplay]}
                        loop={true}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                            1440: { slidesPerView: 5 },
                        }}
                        className="w-full"
                    >
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <SwiperSlide key={index}>
                                    <div className="flex flex-col justify-center items-center space-y-4 p-6 bg-white/10 rounded-xl shadow-md backdrop-blur-md">
                                        <Icon size={100} />
                                        <h2 className="text-2xl font-bold">
                                            {service.name}
                                        </h2>
                                        <p className="font-sans text-lg uppercase">
                                            {service.price}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>

                <Link
                    href={datosCliente.whatsapp}
                    target="_blank"
                    className="border border-white px-8 py-3 rounded-full hover:bg-pink-500/70 hover:border-pink-500/70 hover:cursor-pointer transition duration-300 uppercase font-semibold mt-8"
                >
                    Agenda tu cita
                </Link>
            </div>
        </section>
    );
}
