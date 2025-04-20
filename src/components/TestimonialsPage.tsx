import { Testimonials } from "./Testimonials";

export default function TestimonialsPage() {
    return (
        <section
            id="testimonials"
            className="h-full p-6 md:p-20 pt-0 m-auto bg-gray-50"
        >
            <div className="flex flex-col items-start md:px-40">
                <div className="w-full flex flex-col md:items-start items-center justify-center p-4">
                    <p className="uppercase tracking-widest mb-4 font-sans font-semibold text-center md:text-left">
                        <span className="text-pink-600">▹</span> Testimonios{" "}
                        <span className="text-pink-600">◃</span>
                    </p>
                    <h3 className="text-4xl md:text-6xl font-light mb-8 leading-tight text-center md:text-left">
                        Confianza, Calidad y{" "}
                        <span className="italic text-pink-600">Cariño</span> en
                        Cada{" "}
                        <span className="italic text-pink-600">
                            Experiencia.
                        </span>
                    </h3>
                </div>
            </div>
            <Testimonials />
        </section>
    );
}
