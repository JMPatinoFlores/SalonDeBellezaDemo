import { ServiceCard } from "./ServiceCard";

const serviciosSalon = [
    {
        name: "Tratamientos faciales",
        description:
            "Limpiezas profundas, exfoliaciones, mascarillas hidratantes y tratamientos antiedad para cuidar tu piel.",
        image: "/facial.jpg",
    },
    {
        name: "Depilación",
        description:
            "Eliminación del vello con cera, láser o eléctrica para una piel suave y libre de vello.",
        image: "/depilacion.jpg",
    },
    {
        name: "Masajes y tratamientos corporales",
        description:
            "Masajes relajantes, reductores, exfoliaciones y envolturas para mejorar tu bienestar.",
        image: "/masaje.jpg",
    },
    {
        name: "Cuidado del cabello",
        description:
            "Cortes, tintes, tratamientos capilares y peinados para un look espectacular.",
        image: "/cabello.jpg",
    },
    {
        name: "Maquillaje y asesoramiento estético",
        description:
            "Maquillaje profesional para eventos especiales y asesoramiento para mejorar tu rutina de belleza.",
        image: "/maquillaje.jpg",
    },
    {
        name: "Manicura",
        description:
            "Cuidado y fortalecimiento de uñas, esmaltado tradicional, semipermanente o en gel y diseños personalizados.",
        image: "/manicure.jpg",
    },
    {
        name: "Pedicura",
        description:
            "Cuidado de uñas de los pies, exfoliación, esmaltado y eliminación de durezas y callos.",
        image: "/pedicure.jpg",
    },
    {
        name: "Pestañas y Cejas",
        description:
            "Extensiones de pestañas, lifting, diseño de cejas, microblading y tinte para realzar tu mirada.",
        image: "/pestañas.jpg",
    },
];

export const ServicesPage = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {serviciosSalon.map((servicio, index) => (
                <ServiceCard
                    key={index}
                    name={servicio.name}
                    description={servicio.description}
                    image={servicio.image}
                />
            ))}
        </div>
    );
};
