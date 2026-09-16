// Aqui controlamos o comportamento do site (o que acontece quando o usuário interage)

let cliques = 0;

const contadorEl = document.getElementById('contador');
const botaoClicar = document.getElementById('botaoClicar');
const botaoResetar = document.getElementById('botaoResetar');
const botaoCor = document.getElementById('botaoCor');

botaoClicar.addEventListener('click', () => {
  cliques++;
  contadorEl.textContent = cliques;
});

botaoResetar.addEventListener('click', () => {
  cliques = 0;
  contadorEl.textContent = cliques;
});

const cores = ['#f4f4f9', '#ffe0e0', '#e0ffe0', '#e0e0ff', '#fff7cc'];
let indiceCor = 0;

botaoCor.addEventListener('click', () => {
  indiceCor = (indiceCor + 1) % cores.length;
  document.body.style.backgroundColor = cores[indiceCor];
});
