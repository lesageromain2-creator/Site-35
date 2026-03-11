export const metadata = {
  title: "Mentions légales — Sakura",
  description: "Mentions légales du site du restaurant Sakura, Lyon.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="pt-24 pb-16 px-4 min-h-screen bg-accent/30">
      <div className="max-w-3xl mx-auto prose prose-primary">
        <h1 className="font-heading text-4xl text-primary">Mentions légales</h1>
        <div className="mt-8 text-gray-700 space-y-4">
          <p><strong>Restaurant Sakura</strong></p>
          <p>5 quai Rambaud, Lyon</p>
          <p>Email : reservation@sakura-lyon.fr — Tél : 04 78 00 00 35</p>
          <p className="mt-6">Hébergement et publication : voir contrat d&apos;hébergement.</p>
          <p>Crédits photos et textes : Sakura.</p>
        </div>
      </div>
    </div>
  );
}
