/* ===== MODO ESCURO ===== */
function toggleDarkMode() {
  document.body.classList.toggle("modo-escuro");

  const icon = document.querySelector("#modoBtn i");
  if (!icon) return;

  icon.className = document.body.classList.contains("modo-escuro")
    ? "bi bi-sun-fill"
    : "bi bi-moon-fill";
}

/* ===== BOTÃO VOLTAR AO TOPO ===== */
document.addEventListener("DOMContentLoaded", () => {
  const topBtn = document.getElementById("topBtn");
  if (!topBtn) return;

  window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "flex" : "none";
  });
});
