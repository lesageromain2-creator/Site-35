"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { postContact } from "@/lib/api";

export default function PrivatisationPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    guestCount: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const message = `Privatisation — ${form.name}\nEmail: ${form.email}\nTél: ${form.phone}\nType: ${form.eventType}\nDate: ${form.date}\nNombre de personnes: ${form.guestCount}\n\n${form.message}`;
    try {
      await postContact({
        name: form.name,
        email: form.email,
        phone: form.phone || undefined,
        subject: "Privatisation",
        message,
      });
      setSent(true);
      setForm({ name: "", email: "", phone: "", eventType: "", date: "", guestCount: "", message: "" });
    } catch {
      setError("L'envoi n'a pas abouti. Contactez-nous par téléphone au 04 78 00 00 35.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="pt-24 pb-16 px-4 min-h-screen bg-accent/30">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="md:w-2/5 shrink-0">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-primary">
            <Image src="/images/gallery-5.jpg" alt="Salle à privatiser" fill className="object-cover" sizes="40vw" />
          </div>
          <p className="mt-4 text-sm text-gray-600">Séminaires, cocktails, anniversaires, repas de groupe.</p>
        </div>
        <div className="flex-1 max-w-xl">
          <h1 className="font-heading text-4xl text-primary mb-2">Privatisation</h1>
          <p className="text-gray-600 mb-8">Privatisez le restaurant Sakura pour vos événements : séminaires, anniversaires, repas d&apos;entreprise.</p>

        {sent ? (
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
            <p className="font-heading text-xl text-primary mb-2">Demande envoyée</p>
            <p className="text-gray-600">Nous vous recontacterons rapidement pour organiser votre événement.</p>
            <Link href="/contact" className="inline-block mt-6 text-secondary font-medium hover:underline">Nous contacter</Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 space-y-4">
            {error && <p className="text-secondary text-sm">{error}</p>}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary mb-1">Nom / Société</label>
              <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">Email</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1">Téléphone</label>
              <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="eventType" className="block text-sm font-medium text-primary mb-1">Type d&apos;événement</label>
              <select id="eventType" name="eventType" value={form.eventType} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent">
                <option value="">Choisir</option>
                <option value="Séminaire">Séminaire</option>
                <option value="Cocktail">Cocktail</option>
                <option value="Anniversaire">Anniversaire</option>
                <option value="Repas d'entreprise">Repas d&apos;entreprise</option>
                <option value="Autre">Autre</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-primary mb-1">Date souhaitée</label>
                <input id="date" name="date" type="date" value={form.date} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent" />
              </div>
              <div>
                <label htmlFor="guestCount" className="block text-sm font-medium text-primary mb-1">Nombre de personnes</label>
                <input id="guestCount" name="guestCount" type="text" placeholder="Ex. 20" value={form.guestCount} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-primary mb-1">Votre message</label>
              <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent" placeholder="Décrivez votre projet..." />
            </div>
            <button type="submit" disabled={loading} className="w-full rounded-lg bg-secondary text-white py-3 font-medium hover:opacity-90 disabled:opacity-60">
              {loading ? "Envoi…" : "Envoyer la demande"}
            </button>
          </form>
        )}
        </div>
      </div>
    </div>
  );
}
