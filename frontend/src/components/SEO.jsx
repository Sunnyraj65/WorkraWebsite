import { useEffect } from "react";

const SITE_URL = "https://useworkra.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

/**
 * Helper — set or create a <meta> tag in <head>.
 */
function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Helper — set or create a <link> tag in <head>.
 */
function setLink(rel, href, extras = {}) {
  if (!href) return;
  let selector = `link[rel="${rel}"]`;
  if (extras.hrefLang) selector += `[hreflang="${extras.hrefLang}"]`;
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    Object.entries(extras).forEach(([k, v]) => el.setAttribute(k.toLowerCase(), v));
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * SEO Component — drop-in <head> manager for every page.
 *
 * @param {string}  title        – Page title (will append " | Workra")
 * @param {string}  description  – Meta description (160 chars max recommended)
 * @param {string}  path         – URL path e.g. "/all-services"
 * @param {string}  image        – OG image URL (absolute)
 * @param {string}  type         – og:type (default: "website")
 * @param {object}  jsonLd       – Additional JSON-LD structured data
 * @param {string}  keywords     – Comma-separated keywords
 * @param {boolean} noIndex      – Set to true to prevent indexing
 */
export const SEO = ({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  jsonLd,
  keywords,
  noIndex = false,
}) => {
  const fullTitle = title
    ? `${title} | Workra`
    : "Workra – House Help at Your Door in Minutes";
  const canonicalUrl = `${SITE_URL}${path}`;
  const metaDescription =
    description ||
    "Workra is Patna's smartest home services platform. Book verified plumbers, electricians, carpenters, and cleaners — powered by AI for instant quotes and hassle-free bookings.";

  useEffect(() => {
    // Title
    document.title = fullTitle;

    // Core meta
    setMeta("name", "description", metaDescription);
    setLink("canonical", canonicalUrl);
    if (keywords) setMeta("name", "keywords", keywords);
    if (noIndex) setMeta("name", "robots", "noindex, nofollow");

    // Open Graph
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:title", fullTitle); 
    setMeta("property", "og:description", metaDescription);
    setMeta("property", "og:image", image);
    setMeta("property", "og:site_name", "Workra");
    setMeta("property", "og:locale", "en_IN");

    // Twitter
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", metaDescription);
    setMeta("name", "twitter:image", image);

    // Alternate language
    setLink("alternate", canonicalUrl, { hrefLang: "en-in" });

    // JSON-LD Structured Data
    let scriptEl;
    if (jsonLd) {
      scriptEl = document.createElement("script");
      scriptEl.type = "application/ld+json";
      scriptEl.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(scriptEl);
    }

    // Cleanup JSON-LD on unmount
    return () => {
      if (scriptEl && scriptEl.parentNode) {
        scriptEl.parentNode.removeChild(scriptEl);
      }
    };
  }, [fullTitle, metaDescription, canonicalUrl, type, image, keywords, noIndex, jsonLd]);

  return null; // This component only manages <head>, renders nothing
};
