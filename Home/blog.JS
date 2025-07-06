function toggleDarkMode() {
  document.body.classList.toggle("modo-escuro");

  const btn = document.getElementById("modoBtn");

  if (document.body.classList.contains("modo-escuro")) {
    btn.innerHTML = '<i class="bi bi-moon-fill"></i>'  // exemplo com ícone da lua
  } else {
    btn.innerHTML = '<i class="bi bi-sun-fill"></i> '; // exemplo com ícone do sol
  }
}document.getElementById('closePopup').addEventListener('click', function () {
  document.getElementById('infoPopup').style.display = 'none';
});

