const espaco = document.querySelector('.espaco');

function criarEstrela() {
  const estrela = document.createElement('div');
  estrela.classList.add('estrela');
  const size = Math.random() * 1.8 + 0.5;
  estrela.style.width = `${size}px`;
  estrela.style.height = `${size}px`;
  estrela.style.left = `${Math.random() * 100}%`;
  estrela.style.top = `${Math.random() * 100}%`;
  estrela.style.opacity = Math.random() * 0.6 + 0.3;
  espaco.appendChild(estrela);
}

function criarCometa() {
  const cometa = document.createElement('div');
  cometa.classList.add('cometa');

  const size = Math.random() * 8 + 4;
  cometa.style.width = `${size * 0.8}px`;
  cometa.style.height = `${size}px`;

  const direcao = Math.floor(Math.random() * 4);
  const startX = Math.random() * 100;
  const startY = Math.random() * 100;

  let fromX, fromY, toX, toY;

  if (direcao === 0) {
    fromX = startX;
    fromY = -10;
    toX = fromX + (Math.random() * 40 - 20);
    toY = 110;
  } else if (direcao === 1) {
    fromX = startX;
    fromY = 110;
    toX = fromX + (Math.random() * 40 - 20);
    toY = -10;
  } else if (direcao === 2) {
    fromX = -10;
    fromY = startY;
    toX = 110;
    toY = fromY + (Math.random() * 40 - 20);
  } else {
    fromX = 110;
    fromY = startY;
    toX = -10;
    toY = fromY + (Math.random() * 40 - 20);
  }

  const duration = Math.random() * 2 + 2;

  cometa.style.left = `${fromX}vw`;
  cometa.style.top = `${fromY}vh`;

  const animation = cometa.animate([
    {
      transform: `translate(0, 0)`,
      opacity: 1,
    },
    {
      transform: `translate(${toX - fromX}vw, ${toY - fromY}vh)`,
      opacity: 0,
    }
  ], {
    duration: duration * 1000,
    easing: 'ease-out',
    fill: 'forwards'
  });

  espaco.appendChild(cometa);

  setTimeout(() => {
    espaco.removeChild(cometa);
  }, duration * 1000);
}

// Cria estrelas fixas
for (let i = 0; i < 200; i++) {
  criarEstrela();
}

// Gera cometas constantemente
setInterval(criarCometa, 500);
