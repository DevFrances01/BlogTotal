const backgroundLinesContainer = document.createElement('div');
backgroundLinesContainer.className = 'background-lines';
document.body.appendChild(backgroundLinesContainer);

const numberOfLines = 20; // Número de linhas que você deseja
const lineWidth = 2; // Largura da linha

for (let i = 0; i < numberOfLines; i++) {
    const line = document.createElement('div');
    line.className = 'line';
    line.style.left = `${(i * (100 / numberOfLines))}%`;
    line.style.animationDuration = `${Math.random() * 3 + 2}s`; // Durações aleatórias entre 2 e 5 segundos
    backgroundLinesContainer.appendChild(line);
}
