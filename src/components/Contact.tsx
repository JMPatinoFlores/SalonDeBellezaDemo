import { datosCliente } from "@/contants/clientInfo";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { BiSolidLike } from "react-icons/bi";
import { FaFacebook, FaTiktok, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
    return (
        <section
            id="contact"
            className="bg-gray-50 pb-20 px-4 sm:px-6 md:px-20"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Izquierda */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl leading-tight">
                        Ponte en{" "}
                        <span className="text-pink-600 italic">Contacto</span>{" "}
                        con Nosotras.
                    </h2>

                    <div className="w-full flex justify-center md:justify-start">
                        <Image
                            src="/contactus.jpg"
                            alt={datosCliente.empresa}
                            width={500}
                            height={500}
                            className="rounded-2xl shadow-lg object-cover my-2 max-w-full h-auto"
                        />
                    </div>

                    <p className="text-xl md:text-2xl font-sans max-w-lg">
                        <span className="text-pink-600"> ▹</span> Estamos listas
                        para atenderte y ayudarte a resaltar tu belleza.
                    </p>
                </div>

                {/* Derecha */}
                <div className="flex flex-col space-y-8">
                    {/* Dirección */}
                    <div className="flex items-start gap-4">
                        <FaLocationDot className="text-pink-600 text-3xl md:text-4xl" />
                        <div>
                            <h3 className="text-2xl font-semibold mb-1">
                                Dirección
                            </h3>
                            <p className="font-sans text-lg md:text-xl">
                                {datosCliente.direccion}.{" "}
                                <Link
                                    href={datosCliente.mapa}
                                    target="_blank"
                                    className="text-pink-600 underline"
                                >
                                    Ver mapa
                                </Link>
                            </p>
                        </div>
                    </div>

                    {/* Teléfono */}
                    <div className="flex items-start gap-4">
                        <FaPhoneAlt className="text-pink-600 text-3xl md:text-4xl" />
                        <div>
                            <h3 className="text-2xl font-semibold mb-1">
                                Teléfono
                            </h3>
                            <Link
                                href={`tel:${datosCliente.telefono}`}
                                className="font-sans text-lg md:text-xl hover:text-pink-600 transition"
                            >
                                {datosCliente.telefono}
                            </Link>
                        </div>
                    </div>

                    {/* Correo */}
                    <div className="flex items-start gap-4">
                        <IoIosMail className="text-pink-600 text-3xl md:text-4xl" />
                        <div>
                            <h3 className="text-2xl font-semibold mb-1">
                                Correo electrónico
                            </h3>
                            <p className="font-sans text-lg md:text-xl">
                                {datosCliente.correo}
                            </p>
                        </div>
                    </div>

                    {/* Redes */}
                    <div className="flex items-start gap-4">
                        <BiSolidLike className="text-pink-600 text-3xl md:text-4xl" />
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">
                                Síguenos
                            </h3>
                            <div className="flex gap-6 mt-2">
                                <Link
                                    href={datosCliente.redes.facebook}
                                    target="_blank"
                                    className="hover:text-pink-600 text-2xl transition"
                                >
                                    <FaFacebook />
                                </Link>
                                <Link
                                    href={datosCliente.redes.instagram}
                                    target="_blank"
                                    className="hover:text-pink-600 text-2xl transition"
                                >
                                    <FaInstagram />
                                </Link>
                                <Link
                                    href={datosCliente.redes.tiktok}
                                    target="_blank"
                                    className="hover:text-pink-600 text-2xl transition"
                                >
                                    <FaTiktok />
                                </Link>
                                <Link
                                    href={datosCliente.redes.twitter}
                                    target="_blank"
                                    className="hover:text-pink-600 text-2xl transition"
                                >
                                    <FaXTwitter />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
