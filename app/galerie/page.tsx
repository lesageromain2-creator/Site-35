import Image from "next/image";

export const metadata = {
  title: "Galerie — Sakura",
  description: "Photos du restaurant Sakura : ambiance, plats, sushi, ramen. Lyon.",
};

const GALLERY_IMAGES = [
  { src: "/images/gallery-1.jpg", alt: "Ambiance restaurant" },
  { src: "/images/gallery-2.jpg", alt: "Plats japonais" },
  { src: "/images/gallery-3.jpg", alt: "Sushi et sashimi" },
  { src: "/images/gallery-4.jpg", alt: "Ramen" },
  { src: "/images/gallery-5.jpg", alt: "Salle" },
  { src: "/images/gallery-6.jpg", alt: "Détail plat" },
];

export default function GaleriePage() {
  return (
    <div className="pt-24 pb-16 px-4 min-h-screen bg-primary">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="font-heading text-4xl text-accent">Galerie</h1>
          <p className="mt-4 text-accent/80">Ambiance, plats et esprit Sakura.</p>
        </header>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <div key={i} className="relative aspect-square rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
