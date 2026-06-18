/* ============================================================
   app.js — reads PORTFOLIO from config.js and builds the page.
   You normally never need to touch this file.
============================================================ */

import "./styles.css";
import { PORTFOLIO } from "./config.js";

(function () {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const cfg = PORTFOLIO || {};

  // Resolve a config image path (e.g. "images/foo.svg") against Vite's base
  // URL so it works in dev, at a domain root, and in a subfolder alike.
  const asset = (p) =>
    /^(https?:)?\/\//.test(p) ? p : import.meta.env.BASE_URL + String(p).replace(/^\//, "");

  /* ---- text content ---- */
  $("heroRole").textContent = cfg.role || "";
  $("heroName").textContent = cfg.name || "Your Name";
  $("heroTagline").textContent = cfg.tagline || "";
  $("aboutTagline").textContent = cfg.tagline || "";
  $("aboutLocation").textContent = cfg.location || "—";
  $("footerName").textContent = cfg.name || "";
  $("footerYear").textContent = new Date().getFullYear();
  $("navMark").textContent = (cfg.name || "·").trim().charAt(0) || "·";
  document.title = `${cfg.name || "Portfolio"} — ${cfg.role || "Portfolio"}`;

  const emailEl = $("contactEmail");
  if (cfg.email) {
    emailEl.textContent = cfg.email;
    emailEl.href = "mailto:" + cfg.email;
  } else {
    emailEl.style.display = "none";
  }

  /* ---- socials ---- */
  const socialsEl = $("contactSocials");
  const labels = { instagram: "Instagram", behance: "Behance", twitter: "Twitter / X" };
  Object.entries(cfg.socials || {}).forEach(([key, url]) => {
    if (!url) return;
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = labels[key] || key;
    li.appendChild(a);
    socialsEl.appendChild(li);
  });

  /* ---- gallery ---- */
  const works = Array.isArray(cfg.works) ? cfg.works : [];
  const gallery = $("gallery");

  works.forEach((w, i) => {
    const card = document.createElement("article");
    card.className = "card" + (w.size ? " card--" + w.size : "");
    card.dataset.index = i;
    card.innerHTML = `
      <div class="card__frame">
        <img src="${asset(w.image)}" alt="${escapeHtml(w.title || "")}" loading="lazy" />
      </div>
      <div class="card__meta">
        <span class="card__title">${escapeHtml(w.title || "Untitled")}</span>
        <span class="card__year">${escapeHtml(w.year || "")}</span>
      </div>
      <div class="card__medium">${escapeHtml(w.medium || "")}</div>
    `;
    card.addEventListener("click", () => openLightbox(i));
    gallery.appendChild(card);
  });

  /* ---- reveal on scroll ---- */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.transitionDelay = (e.target.dataset.index % 3) * 0.08 + "s";
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".card").forEach((c) => io.observe(c));

  /* ---- lightbox ---- */
  const lb = $("lightbox");
  const lbImg = $("lbImg");
  const lbCap = $("lbCaption");
  let current = 0;

  function openLightbox(i) {
    current = i;
    renderLightbox();
    lb.classList.add("open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    lb.classList.remove("open");
    lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  function step(dir) {
    current = (current + dir + works.length) % works.length;
    renderLightbox();
  }
  function renderLightbox() {
    const w = works[current];
    lbImg.src = asset(w.image);
    lbImg.alt = w.title || "";
    lbCap.innerHTML = `${escapeHtml(w.title || "Untitled")}<small>${escapeHtml(
      [w.medium, w.year].filter(Boolean).join(" · ")
    )}</small>`;
  }

  $("lbClose").addEventListener("click", closeLightbox);
  $("lbNext").addEventListener("click", () => step(1));
  $("lbPrev").addEventListener("click", () => step(-1));
  lb.addEventListener("click", (e) => { if (e.target === lb) closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  });

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );
  }
})();
