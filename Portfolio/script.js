// Adiciona um evento de clique para cada link na hotbar
var hotbarLinks = document.querySelectorAll('.hotbar a');
hotbarLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        // Previne o comportamento padrão do link
        event.preventDefault();
        
        // Obtém o id da seção alvo do link
        var targetSectionId = link.getAttribute('href').substring(1);

        // Chama a função para rolar até a seção alvo com deslocamento
        scrollToSection(targetSectionId);
    });
});

// Função atualizada para incluir o deslocamento
function scrollToSection(sectionId, offset = 70) { // Assumindo 70 como o deslocamento padrão
    var targetSection = document.getElementById(sectionId);

    if (targetSection) {
        // Calcula a posição da seção alvo considerando o deslocamento
        var offsetPosition = targetSection.offsetTop - offset;

        // Rola a página até a posição calculada de forma suave
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}
