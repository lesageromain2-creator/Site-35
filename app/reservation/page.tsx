"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { postBooking } from "@/lib/api";

const TIME_SLOTS = ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"];

export default function ReservationPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    customer_name: "",
    customer_email: "",
    customer_phone: "",
    date: "",
    time_slot: "",
    party_size: "2",
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await postBooking({
        customer_name: form.customer_name,
        customer_email: form.customer_email,
        customer_phone: form.customer_phone || undefined,
        date: form.date,
        time_slot: form.time_slot || undefined,
        party_size: parseInt(form.party_size, 10) || 2,
        notes: form.notes || undefined,
      });
      setSent(true);
      setForm({ customer_name: "", customer_email: "", customer_phone: "", date: "", time_slot: "", party_size: "2", notes: "" });
    } catch (err) {
      setError("L'envoi n'a pas abouti. Vous pouvez nous appeler au 04 78 00 00 35.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-accent/30">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3 shrink-0">
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-primary">
            <Image src="/images/gallery-5.jpg" alt="Salle Sakura" fill className="object-cover" sizes="33vw" />
          </div>
          <p className="mt-4 text-sm text-gray-600">Mar–Dim 12h–14h30, 19h–22h30. 5 quai Rambaud, Lyon.</p>
        </div>
        <div className="flex-1 max-w-xl">
          <h1 className="font-heading text-4xl text-primary mb-2">Réservation</h1>
          <p className="text-gray-600 mb-8">Réservez votre table au restaurant Sakura.</p>

        {sent ? (
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
            <p className="font-heading text-xl text-primary mb-2">Merci !</p>
            <p className="text-gray-600">Votre demande de réservation a bien été envoyée. Nous vous recontacterons pour confirmer.</p>
            <Link href="/" className="inline-block mt-6 text-secondary font-medium hover:underline">Retour à l&apos;accueil</Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 space-y-4">
            {error && <p className="text-secondary text-sm">{error}</p>}
            <div>
              <label htmlFor="customer_name" className="block text-sm font-medium text-primary mb-1">Nom complet</label>
              <input id="customer_name" name="customer_name" type="text" required value={form.customer_name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="customer_email" className="block text-sm font-medium text-primary mb-1">Email</label>
              <input id="customer_email" name="customer_email" type="email" required value={form.customer_email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="customer_phone" className="block text-sm font-medium text-primary mb-1">Téléphone</label>
              <input id="customer_phone" name="customer_phone" type="tel" value={form.customer_phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-primary mb-1">Date</label>
                <input id="date" name="date" type="date" required min={today} value={form.date} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent" />
              </div>
              <div>
                <label htmlFor="time_slot" className="block text-sm font-medium text-primary mb-1">Heure</label>
                <select id="time_slot" name="time_slot" value={form.time_slot} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent">
                  <option value="">Choisir</option>
                  {TIME_SLOTS.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="party_size" className="block text-sm font-medium text-primary mb-1">Nombre de personnes</label>
              <select id="party_size" name="party_size" value={form.party_size} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-primary mb-1">Remarques (allergies, occasion…)</label>
              <textarea id="notes" name="notes" rows={3} value={form.notes} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent" />
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
