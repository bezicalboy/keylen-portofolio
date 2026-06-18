/* ============================================================
   PORTFOLIO CONFIG  —  edit this file to make it yours
   ============================================================
   Everything the site shows comes from this one file.
   With `npm run dev` running, save this file and the page
   updates instantly (hot reload) — no refresh needed.
============================================================ */

export const PORTFOLIO = {

  /* ---- Who you are ---- */
  name: "Keylen Savra Seolova",
  role: "Illustrator & Graphite Artist",
  tagline: "Quiet studies of light, figure, and the spaces in between.",
  location: "Depok, ID",
  email: "aelovajoestar@gmail.com",

  /* ---- Social links (leave a value empty "" to hide it) ---- */
  socials: {
    instagram: "https://instagram.com/poetryofleur",
    twitter: "https://x.com/whoopswalk",
  },

  /* ============================================================
     YOUR ARTWORK
     ------------------------------------------------------------
     To ADD a drawing: copy one { ... } block, paste it,
     and change the values. That's it.

       image   — path to the file (drop files in /images)
       title   — name of the piece
       medium  — pencils? ink? charcoal? digital?
       year    — when you made it
       size    — "tall", "wide", or leave out for normal
     ============================================================ */
  works: [
    {
      image: "images/1.jpg",
      title: "Animal Drawing",
      medium: "Pencil",
      year: "2025",
      size: "tall",
    },
    {
      image: "images/2.jpg",
      title: "Potrait Drawing",
      medium: "Pencil",
      year: "2025",
    },
    {
      image: "images/3.jpg",
      title: "Potrait Drawing",
      medium: "Pencil",
      year: "2024",
      size: "wide",
    },
    {
      image: "images/4.jpg",
      title: "Potrait Drawing",
      medium: "Pencil",
      year: "2024",
    },
    {
      image: "images/5.jpg",
      title: "Potrait Drawing",
      medium: "Pencil",
      year: "2024",
      size: "tall",
    },
    {
      image: "images/6.jpg",
      title: "Potrait Drawing",
      medium: "Conté crayon",
      year: "2024",
    },
  ],
};
