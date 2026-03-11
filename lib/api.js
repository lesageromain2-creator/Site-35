const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL || "";
const SITE = process.env.NEXT_PUBLIC_SITE_ID || "restaurant-sakura";
export const api = {
  contact: (d) => fetch(`${BACKEND}/api/contact`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...d, site_id: SITE }) }),
  booking: (d) => fetch(`${BACKEND}/api/booking`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...d, site_id: SITE }) }),
  products: () => fetch(`${BACKEND}/api/products/${SITE}`),
  menu: () => fetch(`${BACKEND}/api/menu/${SITE}`),
  events: () => fetch(`${BACKEND}/api/events/${SITE}`),
  reviews: () => fetch(`${BACKEND}/api/reviews/${SITE}`),
};
