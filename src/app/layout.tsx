import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Glow Up Studio - Diseño web para salones de belleza",
    description:
        "Creamos páginas web modernas y personalizadas para impulsar negocios con un diseño profesional, rápido y accesible.",
    keywords: [
        "salón de belleza online",
        "diseño web para estéticas",
        "página web para spa",
        "branding digital",
        "reservas en línea",
        "servicios de belleza",
    ],
    openGraph: {
        title: "Glow Up Studio - Diseño web para negocios de estética",
        description:
            "Creamos páginas web modernas y personalizadas para impulsar negocios de belleza con un diseño profesional y accesible.",
        url: "https://glowupstudio.vercel.app/",
        siteName: "Glow Up Studio",
        images: [
            {
                url: "https://opengraph.b-cdn.net/production/images/155e6ea5-7ce6-45e5-b36e-c3ad2ea8253b.png?token=D-xa4OoqgHIIyHQeNWsekwbGANLi3MqcQI2pYxa6MsI&height=611&width=1200&expires=33281197992",
                width: 1200,
                height: 611,
                alt: "Página web profesional para salones de belleza",
            },
        ],
        locale: "es_MX",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <div className="bg-white">
                    <Navbar />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
