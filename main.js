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


// Etape 2 
// Création d'une fonction didIWin
function didIWin(givenNumber) {
    const targetNumber = 22 // Nombre à deviner, on a choisit 22

    // Condition
    if (givenNumber < targetNumber) {
        alert("Plus grand")
         // Pas encore trouvé
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

// Etape 3
 // Fonction qui gère le jeu 
function gameplay() {
    let found = false // Vérification si le nombre a été trouvé

// Boucle jusqu'à ce que le nombre soit trouvé 

    while (!found) {
        // Demander un nombre à l'utilisateur
        // Vérifier si il a gagné
        let userGuess = askNumber()
        found = didIWin(userGuess)
    }
}

// Appel fonction pour commancer le jeu
gameplay()

// Etape 4
// Fonction demandant au joueur 1 de donner un nombre entre 0 et 50 tant qu'il ne respect pas ce range
let guessComputer = () => {
    while (userGuess < 0 || userGuess > 50)
}
