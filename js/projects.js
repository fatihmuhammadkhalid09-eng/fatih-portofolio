const projectModal = document.getElementById("projectModal");

const modalClose = document.getElementById("modalClose");

const modalCategory = document.getElementById("modalCategory");

const modalTitle = document.getElementById("modalTitle");

const modalDescription = document.getElementById("modalDescription");

const modalTech = document.getElementById("modalTech");

const modalRole = document.getElementById("modalRole");

const projects = {
  project1: {
    category: "EMBEDDED SYSTEM",

    title: "Sistem Penyaringan Air Hujan",

    description:
      "Project sistem penyaringan air hujan berbasis mikrokontroler yang dirancang untuk membantu proses pengolahan dan pengendalian sistem.",

    tech: "Arduino, sensor, relay, pompa, mikrokontroler",

    role: "Merancang sistem, melakukan pemrograman mikrokontroler, mengintegrasikan sensor dan actuator, serta melakukan pengujian sistem.",
  },

  project2: {
    category: "IOT / EMBEDDED",

    title: "ESP32-CAM Monitoring",

    description:
      "Sistem deteksi objek yang menggunakan sensor infrared untuk memicu ESP32-CAM mengambil gambar dan mengirimkannya melalui Telegram.",

    tech: "Arduino, ESP32-CAM, infrared sensor, Telegram Bot",

    role: "Membuat komunikasi antara sensor, mikrokontroler dan ESP32-CAM serta mengembangkan sistem pengiriman gambar.",
  },

  project3: {
    category: "ROBOTICS",

    title: "Mobile Robot",

    description:
      "Robot mobile berbasis Arduino yang menggunakan motor DC, motor driver, sensor ultrasonic dan encoder untuk mendukung pergerakan robot.",

    tech: "Arduino, L298N, motor DC, ultrasonic sensor, encoder",

    role: "Mengembangkan program pengendalian motor, membaca sensor dan mengintegrasikan berbagai komponen hardware.",
  },
};

const detailButtons = document.querySelectorAll(".project-detail-btn");

detailButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const projectId = button.getAttribute("data-project");

    const project = projects[projectId];

    if (!project) {
      return;
    }

    modalCategory.textContent = project.category;

    modalTitle.textContent = project.title;

    modalDescription.textContent = project.description;

    modalTech.textContent = project.tech;

    modalRole.textContent = project.role;

    projectModal.classList.add("active");

    document.body.style.overflow = "hidden";
  });
});

function closeModal() {
  projectModal.classList.remove("active");

  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);

projectModal.addEventListener("click", function (event) {
  if (event.target === projectModal) {
    closeModal();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});
