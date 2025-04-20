import { Gallery } from "./Gallery";

export default function GalleryPage() {
    return (
        <section
            id="gallery"
            className="h-full px-5 md:px-10 py-20 m-auto bg-gray-50"
        >
            <div className="flex flex-col items-center md:items-end md:px-40">
                <p className="uppercase tracking-widest mb-4 font-sans font-semibold text-center md:text-right">
                    <span className="text-pink-600">▹</span> Galería de imágenes{" "}
                    <span className="text-pink-600">◃</span>
                </p>
                <h3 className="text-4xl md:text-6xl font-light mb-8 leading-tight text-center md:text-right">
                    Reflejos de Nuestro{" "}
                    <span className="italic text-pink-600">Talento</span> y{" "}
                    <span className="italic text-pink-600">Pasión.</span>
                </h3>
            </div>
            <Gallery />
        </section>
    );
}
