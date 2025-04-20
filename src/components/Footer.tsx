"use client";

import { datosCliente } from "@/contants/clientInfo";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-pink-600 w-full min-h-[500px] flex items-center justify-center text-white">
            <div className="md:w-2/3 w-full px-4 text-pink-50 flex flex-col">
                {/* Título */}
                <div className="w-full text-7xl">
                    <h2 className="w-full md:w-2/3">
                        Tu Belleza, Nuestra Pasión. Contáctanos.
                    </h2>
                </div>

                {/* Información + Botón */}
                <div className="flex mt-8 flex-col md:flex-row md:justify-between">
                    <p className="w-full md:w-2/3 font-sans">
                        Para garantizar tu confianza, toda nuestra información
                        está verificada. Si tienes alguna duda o comentario
                        sobre nuestros servicios, ¡no dudes en contactarnos!
                    </p>
                    <div className="w-44 pt-6 md:pt-0">
                        <Link
                            href={datosCliente.whatsapp}
                            target="_blank"
                            className="flex items-center bg-gray-50 hover:bg-pink-100 text-pink-600 font-bold px-4 xl:px-6 py-2 xl:py-3 rounded-full transition duration-300 uppercase"
                        >
                            <FaWhatsapp className="mr-2 text-2xl" />
                            Contactar
                        </Link>
                    </div>
                </div>

                {/* Empresa + Redes */}
                <div className="flex flex-col">
                    <div className="flex mt-24 mb-12 flex-row justify-between">
                        <h3 className="font-sans font-bold text-2xl">
                            {datosCliente.empresa}.
                        </h3>
                        <div className="flex flex-row space-x-8 items-center">
                            <Link
                                href={datosCliente.redes.facebook}
                                target="_blank"
                                className="hover:scale-110 text-2xl transition duration-200"
                            >
                                <FaFacebook />
                            </Link>
                            <Link
                                href={datosCliente.redes.instagram}
                                target="_blank"
                                className="hover:scale-110 text-2xl transition duration-200"
                            >
                                <FaInstagram />
                            </Link>
                            <Link
                                href={datosCliente.redes.tiktok}
                                target="_blank"
                                className="hover:scale-110 text-2xl transition duration-200"
                            >
                                <FaTiktok />
                            </Link>
                            <Link
                                href={datosCliente.redes.twitter}
                                target="_blank"
                                className="hover:scale-110 text-2xl transition duration-200"
                            >
                                <FaXTwitter />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Línea y derechos */}
                <hr className="border-pink-50" />
                <p className="w-full text-center my-12">
                    © {new Date().getFullYear()} {datosCliente.empresa}. Todos
                    los derechos reservados.
                </p>
            </div>
        </footer>
    );
}
