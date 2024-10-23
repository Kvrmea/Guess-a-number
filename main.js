// Etape 4
 // Fonction qui gère le jeu avec 2 joueurs
 function gameplay() {
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
gameplay()