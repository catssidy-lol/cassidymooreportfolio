const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
const emptyState = document.querySelector(".empty-state");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    let visibleCount = 0;

    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });

    projectCards.forEach((card) => {
      const visible = filter === "all" || card.dataset.category === filter;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    emptyState.hidden = visibleCount > 0;
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  siteNav.classList.toggle("is-open", !isOpen);
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    siteNav.classList.remove("is-open");
  });
});

const projectDialog = document.querySelector(".project-dialog");
const dialogTitle = document.querySelector("#dialog-title");
const dialogType = document.querySelector("#dialog-type");
const dialogDescription = document.querySelector("#dialog-description");

document.querySelectorAll(".project-open").forEach((project) => {
  project.addEventListener("click", () => {
    dialogTitle.textContent = project.dataset.title;
    dialogType.textContent = project.dataset.type;
    dialogDescription.textContent = project.dataset.description;
    projectDialog.showModal();
  });
});

document.querySelector(".dialog-close").addEventListener("click", () => {
  projectDialog.close();
});

projectDialog.addEventListener("click", (event) => {
  if (event.target === projectDialog) projectDialog.close();
});

const monogramTrigger = document.querySelector(".about-monogram-trigger");
const easterEggDialog = document.querySelector(".easter-egg-dialog");
let monogramClickCount = 0;

monogramTrigger.addEventListener("click", () => {
  monogramClickCount += 1;
  if (monogramClickCount === 3) {
    easterEggDialog.showModal();
    monogramClickCount = 0;
  }
});

easterEggDialog.querySelector(".dialog-close").addEventListener("click", () => {
  easterEggDialog.close();
});

easterEggDialog.addEventListener("click", (event) => {
  if (event.target === easterEggDialog) easterEggDialog.close();
});

const backgroundEasterEggTrigger = document.querySelector(".background-easter-egg");
const backgroundEasterEggDialog = document.querySelector(".background-easter-egg-dialog");

backgroundEasterEggTrigger.addEventListener("click", () => {
  backgroundEasterEggDialog.showModal();
});

backgroundEasterEggDialog.querySelector(".dialog-close").addEventListener("click", () => {
  backgroundEasterEggDialog.close();
});

backgroundEasterEggDialog.addEventListener("click", (event) => {
  if (event.target === backgroundEasterEggDialog) backgroundEasterEggDialog.close();
});

document.querySelector("#year").textContent = String(new Date().getFullYear());
