
window.addEventListener('load', () => {
    const rocket = document.getElementById('rocket');
    
    // Foguete sobe até metade
    rocket.style.transition = 'bottom 4s linear';
    rocket.style.bottom = '50%';

    // Chama contínua
    const particleInterval = setInterval(() => {
        const p = document.createElement('div');
        p.classList.add('particle');
        p.style.left = `${Math.random() * 20 - 10}px`;
        rocket.appendChild(p);
        setTimeout(() => p.remove(), 1000);
    }, 100);

    rocket.addEventListener('transitionend', () => {
        clearInterval(particleInterval); // para a chama normal

        // Explosão
        const rect = rocket.getBoundingClientRect(); // posição exata na tela
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        for (let i = 0; i < 50; i++) {
            const e = document.createElement('div');
            e.classList.add('particle');
            e.style.position = 'absolute';
            e.style.left = `${centerX}px`;
            e.style.top = `${centerY}px`;
            e.style.background = 'orange';
            e.style.width = '15px';
            e.style.height = '30px';
            e.style.borderRadius = '50%';
            e.style.transition = 'transform 2s ease-out, opacity 1.5s ease-out';
            document.body.appendChild(e);

            // movimento aleatório em todas as direções
            const angle = Math.random() * 20* Math.PI;
            const distance = 50 + Math.random() * 100;

            setTimeout(() => {
                e.style.transform = `translate(${Math.cos(angle)*distance}px, ${Math.sin(angle)*distance}px)`;
                e.style.opacity = '0';
            }, 10);

            setTimeout(() => e.remove(), 2100);
        }

        // Foguete desaparece
        rocket.style.opacity = '0';
    });
});
