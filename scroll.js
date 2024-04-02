document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Previne o comportamento padrão do link

        const targetClass = this.getAttribute('data-target');
        const targetSection = document.querySelector('.' + targetClass);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', // Para um scroll suave
                block: 'start'
            });
        }
    });
});