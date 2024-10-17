'use client'
import Image from "next/image";
import { Code, Database, Server, Globe, Cpu, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Modal from "@/components/UI/modal/modal";

interface ISkillCard {
    title: string,
    icon: any,
    description: string,
}

export default function AboutUs() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="mt-10 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Juan Sebastian Amezquita</h1>
                    <p className="text-xl md:text-2xl text-gray-300">Software Developer</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="col-span-2">
                        <h2 className="text-3xl font-bold mb-6 text-[#3B82F6]">About Me</h2>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            <strong>Mechanical Engineer and Aspiring Software Developers</strong> <br />

                            I am a dedicated Mechanical Engineer from EAFIT University, with strong foundations in innovation,
                            project leadership, and teamwork. My experience spans engineering drafting and hands-on skills in automotive and motorcycle mechanics.

                            Currently, I am expanding my expertise into software development, focusing on technologies such as TypeScript,
                            JavaScript, Next.js, HTML, and CSS. This new chapter allows me to merge my engineering background with web development,
                            offering a unique approach to problem-solving and project management.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            I am eager to continue learning and take on new challenges in both the automotive and software industries,
                            aiming to contribute innovative and efficient solutions to every project I undertake.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#3B82F6] rounded-lg transform rotate-3"></div>
                        <Image
                            src="/images/profile_juan.png"
                            alt="Juan Sebastian Amezquita"
                            width={300}
                            height={400}
                            className="relative z-10 rounded-lg shadow-xl"
                        />
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-[#3B82F6]">Skills & Expertise</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        <SkillCard icon={<Code className="h-8 w-8" />} title="Languages" description="JavaScript, Python, TypeScript, MATLAP" />
                        <SkillCard icon={<Globe className="h-8 w-8" />} title="Front-end" description="React, Vite, Next.js" />
                        <SkillCard icon={<Server className="h-8 w-8" />} title="Back-end" description="Node.js, Django, FastAPI" />
                        <SkillCard icon={<Database className="h-8 w-8" />} title="Databases" description="PostgreSQL, MongoDB, Redis" />
                        <SkillCard icon={<Cpu className="h-8 w-8" />} title="AI/ML" description="TensorFlow, PyTorch, scikit-learn" />
                        <SkillCard icon={<Zap className="h-8 w-8" />} title="DevOps" description="Docker, Kubernetes, CI/CD" />
                    </div>
                </div>
                <div className="w-full mx-auto flex justify-around">
                    <Link href="/projects" className="w-auto flex justify-center">
                        <button className="w-[200px] mx-auto bg-[#3B82F6] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
                            Projects...
                        </button>
                    </Link>
                    <button className="w-auto flex justify-center" onClick={openModal}>
                        <p className="w-[200px] mx-auto bg-[#3B82F6] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">View CV</p>
                    </button>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} customClass="w-[190vh] h-[90vh]">
                <div className="flex-col justify-center items-center">
                    <iframe src="/docs/HV_Juan.pdf" className="w-full h-[70vh]"></iframe>
                    <button className="w-full m-2 flex justify-center">
                        <a href="/docs/HV_Juan.pdf" download className="w-[200px] mx-auto bg-[#3B82F6] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">Download CV</a>
                    </button>
                </div>
            </Modal>
        </div>
    )
}

function SkillCard({ icon, title, description }: ISkillCard) {
    return (
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-[#3B82F6] mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    )
}