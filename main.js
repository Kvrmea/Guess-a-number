// Etape 4
 // Fonction qui gère le jeu avec 2 joueurs
 /* function gameplay() {
    // Joueur 1 choisit le nombre à deviner
    let targetNumber = askNumberFromPlayer1()

    let found = false // Vérification si le nombre a été trouvé

// Boucle jusqu'à ce que le nombre soit trouvé 

    while (!found) {
        // Demander un nombre à l'utilisateur
        // Vérifier si il a gagné
        let userGuess = askNumberFromPlayer2() // Joueur 2 fait une tentative
        found = didIWin(userGuess, targetNumber) // Vérifie s'il a gagné
    }
}

// Appel fonction pour commancer le jeu
gameplay() */

// Fonction pour redémarrer le jeu
function restartGame() {
    const gameDiv = document.getElementById("game")
    const victoryDiv = document.getElementById("victory")
    const inputField = document.getElementById("player2Input")
    const feedback = document.getElementById("feedback")
    const attemptsSpan = document.getElementById("attempts")

    // Réinitialiser les variables
    attempts = 0
    feedback.textContent = ""
    inputField.value = ""
    attemptsSpan.textContent = attempts

    // Cache le message de victoire et réaffiche le jeu
    gameDiv.style.display = "block"
    victoryDiv.style.display = "none"
    document.getElementById("player1Section").style.display = "block"
}

// Lancement du jeu lors du chargement de la page
document.addEventListener("DOMContentLoaded", function() {
    // Validation du nombre du joueur 1
    document.getElementById("submitPlayer1Btn").addEventListener("click", askNumberFromPlayer1)

    // Ajout un event listener pour valider le nombre de Joueur 2
    document.getElementById("validerBtn").addEventListener("click", validerPlayer2Input)

    // Ajout un event listener pour redémarrer le jeu après une victoire
    document.getElementById("restartBtn").addEventListener("click", restartGame)
})

    /* Redemande un nombre au joueur 1
    askNumberFromPlayer1() */

// Lancement du jeu
//function initializeGame() {

    // askNumberFromPlayer1() // Joueur 1 choisit le nombre

/* Lancer le jeu lors du chargement de la page
pas besoin de l'appelé ici, elle est appelé au dessus avec l'event : DOMContentLoaded
initializeGame() */