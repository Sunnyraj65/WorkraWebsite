/**
 * Netlify Edge Function — SEO Pre-rendering for React SPA
 *
 * Problem: React SPA returns the same index.html for every route.
 * Google's crawler doesn't execute JavaScript, so it sees every page
 * as a duplicate of the homepage.
 *
 * Solution: This edge function intercepts HTML responses and replaces
 * the <head> meta tags with the correct values for each route.
 */

const SITE_URL = "https://useworkra.com";
const DEFAULT_IMAGE = `${SITE_URL}/wlogo.png`;

// ──────────────────────────────────────────────────────────────
// SEO metadata for every route
// ──────────────────────────────────────────────────────────────
const SEO_DATA = {
  "/": {
    title: "Workra – House Help at Your Door in Minutes",
    description:
      "Workra is Patna's smartest home services platform. Book verified plumbers, electricians, carpenters, and cleaners — powered by AI for instant quotes and hassle-free bookings.",
  },
  "/all-services": {
    title:
      "All Home Services in Patna – Cleaning, Plumbing, Electrician & More | Workra",
    description:
      "Browse all Workra home services in Patna: floor cleaning, bathroom cleaning, AC repair, plumbing, carpentry, wiring & more. 0% commission. Book verified experts now.",
  },
  "/services/house-cleaning": {
    title: "House Cleaning in Patna – Book House Cleaning Service Online | Workra",
    description:
      "Complete house cleaning services — floors, rooms, kitchen, balcony and every corner of your home professionally cleaned. Book verified house cleaning experts in Patna with Workra. 0% commission.",
  },
  "/services/glass-cleaning": {
    title: "Glass Cleaning in Patna – Book Glass Cleaning Service Online | Workra",
    description:
      "Crystal-clear cleaning for windows, mirrors, glass doors, partitions and all glass surfaces. Book verified glass cleaning experts in Patna with Workra. 0% commission.",
  },
  "/services/utensil-cleaning": {
    title:
      "Utensil Cleaning in Patna – Book Utensil Cleaning Service Online | Workra",
    description:
      "Thorough cleaning and scrubbing of all kitchen utensils, pots, pans and cookware. Book verified utensil cleaning experts in Patna with Workra. 0% commission.",
  },
  "/services/bathroom-cleaning": {
    title:
      "Bathroom Cleaning in Patna – Book Bathroom Cleaning Service Online | Workra",
    description:
      "Deep sanitization and scrubbing of toilets, tiles, fixtures, mirrors and entire bathroom. Book verified bathroom cleaning experts in Patna with Workra. 0% commission.",
  },
  "/services/deep-cleaning": {
    title:
      "Deep Cleaning in Patna – Book Deep Cleaning Service Online | Workra",
    description:
      "Complete home deep cleaning and sanitization — every room, corner and surface covered. Book verified deep cleaning experts in Patna with Workra. 0% commission.",
  },
  "/services/sofa-cleaning": {
    title:
      "Sofa Cleaning in Patna – Book Sofa Cleaning Service Online | Workra",
    description:
      "Professional sofa & upholstery cleaning with deep steam extraction for fabric, leather and all sofa types. Book verified sofa cleaning experts in Patna with Workra. 0% commission.",
  },
  "/services/dusting": {
    title: "Dusting Service in Patna – Book Dusting Service Online | Workra",
    description:
      "Thorough dusting of all surfaces, furniture, shelves, fans, fixtures and hard-to-reach areas. Book verified dusting experts in Patna with Workra. 0% commission.",
  },
  "/services/window-cleaning": {
    title:
      "Window Cleaning in Patna – Book Window Cleaning Service Online | Workra",
    description:
      "Window cleaning for glass panes, frames, grills and sills, inside and outside. Book verified window cleaning experts in Patna with Workra. 0% commission.",
  },
  "/services/ac-repair": {
    title: "AC Repair in Patna – Book AC Repair & Service Online | Workra",
    description:
      "Expert AC installation, repair, gas refilling and annual maintenance for all brands. Book verified AC repair technicians in Patna with Workra. 0% commission.",
  },
  "/services/carpenter": {
    title: "Carpenter in Patna – Book Carpentry Service Online | Workra",
    description:
      "Skilled carpenters for furniture repair, assembly, custom woodwork and door/window fixes. Book verified carpenters in Patna with Workra. 0% commission.",
  },
  "/services/equipment-repair": {
    title:
      "Equipment Repair in Patna – Book Appliance Repair Service Online | Workra",
    description:
      "Fix and maintain all household appliances, equipment and electronic devices. Book verified equipment repair experts in Patna with Workra. 0% commission.",
  },
  "/services/plumbing": {
    title: "Plumber in Patna – Book Plumbing Service Online | Workra",
    description:
      "Leak fixes, pipe fitting, tap repair, drain cleaning and complete plumbing solutions. Book verified plumbers in Patna with Workra. 0% commission.",
  },
  "/services/socket-repair": {
    title:
      "Socket Repair in Patna – Book Socket & Switch Repair Online | Workra",
    description:
      "Switch and socket installation, repair, replacement and electrical safety checks. Book verified electricians in Patna with Workra. 0% commission.",
  },
  "/services/wiring": {
    title:
      "Electrician & Wiring in Patna – Book Wiring Service Online | Workra",
    description:
      "Complete electrical wiring, rewiring, circuit setup and safety inspections. Book verified electricians in Patna with Workra. 0% commission.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Workra",
    description:
      "Read Workra's privacy policy. Learn how we collect, use, and protect your personal information when you use our home services platform.",
  },
};

// ──────────────────────────────────────────────────────────────
// Edge Function handler
// ──────────────────────────────────────────────────────────────
export default async function handler(request, context) {
  // Get the response from Netlify (the original index.html)
  const response = await context.next();

  // Only modify HTML responses (skip JS, CSS, images, etc.)
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/html")) {
    return response;
  }

  // Get the URL path
  const url = new URL(request.url);
  let path = url.pathname;

  // Remove trailing slash (except for root)
  if (path !== "/" && path.endsWith("/")) {
    path = path.slice(0, -1);
  }

  // Look up SEO data for this path
  const seo = SEO_DATA[path];
  if (!seo) {
    // No SEO data for this path, return the original response
    return response;
  }

  const { title, description } = seo;
  const canonicalUrl = `${SITE_URL}${path === "/" ? "/" : path}`;

  // Read the original HTML
  let html = await response.text();

  // ── Replace <title> ──
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${title}</title>`
  );

  // ── Replace <meta name="description"> ──
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeAttr(description)}" />`
  );

  // ── Replace <link rel="canonical"> ──
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );

  // ── Replace <meta property="og:url"> ──
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );

  // ── Replace <meta property="og:title"> ──
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeAttr(title)}" />`
  );

  // ── Replace <meta property="og:description"> ──
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapeAttr(description)}" />`
  );

  // ── Replace <meta name="twitter:title"> ──
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escapeAttr(title)}" />`
  );

  // ── Replace <meta name="twitter:description"> ──
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${escapeAttr(description)}" />`
  );

  // ── Replace <link rel="alternate" hreflang> ──
  html = html.replace(
    /<link\s+rel="alternate"\s+hreflang="en-in"\s+href="[^"]*"\s*\/?>/,
    `<link rel="alternate" hreflang="en-in" href="${canonicalUrl}" />`
  );

  // Return the modified HTML
  return new Response(html, {
    status: response.status,
    headers: response.headers,
  });
}

/**
 * Escape special characters for use in HTML attributes
 */
function escapeAttr(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// ──────────────────────────────────────────────────────────────
// Netlify Edge Function config
// ──────────────────────────────────────────────────────────────
export const config = {
  path: "/*",
};
