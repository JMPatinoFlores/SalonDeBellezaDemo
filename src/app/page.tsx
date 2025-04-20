import About from "@/components/About";
import Contact from "@/components/Contact";
import GalleryPage from "@/components/GalleryPage";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Services from "@/components/Services";
import TestimonialsPage from "@/components/TestimonialsPage";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <GalleryPage />
            <TestimonialsPage />
            <Contact />
            <Location />
        </>
    );
}
