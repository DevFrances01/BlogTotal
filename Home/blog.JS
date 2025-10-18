function toggleDarkMode() {
  document.body.classList.toggle("modo-escuro");

  const btn = document.getElementById("modoBtn");

  if (document.body.classList.contains("modo-escuro")) {
    btn.innerHTML = '<i class="bi bi-moon-fill"></i>'  // exemplo com ícone da lua
  } else {
    btn.innerHTML = '<i class="bi bi-sun-fill"></i> '; // exemplo com ícone do sol
  }
};

const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 300 ? "flex" : "none";
});
function toggleDarkMode() {
  document.body.classList.toggle("modo-escuro");
  const icon = document.querySelector("#modoBtn i");
  icon.className = document.body.classList.contains("modo-escuro")
    ? "bi bi-sun-fill"
    : "bi bi-moon-fill";
}







