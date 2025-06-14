
// Preloader
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";

  // Reveal animations
  document.querySelectorAll(".animate").forEach(el => {
    el.classList.add("show");
  });
}); 

// Modal logic
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalLive = document.getElementById("modalLive");
const modalGitHub = document.getElementById("modalGitHub");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.getAttribute("data-title");
    modalDescription.textContent = card.getAttribute("data-description");
    modalLive.href = card.getAttribute("data-link");
    modalGitHub.href = card.getAttribute("data-github");
    modal.style.display = "block";
  });
});

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}; 