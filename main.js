// Etape 1 : Création de la fonction qui demande un nombre
function askNumber() {
    let utilisateur = prompt("Veuillez entrer un nombre :")

    // Convertir l'entrée en nombre (prompt retourne une chaîne de caractère)
    let givenNumber = Number(utilisateur)

    // Vérifier si la convertion est correcte (si c'est bien un nombre)
    if(isNaN(givenNumber)) {
        alert("Ce n'est pas un nombre valide. Veuillez recommencer.")
    }
    else {
        console.log("Le nombre saisi est :", givenNumber)
    }

    return givenNumber
}

// Appel de la fonction pour tester 
askNumber()

// Etape 2 
// Création d'une fonction didIWin
function didIWin(givenNumber) {
    const targetNumber = 22 // Nombre à deviner, on a choisit 22

    // Condition
    if (givenNumber < targetNumber) {
        alert("Plus grand")
        return false // Pas encore trouvé
    }
    else if (givenNumber > targetNumber) {
        alert("Plus petit")
        return false // Pas encore trouvé
    }
    else {
        alert("Bravo ! Vous avez deviné le nombre")
        return true // Nombre trouvé
    }
}

// Etape 3
 // Fonction qui gère le jeu 
function gameplay() {
    let found = false // Vérification si le nombre a été trouvé

// Boucle jusqu'à ce que le nombre soit trouvé 

    while (!found) {
        // Demander un nombre à l'utilisateur
        let userGuess = askNumber()
        // Vérifier si il a gagné
        found = didIWin(userGuess)
    }
}

// Appel fonction pour commancer le jeu
gameplay()
