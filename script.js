/* =====================================================================
   SITE CONFIG — edit links here once; every page updates automatically.
   ===================================================================== */
const SITE = {
  name: "Jashwanthi Bhukya",
  user: "jashwanthi",
  initials: "JB",
  email: "jashwanthibhukya@gmail.com",
  github: "https://github.com/bhukyajashwanthi",
  githubUser: "bhukyajashwanthi",
  linkedin: "https://www.linkedin.com/in/bhukya-jashwanthi-b642b6258",
  linkedinPath: "/in/bhukya-jashwanthi-b642b6258",
  x: "https://x.com/jashwanthi_",
  xHandle: "@jashwanthi_",
  travelRepo: "https://github.com/bhukyajashwanthi/ai-travel-planner-students",
  travelDemo: "https://jashwanthi-travel-planner.streamlit.app",
  resume: "Jashwanthi_Bhukya_Resume.pdf",
};

const ICONS = {
  github: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
  x: '<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true"><path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93zm-1.29 19.5h2.04L6.49 3.24H4.3z"/></svg>',
  email: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13zm2.3.1 7.7 6.2 7.7-6.2a.5.5 0 0 0-.2-.1h-15a.5.5 0 0 0-.2.1zM20 7.8l-7.4 6a1 1 0 0 1-1.2 0L4 7.8v10.7c0 .3.2.5.5.5h15c.3 0 .5-.2.5-.5V7.8z"/></svg>',
};

function socialRow(cls, withEmail) {
  const items = [
    ["LinkedIn", SITE.linkedin, ICONS.linkedin],
    ["GitHub", SITE.github, ICONS.github],
    ["X", SITE.x, ICONS.x],
  ];
  if (cls === "hero-socials") items.unshift(items.splice(1, 1)[0]); // hero order: GitHub first, like the reference
  if (withEmail) items.push(["Email", "mailto:" + SITE.email, ICONS.email]);
  return `<div class="socials-icons ${cls}">${items.map(([t, h, i]) =>
    `<a href="${h}" ${h.startsWith("mailto") ? "" : 'target="_blank" rel="noopener"'} aria-label="${t}" title="${t}">${i}</a>`).join("")}</div>`;
}

(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const page = document.body.dataset.page || "home";

  /* ---------- shared header ---------- */
  const NAV = [["home", "index.html"], ["experience", "experience.html"], ["projects", "projects.html"],
    ["certifications", "certifications.html"], ["resume", "resume.html"], ["contact", "contact.html"]];
  document.body.insertAdjacentHTML("afterbegin", `
    <canvas id="particles" aria-hidden="true"></canvas>
    <header class="nav"><div class="container">
      <a href="index.html" class="brand"><span class="brand-logo">${SITE.initials}</span><span>${SITE.user} <span class="brand-host">@ai:~$</span></span></a>
      <ul class="nav-links" id="nav-links">${NAV.map(([n, h]) => `<li><a href="${h}"${n === page ? ' class="active"' : ""}>${n}</a></li>`).join("")}</ul>
      <div class="nav-right"><span class="status">open to work</span><button class="menu-btn" aria-label="Toggle menu" aria-expanded="false">☰</button></div>
    </div></header>`);

  /* ---------- shared footer + agent ---------- */
  document.body.insertAdjacentHTML("beforeend", `
    <footer><div class="container">
      <div>
        <div class="foot-term">${SITE.user}@ai:~$ <span>echo "thanks for visiting"</span></div>
        <div class="foot-copy">© ${new Date().getFullYear()} ${SITE.name} · All rights reserved</div>
      </div>
      ${socialRow("footer-socials", true)}
    </div></footer>
    <div class="agent" id="agent" role="dialog" aria-label="Portfolio assistant">
      <div class="agent-head"><span class="name">portfolio_agent</span><span class="model">offline · v1.0</span></div>
      <div class="agent-log" id="agent-log"></div>
      <form class="agent-form" id="agent-form" autocomplete="off"><b>$</b><input id="agent-in" placeholder="ask anything..." aria-label="Ask the portfolio assistant"><button type="submit" aria-label="Send">↵</button></form>
    </div>
    <button class="fab" id="fab" aria-label="Open portfolio assistant" aria-expanded="false">&gt;_</button>
    <div class="toast" id="toast" role="status"></div>`);

  document.querySelectorAll("[data-socials]").forEach((el) => (el.outerHTML = socialRow(el.dataset.socials, false)));
  document.querySelectorAll("[data-icon]").forEach((el) => (el.innerHTML = ICONS[el.dataset.icon] || ""));

  /* ---------- toast ---------- */
  const toastEl = document.getElementById("toast");
  let toastTimer;
  const toast = (msg) => {
    toastEl.textContent = msg; toastEl.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2200);
  };

  /* ---------- particle background ---------- */
  const canvas = document.getElementById("particles");
  if (!reduceMotion) {
    const ctx = canvas.getContext("2d");
    let w, h, dots;
    const resize = () => {
      w = canvas.width = innerWidth; h = canvas.height = innerHeight;
      const count = Math.min(80, Math.floor((w * h) / 20000));
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h, r: Math.random() * 1.4 + 0.4,
        vx: (Math.random() - 0.5) * 0.15, vy: (Math.random() - 0.5) * 0.15,
        a: Math.random() * 0.5 + 0.15, c: Math.random() < 0.8 ? "57,255,145" : Math.random() < 0.5 ? "34,217,255" : "240,180,41",
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        d.x = (d.x + d.vx + w) % w; d.y = (d.y + d.vy + h) % h;
        ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${d.c},${d.a})`; ctx.fill();
        for (let j = i + 1; j < dots.length; j++) {
          const e = dots[j], dx = d.x - e.x, dy = d.y - e.y, dist = dx * dx + dy * dy;
          if (dist < 9000) { ctx.strokeStyle = `rgba(57,255,145,${0.06 * (1 - dist / 9000)})`; ctx.lineWidth = 0.6; ctx.beginPath(); ctx.moveTo(d.x, d.y); ctx.lineTo(e.x, e.y); ctx.stroke(); }
        }
      }
      requestAnimationFrame(draw);
    };
    resize(); addEventListener("resize", resize); draw();
  }

  /* ---------- mobile menu ---------- */
  const menuBtn = document.querySelector(".menu-btn");
  const links = document.getElementById("nav-links");
  menuBtn.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.textContent = open ? "✕" : "☰";
  });

  /* ---------- reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.1 });
    revealEls.forEach((el) => io.observe(el));
  } else revealEls.forEach((el) => el.classList.add("in"));

  /* ---------- copy email buttons ---------- */
  document.querySelectorAll("[data-copy-email]").forEach((b) => b.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(SITE.email); toast("✓ email copied to clipboard"); } catch { toast(SITE.email); }
  }));

  /* ---------- contact form (compose_message.sh) ---------- */
  const form = document.getElementById("compose-form");
  if (form) form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.elements.name.value.trim(), from = form.elements.email.value.trim(), msg = form.elements.message.value.trim();
    if (!name || !from || !msg) { toast("please fill in all three fields"); return; }
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${msg}\n\n— ${name}\n${from}`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    toast("✓ opening your email app…");
  });

  /* =====================================================================
     INTERACTIVE TERMINAL (home page)
     ===================================================================== */
  const termBody = document.getElementById("term-body");
  const termIn = document.getElementById("term-in");
  if (termBody && termIn) {
    const FS = {
      "about.txt": [
        "B.Tech in Computer Science & Engineering — Malla Reddy College",
        "of Engineering, Hyderabad (2022–2026) · CGPA 7.5",
        " ",
        "Focused on AI/ML, Generative AI and data analytics.",
        "AICTE–Edunet (IBM SkillsBuild) AI & Cloud Technology intern:",
        "built an AI-powered Student Travel Planner web page with",
        "Python, Streamlit and Google Gemini.",
        " ",
        "Long-term goal: AI & analytics in financial services.",
      ],
      "profile.json": [
        "{",
        '  "name": "Jashwanthi Bhukya",',
        '  "degree": "B.Tech CSE (2026)",',
        '  "focus": ["AI/ML", "Generative AI", "Data Analytics"],',
        '  "location": "Hyderabad, India",',
        '  "status": "open to entry-level roles"',
        "}",
      ],
    };
    const DIRS = {
      "projects/": [
        "lecturelens/         RAG · LangChain · ChromaDB · Gemini",
        "movie-recommender/   ML · Pandas · Scikit-learn · Streamlit",
        "smart-healthcare/    AI chatbot · OpenAI API · health web app",
        "travel-planner/      GenAI · Python · Streamlit · Gemini   (internship)",
      ],
      "skills/": [
        "AI/ML      RAG · LangChain · ChromaDB · Gemini · Scikit-learn · NLP",
        "Data       Pandas · Microsoft Excel · Data Cleaning",
        "Languages  Python · JavaScript · HTML · CSS",
        "Tools      Streamlit · Streamlit Cloud · Google Cloud (AI Fundamentals) · Git · pytest",
      ],
      "certs/": [
        "IBM SkillsBuild       Artificial Intelligence Fundamentals  (Sep 2025)",
        "IBM SkillsBuild       Edunet – Artificial Intelligence      (Sep 2025)",
        "Infosys Springboard   Explore Machine Learning using Python (Aug 2025)",
        "Infosys Springboard   Python for Data Science               (Aug 2025)",
        "Udemy                 Python for Beginners                  (Oct 2023)",
      ],
    };
    const SITES = { github: SITE.github, linkedin: SITE.linkedin, x: SITE.x, twitter: SITE.x, demo: SITE.travelDemo, resume: SITE.resume, email: "mailto:" + SITE.email };
    const COMMANDS = ["help", "whoami", "cat about.txt", "cat profile.json", "ls", "ls projects/", "ls skills/", "ls certs/",
      "contact", "open demo", "open github", "open linkedin", "open x", "open resume", "date", "pwd", "history", "echo", "clear"];
    const history = [];
    let hIndex = 0;

    const print = (text, cls = "out") => {
      const div = document.createElement("div");
      div.className = cls;
      div.textContent = Array.isArray(text) ? text.join("\n") : text;
      termBody.insertBefore(div, termIn.parentElement);
    };
    const printCmd = (raw) => {
      const div = document.createElement("div");
      div.className = "cmd";
      const b = document.createElement("b"); b.textContent = "$ ";
      div.append(b, document.createTextNode(raw));
      termBody.insertBefore(div, termIn.parentElement);
    };

    const run = (raw) => {
      const [cmd, ...rest] = raw.trim().split(/\s+/);
      const arg = rest.join(" ");
      switch (cmd.toLowerCase()) {
        case "help": return print([
          "┌─ Commands ────────────────────────────────────┐",
          "│  whoami           who is jashwanthi?          │",
          "│  cat about.txt    full bio                    │",
          "│  cat profile.json full profile                │",
          "│  ls               list directory              │",
          "│  ls projects/     all projects                │",
          "│  ls skills/       tech stack                  │",
          "│  ls certs/        certifications              │",
          "│  contact          contact info                │",
          "│  open <site>      demo · github · linkedin · x│",
          "│  date             current date/time           │",
          "│  pwd              current path                │",
          "│  history          command history             │",
          "│  echo <text>      repeat text                 │",
          "│  clear            clear terminal              │",
          "└───────────────────────────────────────────────┘",
          " ", "tip: ↑↓ for history · tab to autocomplete",
        ]);
        case "whoami": return print("jashwanthi-bhukya");
        case "cat": return FS[arg] ? print(FS[arg]) : print(`cat: ${arg || "missing operand"}: no such file`, "err");
        case "ls":
          if (!arg) return print(["drwxr-xr-x  projects/", "drwxr-xr-x  skills/", "drwxr-xr-x  certs/", "-rw-r--r--  about.txt", "-rw-r--r--  profile.json", "-rw-r--r--  resume.pdf"]);
          { const key = arg.endsWith("/") ? arg : arg + "/"; return DIRS[key] ? print(DIRS[key]) : print(`ls: cannot access '${arg}': no such directory`, "err"); }
        case "contact": return print([
          `email      ${SITE.email}`, `linkedin   ${SITE.linkedinPath}`, `github     ${SITE.githubUser}`, `x/twitter  ${SITE.xHandle}`,
          " ", "or: open linkedin · open github",
        ]);
        case "open": {
          const url = SITES[arg.toLowerCase()];
          if (!url) return print(`open: unknown site '${arg}' — try github · linkedin · x · resume`, "err");
          print(`opening ${arg}…`);
          setTimeout(() => { const a = document.createElement("a"); a.href = url; if (!url.startsWith("mailto")) { a.target = "_blank"; a.rel = "noopener"; } document.body.appendChild(a); a.click(); a.remove(); }, 300);
          return;
        }
        case "date": return print(new Date().toLocaleString());
        case "pwd": return print("/home/portfolio/jashwanthi-bhukya");
        case "history": return print(history.map((h, i) => `${String(i + 1).padStart(3)}  ${h}`));
        case "echo": return print(arg);
        case "clear": termBody.querySelectorAll(".out, .cmd, .err, .ok").forEach((n) => n.remove()); return;
        case "sudo": return print("Permission denied. nice try.", "err");
        case "resume": location.href = "resume.html"; return;
        default: return print(`command not found: ${cmd}\ntype "help" for available commands`, "err");
      }
    };

    // boot sequence
    printCmd("whoami"); print("jashwanthi-bhukya"); print(" ");
    printCmd("cat profile.json"); print(FS["profile.json"]); print(" ");
    print('✦ interactive · type "help" to explore', "ok");

    termIn.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp") { if (history.length) { hIndex = Math.max(0, hIndex - 1); termIn.value = history[hIndex]; } e.preventDefault(); return; }
      if (e.key === "ArrowDown") { if (history.length) { hIndex = Math.min(history.length, hIndex + 1); termIn.value = history[hIndex] || ""; } e.preventDefault(); return; }
      if (e.key === "Tab") {
        e.preventDefault();
        const v = termIn.value.toLowerCase();
        if (!v) return;
        const matches = COMMANDS.filter((c) => c.startsWith(v));
        if (matches.length === 1) termIn.value = matches[0];
        else if (matches.length > 1) { printCmd(termIn.value); print(matches.join("   ")); termBody.scrollTop = termBody.scrollHeight; }
        return;
      }
      if (e.key !== "Enter") return;
      const raw = termIn.value.trim();
      termIn.value = "";
      if (!raw) return;
      history.push(raw); hIndex = history.length;
      printCmd(raw); run(raw);
      termBody.scrollTop = termBody.scrollHeight;
    });
    termBody.addEventListener("click", () => termIn.focus({ preventScroll: true }));
  }

  /* =====================================================================
     PORTFOLIO AGENT (>_ button) — answers from Jashwanthi's real profile.
     Runs fully in the browser, so no API key is ever exposed.
     ===================================================================== */
  const fab = document.getElementById("fab");
  const agent = document.getElementById("agent");
  const log = document.getElementById("agent-log");
  const agentForm = document.getElementById("agent-form");
  const agentIn = document.getElementById("agent-in");

  const KB = [
    { k: ["who is", "who are", "about jashwanthi", "introduce", "yourself", "summary", "background"], a: "Jashwanthi Bhukya is a 2026 B.Tech Computer Science graduate from Malla Reddy College of Engineering, Hyderabad, focused on AI/ML, Generative AI and data analytics. Highlights: an AICTE–Edunet (IBM SkillsBuild) AI & Cloud internship, Deloitte's Data Analytics Job Simulation, and 4 AI projects." },
    { k: ["internship", "intern", "aicte", "edunet", "ibm", "travel", "planner", "gemini"], a: "During the 4-week AICTE–Edunet (IBM SkillsBuild) AI & Cloud Technology internship (Sept–Oct 2025), Jashwanthi selected a real-world problem and built an AI-powered Student Travel Planner web page with Python, Streamlit and Google Gemini. It returns a structured day-by-day itinerary with food, transport and an estimated budget breakdown, and it is deployed live on Streamlit Community Cloud. The code was reviewed by senior mentors and earned the official internship certificate.\n\nLive demo: " + SITE.travelDemo + "\nCode: " + SITE.travelRepo },
    { k: ["deloitte", "forage", "simulation", "forensic"], a: "In Deloitte's Data Analytics Job Simulation (Forage, Aug 2025), Jashwanthi completed data analysis and forensic technology tasks based on real client scenarios: cleaning and analyzing business data in Excel, flagging unusual records, and writing risk and compliance recommendations." },
    { k: ["skill", "stack", "tech", "language", "tools", "python", "know"], a: "Core skills:\n• AI/ML & GenAI: RAG, LangChain, ChromaDB, Google Gemini, Prompt Engineering, Scikit-learn, NLP\n• Data: Pandas, Microsoft Excel, Data Cleaning\n• Languages: Python, JavaScript, HTML, CSS\n• Apps & Tools: Streamlit, Streamlit Community Cloud, Google Cloud (AI Fundamentals), Git, GitHub Actions, pytest" },
    { k: ["project", "built", "build", "portfolio", "work"], a: "Projects:\n• LectureLens — RAG over YouTube lectures with LangChain, ChromaDB and Gemini\n• Movie Recommendation System — Pandas, Scikit-learn, cosine similarity on TMDB 5000\n• Smart Healthcare — health web app with an OpenAI-powered assistant\n• AI-Powered Student Travel Planner (internship) — Python, Streamlit, Google Gemini\n\nDetails on the Projects page." },
    { k: ["lecturelens", "lecture", "rag", "youtube", "langchain", "chroma", "retrieval", "vector"], a: "LectureLens answers questions about YouTube lectures and shows a clickable timestamp for where each answer comes from. It is a RAG app: lecture transcripts are stored in a ChromaDB vector database, the most relevant parts are found with keyword and meaning-based search, and Google Gemini answers using only those parts. Questions the lectures don't cover are politely refused.\n\nCode: https://github.com/bhukyajashwanthi/lecturelens" },
    { k: ["movie", "recommend", "cosine", "tmdb"], a: "The Movie Recommendation System suggests the 5 most similar movies from the TMDB 5000 dataset (4,803 movies). It combines genres, keywords, plot and production companies into text features, vectorizes them with CountVectorizer and ranks movies by cosine similarity, in a Streamlit app.\n\nCode: https://github.com/bhukyajashwanthi/Movie-Recommendation-System" },
    { k: ["health", "hospital", "chatbot", "medical", "mern", "node"], a: "Smart Healthcare is a health web app with an OpenAI-powered health assistant, secure login, vitals logging, medical report upload and a map of nearby hospitals.\n\nCode: https://github.com/bhukyajashwanthi/smarthealthcare" },
    { k: ["education", "college", "degree", "cgpa", "gpa", "marks", "university", "graduat"], a: "Education:\n• B.Tech, Computer Science & Engineering — Malla Reddy College of Engineering, Hyderabad (Nov 2022 – May 2026) · CGPA 7.5/10\n• Intermediate (Class XII) — Sri Chaitanya Junior Kalashala · 79.6%\n• SSC (Class X) — R.R. High School · 95%" },
    { k: ["cert", "certificate", "course", "udemy", "infosys", "credly"], a: "Certifications:\n• IBM SkillsBuild — Artificial Intelligence Fundamentals (Credly verified)\n• IBM SkillsBuild — Edunet Artificial Intelligence\n• Infosys Springboard — Explore Machine Learning using Python\n• Infosys Springboard — Python for Data Science\n• Udemy — Python for Beginners\n\nAll are viewable on the Certifications page." },
    { k: ["contact", "email", "reach", "hire", "connect", "mail"], a: `Email: ${SITE.email}\nLinkedIn: ${SITE.linkedin}\nGitHub: ${SITE.github}\nX: ${SITE.x}\n\nOr use the message form on the Contact page.` },
    { k: ["location", "where", "based", "relocat", "bengaluru", "bangalore", "hyderabad", "remote", "city"], a: "Jashwanthi is based in Hyderabad and open to roles in Hyderabad, Bengaluru and across India, including remote positions." },
    { k: ["open to work", "available", "job", "role", "looking", "opportunit", "position", "fresher"], a: "Yes, Jashwanthi is open to entry-level roles in AI/ML, Generative AI and Data Analytics, with a long-term goal of growing into advanced technology and analytics roles in financial services." },
    { k: ["goal", "future", "finance", "financial", "goldman", "aspiration", "career"], a: "The long-term goal is to build strong foundations in AI, machine learning and data analysis, then grow into advanced technology and analytics roles in the financial services industry." },
    { k: ["resume", "cv"], a: "The resume is on the Resume page, with a PDF download: resume.html" },
    { k: ["github", "repo", "code"], a: `GitHub: ${SITE.github}\nProjects there: LectureLens, Movie Recommendation System, Smart Healthcare and the AI Travel Planner.` },
  ];
  const SUGGEST = ["What did Jashwanthi build in the internship?", "What are the technical skills?", "Is Jashwanthi open to roles in Bengaluru?", "How can I contact Jashwanthi?"];

  const answer = (q) => {
    const s = q.toLowerCase();
    if (/^(hi|hey|hello|namaste)\b/.test(s)) return "Hi! 👋 Ask me about Jashwanthi's internship, projects, skills, education, certifications or how to get in touch.";
    let best = null, score = 0;
    for (const item of KB) {
      const sc = item.k.reduce((n, k) => n + (s.includes(k) ? k.length : 0), 0);
      if (sc > score) { score = sc; best = item; }
    }
    return best ? best.a : "I can only answer questions about Jashwanthi's profile: internship, projects, skills, education, certifications, location and contact. Try one of those, or email " + SITE.email + ".";
  };
  const addMsg = (text, who) => {
    const div = document.createElement("div");
    div.className = "msg " + who;
    div.textContent = text;
    log.appendChild(div);
    log.scrollTop = log.scrollHeight;
  };
  const ask = (q) => {
    addMsg(q, "user");
    const sug = log.querySelector(".agent-suggest"); if (sug) sug.remove();
    setTimeout(() => addMsg(answer(q), "bot"), 280);
  };
  const intro = document.createElement("div");
  intro.className = "agent-intro";
  intro.textContent = "portfolio_agent v1.0\n────────────────────────────────────\nAsk me about Jashwanthi's internship,\nprojects, skills, or how to get in touch.";
  const sug = document.createElement("div");
  sug.className = "agent-suggest";
  SUGGEST.forEach((q) => { const b = document.createElement("button"); b.type = "button"; b.textContent = "› " + q; b.addEventListener("click", () => ask(q)); sug.appendChild(b); });
  log.append(intro, sug);

  fab.addEventListener("click", () => {
    const open = agent.classList.toggle("open");
    fab.textContent = open ? "✕" : ">_";
    fab.setAttribute("aria-expanded", String(open));
    if (open) setTimeout(() => agentIn.focus(), 50);
  });
  agentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = agentIn.value.trim();
    if (!q) return;
    agentIn.value = "";
    ask(q);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && agent.classList.contains("open")) fab.click();
  });
})();
