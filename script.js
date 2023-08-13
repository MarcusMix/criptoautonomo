const container = document.querySelector(".motivos-detalhados");

// Opções para o IntersectionObserver
const options = {
	root: null, // Elemento raiz (viewport)
	rootMargin: "0px", // Margem em relação ao elemento raiz
	threshold: 0.5, // Porcentagem de visibilidade para disparar o callback
};

// Callback que será executado quando o elemento entrar/sair da área visível
const callback = (entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			contador();
		}
	});
};

// Criando o IntersectionObserver
const observer = new IntersectionObserver(callback, options);

// Começar a observar o container
observer.observe(container);

let valoresDisplay = document.querySelectorAll(".num");
let intervalo = 3000;

function contador() {
	valoresDisplay.forEach((valoresDisplay) => {
		let valorInicial = 0;
		let valorFinal = parseInt(valoresDisplay.getAttribute("data-val"));
		let duracao = Math.floor(intervalo / valorFinal);
		let contador = setInterval(function () {
			valorInicial += 1;
			valoresDisplay.textContent = valorInicial;
			if (valorInicial == valorFinal) {
				clearInterval(contador);
			}
		}, duracao);
	});
}
