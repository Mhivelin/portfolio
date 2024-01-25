document.addEventListener('DOMContentLoaded', () => {
    const matrixEffectElements = document.querySelectorAll('.matrix-effect');

    matrixEffectElements.forEach(element => {
        const originalText = element.textContent; // Sauvegarde le texte original
        const originalTextArray = [...originalText]; // Crée un tableau de caractères à partir du texte original
        const randomCharacters = '!@#$%^&*()-_=+<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let i = 0;

        const matrixEffect = setInterval(() => {
            if (i <= originalTextArray.length) {
                element.textContent =
                    originalTextArray
                        .slice(0, i) // Prend les caractères originaux jusqu'à la position i
                        .join('') // Les joint en une chaîne
                    + originalTextArray
                        .slice(i) // Prend le reste du texte
                        .map(() => i === originalTextArray.length ? '' : randomCharacters[Math.floor(Math.random() * randomCharacters.length)]) // Remplace chaque caractère par un caractère aléatoire
                        .join(''); // Les joint en une chaîne
                i++;
            } else {
                clearInterval(matrixEffect); // Arrête l'intervalle quand tout le texte est révélé
            }
        }, 100); // Vitesse de l'effet
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const skillBars = document.querySelectorAll('.skill-bar');

    skillBars.forEach(skillBar => {
        // Récupère le niveau de compétence défini dans l'attribut data-skill
        const level = skillBar.getAttribute('data-skill-level');

        // Définis la largeur à 0 au début
        skillBar.style.setProperty('--skill-level', '0%');

        // Anime la barre de compétence jusqu'à la largeur finale
        setTimeout(() => {
            skillBar.style.setProperty('--skill-level', level);
        }, 200);
    });
});
