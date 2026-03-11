export const metadata = {
  title: "Conditions générales — Sakura",
  description: "Conditions générales de réservation et d'utilisation du restaurant Sakura, Lyon.",
};

export default function CGVPage() {
  return (
    <div className="pt-24 pb-16 px-4 min-h-screen bg-accent/30">
      <div className="max-w-3xl mx-auto prose prose-primary">
        <h1 className="font-heading text-4xl text-primary">Conditions générales</h1>
        <p className="text-gray-600 mt-2">Restaurant Sakura — Lyon</p>
        <div className="mt-8 text-gray-700 space-y-4">
          <h2 className="font-heading text-xl text-primary">Réservation</h2>
          <p>La réservation de table est confirmée après échange avec le restaurant. En cas d&apos;annulation, merci de prévenir au plus tôt.</p>
          <h2 className="font-heading text-xl text-primary">Horaires</h2>
          <p>Mar–Dim 12h–14h30, 19h–22h30. Fermé le lundi.</p>
          <h2 className="font-heading text-xl text-primary">Contact</h2>
          <p>reservation@sakura-lyon.fr — 04 78 00 00 35 — 5 quai Rambaud, Lyon.</p>
        </div>
      </div>
    </div>
  );
}
