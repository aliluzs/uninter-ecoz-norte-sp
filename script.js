document.addEventListener("DOMContentLoaded", () => {
    const carrossel = document.getElementById("carrossel");
    const btnPrev = document.getElementById("btnPrev");
    const btnNext = document.getElementById("btnNext");
    const iframeMapa = document.getElementById("iframeMapa");
    const nomeLocalMapa = document.getElementById("nomeLocalMapa");
    const cards = document.querySelectorAll(".card-local");

    // 1. Controle das Setas do Carrossel
    if (btnPrev && btnNext && carrossel) {
        btnPrev.addEventListener("click", () => {
            carrossel.scrollBy({ left: -340, behavior: "smooth" });
        });

        btnNext.addEventListener("click", () => {
            carrossel.scrollBy({ left: 340, behavior: "smooth" });
        });
    }

    // 2. Lógica de clique nos Cards para atualizar o Google Maps
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            // Remove a classe "ativo" de todos os cards
            cards.forEach((c) => c.classList.remove("ativo"));

            // Adiciona a classe "ativo" no card clicado
            card.classList.add("ativo");

            // Pega o link do mapa e o nome do local salvos no HTML
            const novoMapaUrl = card.getAttribute("data-mapa");
            const nomeLocal = card.getAttribute("data-nome");

            // Atualiza o iframe e o título se os dados existirem
            if (novoMapaUrl && iframeMapa) {
                iframeMapa.src = novoMapaUrl;
            }

            if (nomeLocal && nomeLocalMapa) {
                nomeLocalMapa.textContent = nomeLocal;
            }

            // Rola suavemente até a seção do mapa para facilitar visualização no celular
            const secaoMapa = document.getElementById("secao-mapa");
            if (secaoMapa && window.innerWidth < 768) {
                secaoMapa.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});