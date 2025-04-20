export default function Location() {
    return (
        <section
            id="location"
            className="flex flex-col px-10 justify-center items-center bg-gradient-to-t from-pink-600 to-gray-50 py-20"
        >
            <p className="uppercase tracking-widest mb-4 font-sans font-semibold">
                <span className="text-pink-600"> ▹</span> ¿Dónde estamos?{" "}
                <span className="text-pink-600">◃</span>
            </p>
            <h3 className="text-4xl md:text-6xl font-light mb-8 text-center leading-tight">
                <span className="italic text-pink-600">Visítanos</span> y
                Descubre un Espacio Diseñado para Realzar tu{" "}
                <span className="italic text-pink-600">Belleza.</span>
            </h3>
            <div className="w-full max-w-5xl h-[300px] md:h-[500px] overflow-hidden rounded-2xl shadow-lg">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d332.9314127966238!2d-98.93767658903406!3d19.25238310906843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1bf7ba4d5063%3A0x79697e497287ef43!2sC.%20Pirul%2038%2C%20San%20Miguel%20Xico%2C%2056614%20Valle%20de%20Chalco%20Solidaridad%2C%20M%C3%A9x.!5e0!3m2!1ses-419!2smx!4v1745131378778!5m2!1ses-419!2smx"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
}
