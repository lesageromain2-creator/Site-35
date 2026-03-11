"use client";

import { useState } from "react";
import Image from "next/image";
import { postContact } from "@/lib/api";

const contact = {
  email: "reservation@sakura-lyon.fr",
  phone: "04 78 00 00 35",
  address: "5 quai Rambaud, Lyon",
  hours: "Mar–Dim 12h–14h30, 19h–22h30",
};

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await postContact({
        name: form.name,
        email: form.email,
        phone: form.phone || undefined,
        subject: "Contact",
        message: form.message,
      });
      setSent(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setError("L'envoi n'a pas abouti. Vous pouvez nous appeler au 04 78 00 00 35.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="pt-24 pb-16 px-4 min-h-screen bg-accent/30">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-heading text-4xl text-primary mb-8">Contact</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-primary mb-6">
              <iframe
                title="Carte Sakura"
                src={`https://www.google.com/maps?q=${encodeURIComponent(contact.address)}&output=embed`}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="font-heading text-lg text-primary mb-2">Adresse</p>
            <p className="text-gray-700">{contact.address}</p>
            <p className="font-heading text-lg text-primary mt-4 mb-2">Horaires</p>
            <p className="text-gray-700">{contact.hours}</p>
            <p className="font-heading text-lg text-primary mt-4 mb-2">Téléphone</p>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="text-secondary hover:underline">{contact.phone}</a>
            <p className="font-heading text-lg text-primary mt-4 mb-2">Email</p>
            <a href={`mailto:${contact.email}`} className="text-secondary hover:underline">{contact.email}</a>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            {sent ? (
              <p className="text-primary font-medium">Merci. Votre message a bien été envoyé.</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && <p className="text-secondary text-sm">{error}</p>}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-1">Nom</label>
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
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-1">Message</label>
                  <textarea id="message" name="message" rows={4} required value={form.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent" />
                </div>
                <button type="submit" disabled={loading} className="w-full rounded-lg bg-secondary text-white py-3 font-medium hover:opacity-90 disabled:opacity-60">
                  {loading ? "Envoi…" : "Envoyer"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
