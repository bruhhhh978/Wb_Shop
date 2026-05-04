import "./styles.css";

const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.getElementById("mobileMenu");
const navLinks = mobileMenu ? Array.from(mobileMenu.querySelectorAll("a")) : [];

function setMenu(open) {
  if (!menuBtn || !mobileMenu) return;
  menuBtn.setAttribute("aria-expanded", String(open));
  mobileMenu.hidden = !open;
  document.documentElement.classList.toggle("menu-open", open);
}

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
    setMenu(!isOpen);
  });
  navLinks.forEach((a) =>
    a.addEventListener("click", () => {
      setMenu(false);
    }),
  );
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenu(false);
  });
}

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(contactForm);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();
    const subject = encodeURIComponent(`Tư vấn AI - ${name || "KTV AI"}`);
    const body = encodeURIComponent(`Tên: ${name}\nEmail: ${email}\n\nBài toán:\n${message}\n`);
    window.location.href = `mailto:hello@ktv.ai?subject=${subject}&body=${body}`;
    if (formNote)
      formNote.textContent =
        "Đang mở email… Nếu không tự mở, hãy dùng nút “Email trực tiếp”.";
  });
}

const header = document.querySelector("[data-elevate]");
const onScroll = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 8);
};
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

/** Scroll-in animation: mọi section + header + footer */
function initScrollReveal() {
  const sections = document.querySelectorAll(".scroll-section");
  if (!sections.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    sections.forEach((el) => el.classList.add("scroll-section--in"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("scroll-section--in");
        io.unobserve(entry.target);
      }
    },
    { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );

  sections.forEach((el) => io.observe(el));
}

initScrollReveal();
