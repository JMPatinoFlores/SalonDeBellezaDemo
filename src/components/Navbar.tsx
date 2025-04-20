"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { datosCliente } from "@/contants/clientInfo";
import logo from "../../public/logo-glowupstudio.png";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-gray-50 shadow-lg sticky top-0 z-50 py-2 px-4 md:px-10 flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="#hero" scroll={true} className="flex-shrink-0">
                <Image src={logo} alt="logo" height={60} width={60} />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 font-semibold text-base lg:text-lg">
                <Link href="#hero" scroll={true} className="navLink">
                    Inicio
                </Link>
                <Link href="#about" scroll={true} className="navLink">
                    Sobre nosotras
                </Link>
                <Link href="#services" scroll={true} className="navLink">
                    Servicios
                </Link>
                <Link href="#gallery" scroll={true} className="navLink">
                    Galería
                </Link>
                <Link href="#testimonials" scroll={true} className="navLink">
                    Testimonios
                </Link>
                <Link href="#contact" scroll={true} className="navLink">
                    Contacto
                </Link>
                <Link href="#location" scroll={true} className="navLink">
                    Ubicación
                </Link>
            </div>

            {/* Botón WhatsApp en escritorio */}
            <div className="hidden md:flex w-auto">
                <Link
                    href={datosCliente.whatsapp}
                    target="_blank"
                    className="primaryButton flex items-center"
                >
                    <FaWhatsapp className="mr-2 text-2xl" />
                    Contactar
                </Link>
            </div>

            {/* Botón hamburguesa en móvil */}
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu}>
                    {menuOpen ? (
                        <FaTimes className="text-3xl text-pink-600" />
                    ) : (
                        <FaBars className="text-3xl text-pink-600" />
                    )}
                </button>
            </div>

            {/* Menú móvil */}
            {menuOpen && (
                <div className="absolute top-20 left-0 w-full bg-gray-50 flex flex-col items-center space-y-6 py-10 shadow-md z-40">
                    <Link
                        onClick={toggleMenu}
                        href="#hero"
                        scroll={true}
                        className="navLink"
                    >
                        Inicio
                    </Link>
                    <Link
                        onClick={toggleMenu}
                        href="#about"
                        scroll={true}
                        className="navLink"
                    >
                        Sobre nosotras
                    </Link>
                    <Link
                        onClick={toggleMenu}
                        href="#services"
                        scroll={true}
                        className="navLink"
                    >
                        Servicios
                    </Link>
                    <Link
                        onClick={toggleMenu}
                        href="#gallery"
                        scroll={true}
                        className="navLink"
                    >
                        Galería
                    </Link>
                    <Link
                        onClick={toggleMenu}
                        href="#testimonials"
                        scroll={true}
                        className="navLink"
                    >
                        Testimonios
                    </Link>
                    <Link
                        onClick={toggleMenu}
                        href="#contact"
                        scroll={true}
                        className="navLink"
                    >
                        Contacto
                    </Link>
                    <Link
                        onClick={toggleMenu}
                        href="#location"
                        scroll={true}
                        className="navLink"
                    >
                        Ubicación
                    </Link>
                    <Link
                        href={datosCliente.whatsapp}
                        target="_blank"
                        className="primaryButton flex items-center"
                    >
                        <FaWhatsapp className="mr-2 text-2xl" />
                        Contactar
                    </Link>
                </div>
            )}
        </nav>
    );
}
