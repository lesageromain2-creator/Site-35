import Link from "next/link";

const contact = {
  email: "reservation@sakura-lyon.fr",
  phone: "04 78 00 00 35",
  address: "5 quai Rambaud, Lyon",
  hours: "Mar–Dim 12h–14h30, 19h–22h30",
};

export default function Footer() {
  return (
    <footer className="bg-primary text-accent border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-heading text-lg font-semibold text-white mb-2">Sakura</p>
            <p className="text-accent/80 text-sm">Cuisine japonaise authentique au cœur de Lyon.</p>
          </div>
          <div>
            <p className="font-heading text-sm font-semibold text-white mb-2">Contact</p>
            <p className="text-accent/80 text-sm">{contact.address}</p>
            <p className="text-accent/80 text-sm">
              <a href={`mailto:${contact.email}`} className="hover:text-secondary transition-colors">{contact.email}</a>
            </p>
            <p className="text-accent/80 text-sm">
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-secondary transition-colors">{contact.phone}</a>
            </p>
            <p className="text-accent/80 text-sm mt-1">{contact.hours}</p>
          </div>
          <div>
            <p className="font-heading text-sm font-semibold text-white mb-2">Navigation</p>
            <ul className="space-y-1 text-sm text-accent/80">
              <li><Link href="/menu" className="hover:text-secondary transition-colors">Menu</Link></li>
              <li><Link href="/reservation" className="hover:text-secondary transition-colors">Réservation</Link></li>
              <li><Link href="/galerie" className="hover:text-secondary transition-colors">Galerie</Link></li>
              <li><Link href="/privatisation" className="hover:text-secondary transition-colors">Privatisation</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-4 text-accent/60 text-xs">
          <Link href="/conditions-generales" className="hover:text-secondary transition-colors">CGV</Link>
          <Link href="/mentions-legales" className="hover:text-secondary transition-colors">Mentions légales</Link>
          <span>© {new Date().getFullYear()} Sakura — Lyon</span>
        </div>
      </div>
    </footer>
  );
}
