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
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

// ──────────────────────────────────────────────────────────────
// SEO metadata for every route
// ──────────────────────────────────────────────────────────────
const SEO_DATA = {
  "/": {
    title: "Workra – House Help at Your Door in Minutes | ₹99/Hour in Patna",
    description:
      "Patna's trusted on-demand house help platform. Book verified female domestic helpers for house cleaning, utensils, and chores in minutes at flat ₹99/hour.",
  },
  "/all-services": {
    title:
      "All House Help & Maid Services in Patna – Flat ₹99/Hour | Workra",
    description:
      "Browse Workra house help services in Patna: sweeping & mopping (jhadu-pocha), utensil washing (bartan), dusting, bathroom cleaning & more at flat ₹99/hour.",
  },
  "/services/house-cleaning": {
    title: "House Cleaning in Patna (Jhadu-Pocha) – Book at ₹99/hr | Workra",
    description:
      "Complete house sweeping, mopping, dusting, and room upkeep by verified female house helpers. Book at flat ₹99/hour with Workra.",
  },
  "/services/ironing-and-folding": {
    title: "Ironing & Folding Service in Patna – Book at ₹99/hr | Workra",
    description:
      "Crisp clothes ironing, crease removal, neat folding & wardrobe organizing. Book verified helpers in Patna with Workra at flat ₹99/hour.",
  },
  "/services/utensil-cleaning": {
    title:
      "Utensil Cleaning in Patna (Bartan) – Book at ₹99/hr | Workra",
    description:
      "Thorough cleaning, scrubbing, and drying of all kitchen utensils, pots, pans, and cookware. Book at flat ₹99/hour with Workra.",
  },
  "/services/bathroom-cleaning": {
    title:
      "Bathroom Cleaning in Patna – Book at ₹99/hr | Workra",
    description:
      "Everyday bathroom tile scrubbing, toilet sanitization, and washbasin cleaning at flat ₹99/hour with Workra.",
  },
  "/services/dusting": {
    title: "Dusting & Organizing in Patna – Book at ₹99/hr | Workra",
    description:
      "Thorough dusting of all surfaces, furniture, shelves, fans, and home organizing at flat ₹99/hour with Workra.",
  },
  "/services/window-cleaning": {
    title:
      "Window Cleaning in Patna – Book Window Cleaning at ₹99/hr | Workra",
    description:
      "Window cleaning for glass panes, frames, grills, and sills at flat ₹99/hour with Workra.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Workra",
    description:
      "Read Workra's privacy policy. Learn how we collect, use, and protect your personal information when you use our home services platform.",
  },
  "/terms-and-conditions": {
    title: "Terms & Conditions | Workra",
    description:
      "Read Workra's terms and conditions. Learn about the terms of service governing the use of Workra's cleaning and house help platform in Patna.",
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
