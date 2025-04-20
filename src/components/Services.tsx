import { ServicesPage } from "./ServicesPage";

export default function Services() {
    return (
        <section
            id="services"
            className="flex flex-col px-10 justify-center items-center bg-gradient-to-bl from-white via-pink-100 to-pink-500 py-20"
        >
            <p className="uppercase tracking-widest mb-4 font-sans font-semibold">
                <span className="text-pink-600"> ▹</span> Nuestros servicios{" "}
                <span className="text-pink-600">◃</span>
            </p>
            <h3 className="text-5xl md:text-6xl font-light mb-8 leading-tight">
                Tenemos{" "}
                <span className="italic text-pink-600">Experiencia</span> en
                Hacerte <span className="italic text-pink-600">Más Bella.</span>
            </h3>
            <ServicesPage />
        </section>
    );
}
