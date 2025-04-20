import Image from "next/image";

interface ServiceCardProps {
    name: string;
    description: string;
    image: string;
}

export const ServiceCard = ({ name, description, image }: ServiceCardProps) => {
    return (
        <div className="relative group flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 h-[600px] w-full">
            <Image
                src={image}
                alt={name}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40"></div>
            <div className="relative text-white space-y-4">
                <h2 className="text-3xl">{name}</h2>
                <p className="font-sans">
                    <span className="text-pink-600">▹</span> {description}
                </p>
            </div>
        </div>
    );
};
