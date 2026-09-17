// ── EmailJS CONFIG ────────────────────────────────────────
// Fill these in after EmailJS setup (see README)
const EMAILJS_PUBLIC_KEY  = "OvgAzI0ZKokhwdoMf";
const EMAILJS_SERVICE_ID  = "service_mkd4u1n";
const EMAILJS_TEMPLATE_ID = "template_a9ba1cp";

// ── INIT EmailJS ──────────────────────────────────────────
emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

// ── NAV: scroll darkening ─────────────────────────────────
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.style.background = window.scrollY > 50
    ? "rgba(10, 15, 10, 0.97)"
    : "rgba(10, 15, 10, 0.80)";
}, { passive: true });

// ── NAV: hamburger toggle ─────────────────────────────────
const hamburger  = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});
mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => mobileMenu.classList.remove("open"));
});

// ── FADE-UP ON SCROLL ─────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings inside the same parent
      const siblings = entry.target.parentElement.querySelectorAll(".fade-up");
      let delay = 0;
      siblings.forEach(el => {
        if (el === entry.target) {
          entry.target.style.transitionDelay = `${delay}ms`;
        }
        delay += 80;
      });
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));

// ── ACTIVE NAV LINK on scroll ─────────────────────────────
const sections  = document.querySelectorAll("section[id]");
const navLinks  = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => {
        a.style.color = a.getAttribute("href") === `#${entry.target.id}`
          ? "var(--text)"
          : "";
      });
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });

sections.forEach(s => sectionObserver.observe(s));

// ── CONTACT FORM ──────────────────────────────────────────
const form       = document.getElementById("contact-form");
const submitBtn  = document.getElementById("submit-btn");
const formStatus = document.getElementById("form-status");

function setError(fieldId, msg) {
  document.getElementById(`${fieldId}-error`).textContent = msg;
}
function clearErrors() {
  ["name", "email", "message"].forEach(id => setError(id, ""));
  formStatus.textContent = "";
  formStatus.className = "form-status";
}
function validate(name, email, message) {
  let ok = true;
  if (!name.trim())                          { setError("name", "Name is required.");           ok = false; }
  if (!email.trim())                         { setError("email", "Email is required.");          ok = false; }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError("email", "Enter a valid email."); ok = false; }
  if (!message.trim())                       { setError("message", "Message cannot be empty."); ok = false; }
  else if (message.trim().length < 10)       { setError("message", "Message is too short.");    ok = false; }
  return ok;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  clearErrors();

  const name    = document.getElementById("name").value;
  const email   = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!validate(name, email, message)) return;

  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  try {
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      from_name:  name,
      from_email: email,
      message:    message,
      to_email:   "mehsarii18@gmail.com",
    });
    formStatus.textContent = "Message sent. I'll get back to you soon.";
    formStatus.className = "form-status success";
    form.reset();
  } catch (err) {
    console.error("EmailJS error:", err);
    formStatus.textContent = "Something went wrong. Email me directly at mehsarii18@gmail.com";
    formStatus.className = "form-status error";
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Send message";
  }
});