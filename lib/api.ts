/**
 * Client API — tous les appels passent par le backend (NEXT_PUBLIC_BACKEND_URL)
 * Site 35 — Sakura (restaurant-sakura)
 */
const BASE = process.env.NEXT_PUBLIC_BACKEND_URL || "";
const SITE_ID = process.env.NEXT_PUBLIC_SITE_ID || "restaurant-sakura";

export async function api<T>(
  path: string,
  options?: RequestInit & { body?: unknown }
): Promise<T> {
  const { body, ...rest } = options ?? {};
  const res = await fetch(`${BASE}${path}`, {
    ...rest,
    headers: { "Content-Type": "application/json", ...rest.headers },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error((err as { error?: string }).error || res.statusText);
  }
  return res.json() as Promise<T>;
}

export function postContact(data: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}) {
  return api<{ ok: boolean }>("/api/contact", {
    method: "POST",
    body: { site_id: SITE_ID, ...data },
  });
}

export function postBooking(data: {
  customer_name: string;
  customer_email: string;
  customer_phone?: string;
  date: string;
  time_slot?: string;
  party_size?: number;
  notes?: string;
}) {
  return api<{ ok: boolean }>("/api/booking", {
    method: "POST",
    body: { site_id: SITE_ID, type: "table-reservation", ...data },
  });
}

export function getMenu() {
  return api<{ id: string; name: string; items: { name: string; description: string | null; price: string | null; category: string | null }[] }[]>(`/api/menu/${SITE_ID}`);
}

export { SITE_ID };
