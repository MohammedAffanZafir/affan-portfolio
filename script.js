// IMPORTANT: Replace this with an email address you control before publishing.
const PORTFOLIO_EMAIL = "your-email@example.com";

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#navLinks");

menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#contactForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const note = document.querySelector("#formNote");
  if (PORTFOLIO_EMAIL === "your-email@example.com") {
    note.textContent = "Before publishing: open script.js and replace your-email@example.com with your real email address. Then this form will open a pre-filled email.";
    note.style.color = "#f0c78a";
    return;
  }
  const form = new FormData(event.currentTarget);
  const name = String(form.get("name") || "").trim();
  const sender = String(form.get("email") || "").trim();
  const message = String(form.get("message") || "").trim();
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nReply to: ${sender}\n\n${message}`);
  window.location.href = `mailto:${PORTFOLIO_EMAIL}?subject=${subject}&body=${body}`;
  note.textContent = "Your email app should open with the message ready to send.";
});
