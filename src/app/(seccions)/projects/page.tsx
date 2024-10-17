'use client'
import Card from "@/components/UI/cartProject/cartProject"

const cardsData = [
    {
        id: 1,
        imageUrl: "/images/Urbana_project.png",
        title: "Raices Urbanas",
        description: "Project developed in JS with login and routing.",
        git:"https://github.com/MoralesWilll/Raices-Urbanas-JS.git"
    },
    {
        id: 2,
        imageUrl: "/images/complexus_project.png",
        title: "Complexus",
        description: "Internal social network for buildings developed with Next.js, following best authentication practices.",
        git:"https://github.com/JuanAmezquitaAgredo/complexus_frontend.git"
    },
    {
        id: 3,
        imageUrl: "/images/RickAndMorty_project.png",
        title: "Rick And Morty",
        description: "Consumption of the Rick and Morty API, presented through cards.",
        git:"https://github.com/JuanAmezquitaAgredo/Rick_and_Morty.git"
    },
    {
        id: 4,
        imageUrl: "/images/project1.png",
        title: "Model",
        description: "Layout of an illustrative page with HTML and CSS.",
        url:"https://juanamezquitaagredo.github.io/PruebaDeDeesempe-oHTMLyCSS/",
        git:"https://github.com/JuanAmezquitaAgredo/PruebaDeDeesempe-oHTMLyCSS.git"
    },
    {
        id: 5,
        imageUrl: "/images/inspiradoras.png",
        title: "HTML and CSS",
        description: "Card layout and various designs using HTML and CSS.",
        url:"https://juanamezquitaagredo.github.io/cajas/",
        git:"https://github.com/JuanAmezquitaAgredo/cajas.git"
    },
    {
      id: 6,
      imageUrl: "/images/login_project.png",
      title: "Internationalization",
      description: "Create a project using TypeScript and Internationalization",
      url:"https://frontend-simu.vercel.app/",
      git:"https://github.com/JuanAmezquitaAgredo/Frontend_simu.git"
  },   
]

export default function CardsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">MY PROJECTS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardsData.map((card) => (
            <Card
              key={card.id}
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
              urlOpenPage={card.url}
              urlopenCode={card.git}
            />
          ))}
        </div>
      </div>
    </div>
  )
}