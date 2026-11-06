/* ==========================================================================
   SHIVKRUPA ELECTRICALS — v4 main.js
   ========================================================================== */

"use strict";

const CONTACT = {
  whatsapp: "919422328247",
  email: "shivkrupa.electricals@gmail.com"
};

const PRODUCTS = [
  {
    id: "mcc",
    tag: "Motor Control",
    title: "MCC (Motor Control Center) Panels",
    img: "assets/img/mcc-panel.jpg",
    desc: "Our Motor Control Center (MCC) panels are precision-engineered to manage and protect heavy-duty electric motors across industrial plants, utility works, and processing facilities.",
    specs: [
      "Starting topologies: Direct-On-Line (DOL), Star-Delta, Soft Starter, and VFD integration",
      "Modular / Fixed compartmentalized construction with independent feeder separation",
      "Degree of protection: IP 54 / IP 55 / IP 65 for industrial durability",
      "Protection features: overload, short circuit, earth leakage, phase failure, and under-voltage",
      "Integrated analog / digital metering with energy monitoring and breaker interlocking"
    ]
  },
  {
    id: "pcc",
    tag: "Power Distribution",
    title: "PCC (Power Control Center) Panels",
    img: "assets/img/feeder-panel.jpg",
    desc: "PCC panels serve as the master hub of electrical distribution in manufacturing facilities and commercial complexes, distributing bulk power safely to various sub-distribution boards.",
    specs: [
      "Rated operational capacity up to 4000A with high fault withstand capacity",
      "High-grade electrolytic copper busbars with heat shrinkable insulation",
      "Air Circuit Breakers (ACB) and Moulded Case Circuit Breakers (MCCB) integration",
      "Draw-out / Non-draw-out designs compliant with IEC standards",
      "Form 3 / Form 4 internal separation for enhanced personnel safety"
    ]
  },
  {
    id: "apfc",
    tag: "Power Factor Control",
    title: "APFC (Automatic Power Factor Control) Panels",
    img: "assets/img/apfc-panel.jpg",
    desc: "Designed to minimize reactive power losses, maintain target power factor automatically, and protect the electrical network from power penalties.",
    specs: [
      "Intelligent multi-stage power factor correction controllers",
      "Heavy-duty MPP/APP capacitor banks with fast discharge resistors",
      "Special capacitor-duty contactors or thyristor switches for rapid load changes",
      "Detuned harmonic filters (reactors) for networks with high harmonic distortion",
      "Automatic and manual dual operating modes with safety trip protection"
    ]
  },
  {
    id: "plc",
    tag: "Industrial Automation",
    title: "PLC & Automation Panels",
    img: "assets/img/control-desk.jpg",
    desc: "Shivkrupa Electricals designs and builds custom automation panels that automate and monitor machinery and processes with precision control and safety interlocking.",
    specs: [
      "Branded PLCs (Siemens, Schneider Electric, Lauritz Knudsen, etc.)",
      "Integrated touchscreen Human-Machine Interfaces (HMI) for real-time visualization",
      "Communication protocol support: Modbus, Profinet, Ethernet/IP, RS-485",
      "Regulated power supplies, signal isolators, relays, and optical isolation",
      "Clean wiring and ferruling layout following strict engineering practices"
    ]
  },
  {
    id: "vfd",
    tag: "Variable Frequency Drives",
    title: "VFD (Variable Frequency Drive) Panels",
    img: "assets/img/vfd-drives.jpg",
    desc: "Custom-manufactured VFD panels offering precise variable speed control for motors, pumps, fans, and conveyor systems with built-in thermal ventilation.",
    specs: [
      "Wide power ratings customized to application requirements",
      "Forced ventilation with dual exhaust cooling fans and thermal sensors",
      "Input / Output line reactors and dv/dt filters to safeguard motor insulation",
      "Bypass starter circuitry ensuring continuous operation during maintenance",
      "Remote speed reference control and SCADA integration"
    ]
  },
  {
    id: "amf",
    tag: "Backup & Synchronization",
    title: "AMF & Synchronization Panels",
    img: "assets/img/floor-panels.jpg",
    desc: "AMF panels monitor mains grid power and automatically command diesel generator sets to start, switch load, and shut down smoothly without manual intervention.",
    specs: [
      "Microprocessor-based automatic mains failure logic controllers",
      "Electrical and mechanical interlocked motorized changeover breakers",
      "Automatic DG synchronization and load sharing across multiple generator sets",
      "Instant generator protection against over-speed, high water temp, and low oil pressure",
      "Full digital metering and event recording logs"
    ]
  },
  {
    id: "busbar",
    tag: "Busbar Systems",
    title: "Busbar Trunking Systems",
    img: "assets/img/busbar-panel.jpg",
    desc: "Providing flexible, space-saving power distribution routes in modern infrastructure, high-rise buildings, and heavy manufacturing floors.",
    specs: [
      "Pure electrolytic copper and high-conductivity aluminium conductors",
      "Enclosed sandwich structure offering superior short-circuit strength",
      "Plug-in tap-off boxes with protective switchgear for quick tap points",
      "Low impedance design reducing voltage drop and transmission losses",
      "Fire barrier accessories complying with commercial building safety codes"
    ]
  },
  {
    id: "mdb",
    tag: "Power Distribution",
    title: "Metering & Distribution Boards (MDB)",
    img: "assets/img/dispatch-panel.jpg",
    desc: "Precision-fabricated distribution boards engineered to provide orderly branch circuit protection and accurate metering across commercial and industrial premises.",
    specs: [
      "Multi-compartment designs with dedicated cable alleys and neutral/earth busbars",
      "Integrated multi-function digital energy meters (Class 1.0 / 0.5 accuracy)",
      "High-grade electro-galvanized sheet steel with powder-coated anti-corrosive finish",
      "Degree of protection from IP 42 to IP 65 as specified",
      "Clear labeling, hazard schematics, and complete circuit documentation"
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initHeaderShadow();
  initProductFilter();
  initModal();
  initLightbox();
  initQuoteForm();
  initReveal();
});

function lockScroll(lock) {
  document.body.style.overflow = lock ? "hidden" : "";
}

/* Navigation ------------------------------------------------------------- */
function initNav() {
  const btn = document.getElementById("hamburger");
  const nav = document.getElementById("siteNav");
  if (!btn || !nav) return;

  const close = () => {
    nav.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  };

  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });

  document.addEventListener("click", (e) => {
    if (nav.classList.contains("open") && !nav.contains(e.target) && !btn.contains(e.target)) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

function initHeaderShadow() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const update = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  update();
  window.addEventListener("scroll", update, { passive: true });
}

/* Product filter --------------------------------------------------------- */
function initProductFilter() {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".product-card[data-category]");
  if (!buttons.length || !cards.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");

      const filter = btn.dataset.filter;
      cards.forEach((card) => {
        card.hidden = !(filter === "all" || card.dataset.category === filter);
      });
    });
  });
}

/* Specification modal ---------------------------------------------------- */
function initModal() {
  const modal = document.getElementById("specModal");
  if (!modal) return;

  const el = {
    img: modal.querySelector("#modalImg"),
    tag: modal.querySelector("#modalTag"),
    title: modal.querySelector("#modalTitle"),
    desc: modal.querySelector("#modalDesc"),
    specs: modal.querySelector("#modalSpecs"),
    cta: modal.querySelector("#modalCta")
  };
  let lastFocus = null;

  const open = (id) => {
    const p = PRODUCTS.find((x) => x.id === id);
    if (!p) return;
    lastFocus = document.activeElement;
    el.img.src = p.img;
    el.img.alt = p.title;
    el.tag.textContent = p.tag;
    el.title.textContent = p.title;
    el.desc.textContent = p.desc;
    el.specs.innerHTML = "";
    p.specs.forEach((s, i) => {
      const li = document.createElement("li");
      const n = document.createElement("span");
      n.textContent = String(i + 1).padStart(2, "0");
      li.append(n, document.createTextNode(s));
      el.specs.appendChild(li);
    });
    el.cta.href = `contact.html?product=${encodeURIComponent(p.title)}`;
    modal.classList.add("open");
    lockScroll(true);
    modal.querySelector(".modal-close").focus();
  };

  const close = () => {
    modal.classList.remove("open");
    lockScroll(false);
    if (lastFocus) lastFocus.focus();
  };

  document.querySelectorAll("[data-open-modal]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      open(btn.dataset.openModal);
    });
  });

  modal.querySelectorAll("[data-close-modal]").forEach((b) => b.addEventListener("click", close));
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) close();
  });
}

/* Lightbox --------------------------------------------------------------- */
function initLightbox() {
  const items = Array.from(document.querySelectorAll("[data-lightbox]"));
  if (!items.length) return;

  const box = document.createElement("div");
  box.className = "lightbox";
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.setAttribute("aria-label", "Photo viewer");
  box.innerHTML = `
    <button class="lightbox-btn lightbox-close" type="button" aria-label="Close">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6L6 18"/></svg>
    </button>
    <button class="lightbox-btn lightbox-prev" type="button" aria-label="Previous photo">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 5l-7 7 7 7"/></svg>
    </button>
    <button class="lightbox-btn lightbox-next" type="button" aria-label="Next photo">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 5l7 7-7 7"/></svg>
    </button>
    <figure><img alt=""><figcaption></figcaption></figure>`;
  document.body.appendChild(box);

  const img = box.querySelector("img");
  const cap = box.querySelector("figcaption");
  let index = 0;
  let lastFocus = null;

  const show = (i) => {
    index = (i + items.length) % items.length;
    const item = items[index];
    const thumb = item.querySelector("img");
    img.src = item.dataset.src || (thumb && thumb.src) || "";
    img.alt = thumb ? thumb.alt : "";
    cap.textContent = item.dataset.caption || "";
  };

  const open = (i) => {
    lastFocus = document.activeElement;
    show(i);
    box.classList.add("open");
    lockScroll(true);
    box.querySelector(".lightbox-close").focus();
  };

  const close = () => {
    box.classList.remove("open");
    lockScroll(false);
    if (lastFocus) lastFocus.focus();
  };

  items.forEach((item, i) => item.addEventListener("click", () => open(i)));
  box.querySelector(".lightbox-close").addEventListener("click", close);
  box.querySelector(".lightbox-prev").addEventListener("click", () => show(index - 1));
  box.querySelector(".lightbox-next").addEventListener("click", () => show(index + 1));
  box.addEventListener("click", (e) => { if (e.target === box) close(); });

  document.addEventListener("keydown", (e) => {
    if (!box.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(index - 1);
    if (e.key === "ArrowRight") show(index + 1);
  });
}

/* Quote form ------------------------------------------------------------- */
function initQuoteForm() {
  const form = document.getElementById("quoteForm");
  if (!form) return;

  const select = form.querySelector("#productSelect");
  const preset = new URLSearchParams(window.location.search).get("product");
  if (preset && select) {
    const want = preset.toLowerCase();
    for (const opt of select.options) {
      const keys = (opt.dataset.match || "").split("|").filter(Boolean);
      if (keys.some((k) => want.includes(k))) {
        opt.selected = true;
        break;
      }
    }
  }

  const feedback = document.getElementById("formFeedback");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const required = Array.from(form.querySelectorAll("[required]"));
    let firstInvalid = null;
    required.forEach((f) => {
      const bad = !f.value.trim();
      f.classList.toggle("invalid", bad);
      if (bad && !firstInvalid) firstInvalid = f;
    });

    if (firstInvalid) {
      feedback.textContent = "Please fill in your name, mobile number and requirement category.";
      feedback.classList.add("show");
      firstInvalid.focus();
      return;
    }

    const data = new FormData(form);
    const lines = [
      "Enquiry from shivkrupa electricals website",
      "",
      `Name: ${data.get("name")}`,
      data.get("company") ? `Company: ${data.get("company")}` : null,
      `Mobile: ${data.get("phone")}`,
      data.get("email") ? `Email: ${data.get("email")}` : null,
      `Requirement: ${data.get("product")}`,
      data.get("message") ? `Details: ${data.get("message")}` : null
    ].filter((l) => l !== null);
    const text = lines.join("\n");

    const channel = e.submitter && e.submitter.dataset.channel === "email" ? "email" : "whatsapp";

    if (channel === "email") {
      const subject = `Quotation request: ${data.get("product")}`;
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
      feedback.textContent = "Your email app should open with the enquiry filled in. Press send there to reach our team.";
    } else {
      window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
      feedback.textContent = "WhatsApp opened in a new tab with your enquiry filled in. Press send there to reach our team.";
    }
    feedback.classList.add("show");
  });

  form.querySelectorAll("[required]").forEach((f) => {
    f.addEventListener("input", () => f.classList.remove("invalid"));
    f.addEventListener("change", () => f.classList.remove("invalid"));
  });
}

/* Reveal on scroll ------------------------------------------------------- */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("in"));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

  els.forEach((el) => io.observe(el));
}
