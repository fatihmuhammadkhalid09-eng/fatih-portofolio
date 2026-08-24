console.log("Fatih Portfolio berhasil dijalankan.");

/* =================================
   ACTIVE NAVIGATION
================================= */

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function () {
  let current = "";

  sections.forEach(function (section) {
    const sectionTop = section.offsetTop;

    if (window.scrollY >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  links.forEach(function (link) {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

/* =================================
   CONTACT FORM
================================= */

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const subject = document.getElementById("subject").value.trim();

    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
      formMessage.textContent = "Mohon isi semua field.";

      return;
    }

    formMessage.textContent = "Pesan siap dikirim.";
  });
}

/* =================================
   THEME TOGGLE
================================= */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.body.classList.add("light-mode");

    themeToggle.textContent = "🌙";
  }

  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    const isLight = document.body.classList.contains("light-mode");

    if (isLight) {
      themeToggle.textContent = "🌙";

      localStorage.setItem("theme", "light");
    } else {
      themeToggle.textContent = "☀";

      localStorage.setItem("theme", "dark");
    }
  });
}

/* =================================
   MOBILE MENU
================================= */

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
    });
  });
}

/* =================================
   SCROLL ANIMATION
================================= */

const revealElements = document.querySelectorAll(
  ".section-heading, " +
    ".about-text, " +
    ".about-info, " +
    ".skill-card, " +
    ".project-card, " +
    ".timeline-item, " +
    ".education-card, " +
    ".certificate-card, " +
    ".contact-card, " +
    ".contact-form-wrapper",
);

const revealObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");

        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  },
);

revealElements.forEach(function (element) {
  element.classList.add("reveal");

  revealObserver.observe(element);
});

/* =================================
   BACK TO TOP
================================= */

const backToTop = document.getElementById("backToTop");

if (backToTop) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
