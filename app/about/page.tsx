import Image from "next/image";

export const metadata = {
  title: "Notre histoire — Sakura",
  description: "Chef Kenji Watanabe et l'équipe Sakura. Cuisine japonaise authentique à Lyon depuis 2018.",
};

const aboutTitle = "Chef Kenji et l'esprit Sakura";
const aboutText = "Installé à Lyon depuis 2018, le chef Kenji Watanabe a appris son art à Osaka avant de faire vivre la tradition japonaise dans un cadre contemporain. Poissons frais livrés quotidiennement, riz vinaigré maison, bouillons ramen mijotés longuement : chaque plat raconte le Japon sans cliché. L'équipe vous accueille pour un déjeuner rapide ou un dîner en plusieurs services.";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 px-4 min-h-screen bg-accent/30">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-heading text-4xl text-primary mb-8">{aboutTitle}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-primary">
            <Image src="/images/chef.jpg" alt="Chef Kenji et l'équipe Sakura" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority />
          </div>
          <div>
            <p className="text-gray-700 leading-relaxed">{aboutText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
