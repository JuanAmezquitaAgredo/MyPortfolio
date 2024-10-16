import Image from "next/image";
import Link from "next/link";

export default function HomeComponent() {
    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/backHome.jpg"
                    alt="Fondo de computadoras"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="z-10 bg-white bg-opacity-80 p-1 rounded-lg shadow-2xl max-w-4xl w-full mx-4 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0 md:mr-8">
                    <Image
                        src="/images/profile_juan.png"
                        alt="Tu nombre"
                        width={350}
                        height={350}
                        className="rounded-full shadow-lg"
                    />
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Juan Sebastian Amezquita
                    </h1>
                    <p className="text-xl text-gray-600 mb-6">
                        Software Developer
                    </p>
                    <p className="text-gray-700 mb-8">
                        Passionate about creating innovative and efficient solutions.
                        Specialized in web development and mobile applications.
                    </p>
                         <Link href="/about">
                        <button className="bg-[#3B82F6] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
                            Start
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
