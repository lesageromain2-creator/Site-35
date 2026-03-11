import Link from "next/link";
import Image from "next/image";
import { getMenu } from "@/lib/api";

export const metadata = {
  title: "Carte & Menu — Sakura",
  description: "Sushi, sashimi, ramen, plats chauds. Carte du restaurant japonais Sakura, Lyon.",
};

export default async function MenuPage() {
  let menus: { id: string; name: string; items: { name: string; description: string | null; price: string | null; category: string | null }[] }[] = [];
  try {
    menus = await getMenu();
  } catch {
    // Fallback affichage statique si API indisponible
  }

  const categories = [
    { name: "Sushi & sashimi", items: "Sélection du jour, makis, nigiri, chirashi" },
    { name: "Ramen", items: "Tonkotsu, miso, shoyu — bouillon maison, nouilles fraîches" },
    { name: "Plats chauds", items: "Teriyaki, katsu, donburi, légumes sautés" },
    { name: "Desserts & boissons", items: "Mochi, thé vert, saké, bières japonaises" },
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-accent/30">
      <div className="relative h-56 md:h-72 w-full bg-primary">
        <Image src="/images/gallery-1.jpg" alt="Notre carte" fill className="object-cover opacity-80" priority sizes="100vw" />
        <div className="absolute inset-0 bg-primary/50 flex items-end p-6">
          <div>
            <h1 className="font-heading text-3xl md:text-4xl text-white">Notre carte</h1>
            <p className="text-accent/90 mt-1">Sushi, sashimi, ramen et plats du chef.</p>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-10">

        {menus.length > 0 ? (
          <div className="space-y-10">
            {menus.map((menu) => (
              <section key={menu.id}>
                <h2 className="font-heading text-2xl text-primary border-b border-primary/20 pb-2 mb-4">{menu.name}</h2>
                <ul className="space-y-4">
                  {menu.items.map((item, i) => (
                    <li key={i} className="flex justify-between gap-4 py-2 border-b border-gray-200/80">
                      <div>
                        <p className="font-medium text-primary">{item.name}</p>
                        {item.description && <p className="text-sm text-gray-600">{item.description}</p>}
                      </div>
                      {item.price != null && <span className="text-secondary font-medium whitespace-nowrap">{item.price} €</span>}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        ) : (
          <div className="space-y-10">
            {categories.map((cat) => (
              <section key={cat.name}>
                <h2 className="font-heading text-2xl text-primary border-b border-primary/20 pb-2 mb-4">{cat.name}</h2>
                <p className="text-gray-600">{cat.items}</p>
                <p className="mt-2 text-sm text-gray-500">Carte détaillée sur place ou sur demande.</p>
              </section>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link href="/reservation" className="rounded-lg bg-secondary text-white px-6 py-3 font-medium hover:opacity-90">
            Réserver une table
          </Link>
        </div>
      </div>
    </div>
  );
}
