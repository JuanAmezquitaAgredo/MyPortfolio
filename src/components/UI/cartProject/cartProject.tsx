import { Github, MonitorUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface CardProps {
    imageUrl: string;
    title: string;
    description: string;
    urlOpenPage?: string;
    urlopenCode?: string;
}

export default function Card({
    imageUrl,
    title,
    description,
    urlopenCode,
    urlOpenPage,
}: CardProps) {
    const [hovered, setHovered] = useState(false);
    const openPage = urlOpenPage || "";
    const opencode = urlopenCode || "";

    return (
        <div
            className="relative max-w-md rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer border"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="relative h-48 w-full">
                <Image
                    src={imageUrl}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className={`transition-transform duration-700 ${hovered ? "scale-110" : "scale-100"
                        }`}
                />
            </div>
            <div
                className={`absolute inset-0 bg-black/70 p-6 flex flex-col justify-center items-center transition-all duration-700 transform ${hovered ? "translate-x-0 translate-y-0" : "-translate-x-full translate-y-full"
                    }`}
            >
                <h2 className="font-bold text-xl mb-2 text-white">{title}</h2>
                <p className="text-white text-base mb-4">{description}</p>
                <div className="flex justify-around w-full">
                    {openPage && (
                        <Link href={openPage} className="text-blue-500 hover:text-blue-700">
                            <MonitorUp size={32} className="text-white"/>
                        </Link>
                    )}
                    {opencode && (
                        <Link href={opencode} className="text-gray-800 hover:text-gray-900">
                            <Github size={32} className="text-white"/>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
