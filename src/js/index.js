document.addEventListener("DOMContentLoaded", function() {
    const loveButton = document.getElementById('loveButton');
    const noLoveButton = document.getElementById('noLoveButton');
    const response = document.getElementById('response');

    loveButton.addEventListener('click', function() {
        response.textContent = "Eu também te amo, linda ❤️!";
    });

    noLoveButton.addEventListener('click', function() {
        response.textContent = "Não é possível que você não me ama!";
        noLoveButton.disabled = true;

        // Calcula a nova posição do botão
        const newX = Math.random() * (window.innerWidth - noLoveButton.offsetWidth);
        const newY = Math.random() * (window.innerHeight - noLoveButton.offsetHeight);

        // Aplica a animação de transição suave
        noLoveButton.style.transition = "all 0.3s ease";
        noLoveButton.style.transform = `translate(${newX}px, ${newY}px)`;
    });
});