// Template: FoodZero Restaurant — landing restaurant japonais (enrichie)
import Link from "next/link";
import Image from "next/image";

// Contenu depuis content.md + brand.json — thème métier restaurant japonais
const heroTitle = "Une cuisine japonaise authentique au cœur de Lyon";
const heroSubtitle = "Restaurant Sakura — sushi, sashimi, ramen, plats mijotés et ambiance conviviale";
const aboutTitle = "Chef Kenji et l'esprit Sakura";
const aboutText = "Installé à Lyon depuis 2018, le chef Kenji Watanabe a appris son art à Osaka avant de faire vivre la tradition japonaise dans un cadre contemporain. Poissons frais livrés quotidiennement, riz vinaigré maison, bouillons ramen mijotés longuement : chaque plat raconte le Japon sans cliché. L'équipe vous accueille pour un déjeuner rapide ou un dîner en plusieurs services.";
const carteTitle = "Notre carte";
const carteItems = [
  { title: "Sushi & sashimi", desc: "Sélection du jour, makis, nigiri, chirashi", img: "/images/gallery-2.jpg" },
  { title: "Ramen", desc: "Tonkotsu, miso, shoyu — bouillon maison, nouilles fraîches", img: "/images/gallery-4.jpg" },
  { title: "Plats chauds", desc: "Teriyaki, katsu, donburi, légumes sautés", img: "/images/gallery-3.jpg" },
  { title: "Desserts & boissons", desc: "Mochi, thé vert, saké, bières japonaises", img: "/images/gallery-6.jpg" },
];
const signaturesTitle = "Suggestions du chef";
const signatures = [
  { label: "Chirashi du jour", img: "/images/gallery-1.jpg" },
  { label: "Ramen tonkotsu", img: "/images/gallery-4.jpg" },
  { label: "Assortiment sashimi", img: "/images/gallery-3.jpg" },
];
const reviews = [
  {
    name: "Camille R.",
    rating: 5,
    text: "« Probablement les meilleurs ramen que j’ai mangés à Lyon. Bouillon très profond, cuisson parfaite, service discret mais chaleureux. »",
  },
  {
    name: "Julien M.",
    rating: 5,
    text: "« Menu dégustation sushi incroyable, chaque pièce est différente et travaille un produit de saison. On sent la maîtrise du chef. »",
  },
  {
    name: "Anaïs L.",
    rating: 4,
    text: "« Très belle adresse en bord de Saône, ambiance calme, carte courte et maîtrisée. Mention spéciale pour les mochis maison. »",
  },
];
const instaPosts = [
  {
    handle: "@sakura.lyon",
    text: "Nouveaux chirashi du midi — poissons de la criée, riz vinaigré maison, légumes croquants. Disponible uniquement en semaine.",
  },
  {
    handle: "@sakura.lyon",
    text: "Service du soir complet ce week‑end, pensez à réserver pour profiter de notre menu ramen & saké.",
  },
  {
    handle: "@sakura.lyon",
    text: "Les premiers mochi glacés maison arrivent à la carte, inspirés des parfums de la pâtisserie japonaise contemporaine.",
  },
  {
    handle: "@sakura.lyon",
    text: "En cuisine, le chef Kenji et son équipe travaillent chaque jour un poisson différent en sashimi — à découvrir au comptoir.",
  },
];
const mediaBrands = [
  "Guide des Tables Lyonnaises",
  "Lyon Food Stories",
  "Magazine Cuisine & Voyage",
  "Tribune de Lyon",
  "Le Bonbon Lyon",
  "Restaurant Guru",
  "À la lyonnaise",
];
const ctaTitle = "Réservez votre table — places limitées";
const contact = { address: "5 quai Rambaud, Lyon", hours: "Mar–Dim 12h–14h30, 19h–22h30", phone: "04 78 00 00 35", email: "reservation@sakura-lyon.fr" };

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero fullscreen — next/image */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-primary">
        <div className="absolute inset-0">
          <Image src="/images/hero.jpg" alt="" fill className="object-cover opacity-50" priority sizes="100vw" />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight">
            {heroTitle}
          </h1>
          <p className="mt-6 text-lg text-accent/90 max-w-2xl mx-auto">{heroSubtitle}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/reservation" className="rounded-lg bg-secondary text-white px-6 py-3 font-medium hover:opacity-90 transition-opacity">
              Réserver une table
            </Link>
            <Link href="/menu" className="rounded-lg border-2 border-white text-white px-6 py-3 font-medium hover:bg-white hover:text-primary transition-colors">
              Voir la carte
            </Link>
          </div>
        </div>
      </section>

      {/* About — image chef (BANQUE IMAGES/restauration) à côté de la description */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-primary order-2 md:order-1">
            <Image src="/images/chef.jpg" alt="Chef Kenji et l'équipe Sakura" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-heading text-3xl md:text-4xl text-primary mb-6">{aboutTitle}</h2>
            <p className="text-gray-700 leading-relaxed">{aboutText}</p>
            <Link href="/about" className="inline-block mt-6 text-secondary font-medium hover:underline">En savoir plus →</Link>
          </div>
        </div>
      </section>

      {/* Suggestions du chef — visuel métier */}
      <section className="py-20 px-4 bg-accent/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-10 text-center">{signaturesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {signatures.map((s, i) => (
              <Link key={i} href="/menu" className="group block rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={s.img} alt={s.label} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="33vw" />
                </div>
                <p className="p-4 font-heading text-lg text-primary text-center">{s.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Notre carte — 4 blocs avec visuels */}
      <section id="carte" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-10 text-center">{carteTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {carteItems.map((item) => (
              <div key={item.title} className="flex flex-col md:flex-row gap-4 rounded-xl overflow-hidden bg-accent/30 border border-gray-100">
                <div className="relative w-full md:w-40 h-48 md:h-auto md:min-w-[10rem] shrink-0">
                  <Image src={item.img} alt={item.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 200px" />
                </div>
                <div className="p-4 flex-1">
                  <h3 className="font-heading text-xl text-primary">{item.title}</h3>
                  <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/menu" className="rounded-lg bg-primary text-white px-6 py-3 font-medium hover:opacity-90 transition-opacity">
              Voir la carte complète
            </Link>
          </div>
        </div>
      </section>

      {/* Horaires & lieu — infos pratiques */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-heading text-xl text-accent mb-2">Où nous trouver</h3>
            <p className="text-accent/90">{contact.address}</p>
            <p className="mt-2 text-accent/80 text-sm">{contact.hours}</p>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="mt-2 inline-block text-secondary hover:underline">{contact.phone}</a>
          </div>
          <div className="relative aspect-video md:aspect-[2/1] rounded-xl overflow-hidden bg-white/10">
            <Image src="/images/gallery-5.jpg" alt="Salle du restaurant" fill className="object-cover opacity-80" sizes="50vw" />
          </div>
        </div>
      </section>

      {/* Ils parlent de nous — cartes médias, défilement auto gauche → droite */}
      <section className="py-16 px-4 bg-white overflow-hidden">
        <h2 className="font-heading text-3xl md:text-4xl text-primary mb-10 text-center">Ils parlent de nous</h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll-media gap-6 w-max">
            {[...mediaBrands, ...mediaBrands].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex-shrink-0 w-56 h-24 rounded-xl bg-accent/50 border border-gray-200 flex items-center justify-center px-6 shadow-sm"
              >
                <span className="font-heading text-primary text-center text-lg">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avis clients — carrousel horizontal simple */}
      <section className="py-20 px-4 bg-accent">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-8 text-center">Ils parlent de Sakura</h2>
          <div className="flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="min-w-[260px] max-w-sm snap-start bg-white rounded-xl p-5 shadow-sm border border-gray-200 flex-shrink-0"
              >
                <p className="font-heading text-sm text-primary mb-1">{review.name}</p>
                <p className="text-yellow-500 text-sm mb-2">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">{review.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Moments en images — posts type Instagram */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-6 text-center">Moments en cuisine & en salle</h2>
          <div className="flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory">
            {instaPosts.map((post, index) => (
              <div
                key={`${post.handle}-${index}`}
                className="min-w-[260px] max-w-xs snap-start bg-accent/40 rounded-xl overflow-hidden border border-accent/60 flex-shrink-0"
              >
                <div className="relative aspect-[4/5] bg-primary/70">
                  <Image
                    src={`/images/gallery-${(index % 6) + 1}.jpg`}
                    alt="Moment Sakura"
                    fill
                    className="object-cover"
                    sizes="260px"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-500 mb-1">{post.handle}</p>
                  <p className="text-sm text-gray-800 leading-relaxed">{post.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-primary mb-6">{ctaTitle}</h2>
          <Link href="/reservation" className="inline-block rounded-lg bg-secondary text-white px-8 py-4 font-medium hover:opacity-90 transition-opacity">
            Réserver une table
          </Link>
        </div>
      </section>
    </div>
  );
}
