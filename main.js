// Etape 1 : Fonction qui demande au joueur 1 de fournir un nombre entre 0 et 50
function askNumberFromPlayer1() {
    let targetNumber
    do {
        targetNumber = Number(prompt("Joueur 1, veuillez entrer un nombre (entre 0 et 50) :"))
        if (isNaN(targetNumber) || targetNumber < 0 || targetNumber > 50) {
            alert("Nombre invalide. Veuillez entrer un nombre entre 0 et 50.")
        }
     }
    while (isNaN(targetNumber) || targetNumber < 0 || targetNumber > 50)

    return targetNumber
}

// Etape 2 Fonction ajouter : demande un nombre au joueur 2
function askNumberFromPlayer2() {
    let utilisateur = prompt("Joueur 2, Veuillez entrer un nombre :")

    // Convertir l'entrée en nombre (prompt retourne une chaîne de caractères)
    let givenNumber = Number(utilisateur)

    //Vérifier si la conversion est correct
    if (isNaN(givenNumber)) {
        alert("Ce n'est pas un nombre valide. Veuillez recommencer.")
        return askNumberFromPlayer2() // Recommencer si ce n'est pas un nombre
    }

    return givenNumber
}

// Etape 3
// Fonction qui prend deux paramètres
function didIWin(givenNumber, targetNumber) {
    // Condition
    if (givenNumber < targetNumber) {
        alert("Plus grand")
    }
    else if (givenNumber > targetNumber) {
        alert("Plus petit")
        // Pas encore trouvé
    }
    else {
        alert("Bravo ! Vous avez deviné le nombre")
        return true // Nombre trouvé
    }
    return false
}

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