import Image from "next/image";
import about from "../../public/about.jpg";
import about1 from "../../public/about1.jpg";
import Link from "next/link";
import { datosCliente } from "@/contants/clientInfo";
import { FaWhatsapp } from "react-icons/fa";

export default function About() {
    return (
        <section
            id="about"
            className="w-full m-auto flex items-center justify-center py-20 bg-gray-50"
        >
            <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-center items-center gap-10 px-4">
                {/* Texto + Imágenes */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
                    <div className="w-full flex flex-col items-center lg:items-start mb-8">
                        <p className="uppercase tracking-widest mb-4 font-sans font-semibold text-center lg:text-left">
                            <span className="text-pink-600"> ▹</span> Sobre
                            nosotras <span className="text-pink-600">◃</span>
                        </p>
                        <h3 className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight text-center lg:text-left">
                            Nuestro{" "}
                            <span className="italic text-pink-600">Viaje</span>{" "}
                            de{" "}
                            <span className="italic text-pink-600">
                                Excelencia
                            </span>{" "}
                            y Logros.
                        </h3>
                    </div>

                    {/* Imágenes */}
                    <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-6">
                        <div className="animate-bounce-slow">
                            <Image
                                src={about1}
                                alt="Planchado de cabello"
                                width={300}
                                height={300}
                                className="rounded-full object-cover shadow-2xl"
                            />
                        </div>
                        <div className="animate-bounce-slower">
                            <Image
                                src={about}
                                alt="Salón de belleza"
                                width={300}
                                height={300}
                                className="rounded-full object-cover shadow-2xl"
                            />
                        </div>
                    </div>
                </div>

                {/* Texto derecho */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                    <p className="md:text-xl sm:text-lg text-base font-sans mt-2 mb-10 max-w-lg">
                        En{" "}
                        <strong className="text-pink-600">
                            Glow Up Studio
                        </strong>
                        , creemos que cada persona tiene una belleza única
                        esperando a brillar. Nuestro equipo de expertos en
                        estilismo, maquillaje y cuidado personal está aquí para
                        resaltar lo mejor de ti, con pasión, dedicación y amor
                        por los detalles.
                    </p>
                    <Link
                        href={datosCliente.whatsapp}
                        target="_blank"
                        className="flex items-center primaryButton"
                    >
                        <FaWhatsapp className="mr-2 text-2xl" />
                        Contactar
                    </Link>
                </div>
            </div>
        </section>
    );
}
