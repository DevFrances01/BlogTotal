const starField = document.querySelector('.stars');

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');

    // Definir a posição aleatória
    const size = Math.random() * 5 + 2; // Tamanho aleatório entre 2 e 7px
    const posX = Math.random() * 100; // 0 a 100%
    const posY = Math.random() * 100; // 0 a 100%

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${posX}%`;
    star.style.top = `${posY}%`;

    // Definir animação de movimento
    star.style.animationDuration = `${Math.random() * 2 + 1}s`; // Duração aleatória
    star.style.animationDelay = `${Math.random() * 2}s`; // Atraso aleatório

    starField.appendChild(star);
}

// Criar várias estrelas
for (let i = 0; i < 100; i++) {
    createStar();
}

function toggleProject(imageId, linkId) {
    const img = document.getElementById(imageId);
    const link = document.getElementById(linkId);

    // Alterna a exibição da imagem e do link
    const isVisible = img.style.display === 'block';
    img.style.display = isVisible ? 'none' : 'block';
    link.style.display = isVisible ? 'none' : 'block';
}
