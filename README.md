# Mehak Ansari — Portfolio Website

Personal portfolio website showcasing my AI/ML projects, skills, certifications, and background.

**Live Site:** https://mehxarii.github.io

---

## Built With

- HTML5, CSS3, Vanilla JavaScript
- Space Grotesk + Inter (Google Fonts)
- EmailJS (contact form)
- GitHub Pages (hosting)

---

## Sections

- **Home** — Introduction and headline
- **About** — Background, stats, and links
- **Skills** — Languages, AI/ML, tools, and frameworks
- **Projects** — Askora, AI Resume Analyzer, NovaByte Network
- **Experience** — Teaching role at The Stairs School
- **Certifications** — CIT, Graphic Design, Web Development
- **Education** — UCP, Punjab Group of Colleges, Rehnumma School
- **Contact** — Working contact form + social links

---

## Projects Featured

### Askora — AI Academic Assistant
RAG-based chatbot for UCP students. Upload PDFs, ask questions, get accurate answers.
- Stack: Python, Streamlit, Groq API, LangChain, FAISS
- Live: https://askora-chatbot.streamlit.app/

### AI Resume Analyzer
Scores resumes against job descriptions, finds missing ATS keywords, rewrites weak bullets.
- Stack: Python, Streamlit, Gemini API, pypdf
- Live: https://mehak-resume-analyzer.streamlit.app/

### NovaByte Technologies Network
Multi-department company network with VLANs and structured IP addressing.
- Stack: Cisco Packet Tracer

---

## Contact Form Setup (EmailJS)

The contact form uses EmailJS to send emails directly to Gmail with no backend server.

1. Sign up at https://www.emailjs.com
2. Connect Gmail under Email Services
3. Create a template with `{{from_name}}`, `{{from_email}}`, `{{message}}` variables
4. Paste your Public Key, Service ID, and Template ID into `script.js`

---

## How to Update

```bash
git add .
git commit -m "what you changed"
git push
```

GitHub Pages redeploys automatically within 1–2 minutes.

---

## Folder Structure

```
portfolio/
├── index.html       — All 8 sections
├── style.css        — Design system, dark emerald theme, responsive
├── script.js        — Animations, nav, EmailJS contact form
├── assets/
│   ├── photo.jpg    — Profile photo (add when ready)
│   └── resume.pdf   — Downloadable resume
└── README.md
```

---

*Built by Mehak Ansari · BS Computer Science · UCP Rawalpindi*
