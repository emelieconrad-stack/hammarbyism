document.addEventListener('DOMContentLoaded', function() {
    const learnMoreBtn = document.getElementById('learn-more-btn');
    const historiaSection = document.getElementById('historia');

    // Funktion för att scrolla mjukt till Historik-sektionen
    function smoothScrollToHistoria() {
        historiaSection.scrollIntoView({
            behavior: 'smooth'
        });
    }

    // Lägg till en lyssnare på "Utforska Bajen-andan"-knappen
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', smoothScrollToHistoria);
        console.log("Knappen är redo att scrolla!");
    }

    // Lägg till smooth scroll för navigationslänkar (för extra känsla)
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
