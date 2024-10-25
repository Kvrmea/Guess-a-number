// Variables globales
let targetNumber = null // Nombre que le joueur 1 choisit
let attempts = 0 // Compteur de tentatives
let minRange = 0 // Range min
let maxRange = 50 // Range max

// Fonction pour mettre à jour l'affichage du range
function updateRangeDisplay() {
    document.getElementById("minRange").textContent = minRange
    document.getElementById("maxRange").textContent = maxRange
}

// Etape 1 : Fonction qui demande au joueur 1 de fournir un nombre entre 0 et 50
function askNumberFromPlayer1() {
    const player1Input = document.getElementById("player1Input")
    const player1FeedBack = document.getElementById("player1Feedback")

    // On récupère la valeur saisie par le joueur 1
    const player1Number = Number(player1Input.value)

    // Valide si le nombre est bien entre 0 et 50
    if (isNaN(player1Number) || player1Number < 0 || player1Number > 50) {
        player1FeedBack.textContent = "Nombre invalide. Veuillez entrer un nombre entre 0 et 50."

        return
    }

    // Si le nombre est valide, go lancer le jeu
    targetNumber = player1Number
    player1FeedBack.textContent = "" // Efface les messages d'erreur
    document.getElementById("player1Section").style.display = "none" // Cache la section du joueur 1
    document.getElementById("game").style.display = "block" // Montre la section du joueur 2
   
   /* do {
        targetNumber = Number(prompt("Joueur 1, veuillez entrer un nombre (entre 0 et 50) :"))
        if (isNaN(targetNumber) || targetNumber < 0 || targetNumber > 50) {
            alert("Nombre invalide. Veuillez entrer un nombre entre 0 et 50.")
        }
    } while (isNaN(targetNumber) || targetNumber < 0 || targetNumber > 50) */

    // Range min/max
    minRange = 0
    maxRange = 50
    updateRangeDisplay()
}

// Etape 2 Fonction ajouter : demande un nombre au joueur 2
function validerPlayer2Input() {
    /* let utilisateur = prompt("Joueur 2, Veuillez entrer un nombre :")
    // Convertir l'entrée en nombre (prompt retourne une chaîne de caractères)
    let givenNumber = Number(utilisateur)
    //Vérifier si la conversion est correct
    if (isNaN(givenNumber)) {
        alert("Ce n'est pas un nombre valide. Veuillez recommencer.")
        return askNumberFromPlayer2() // Recommencer si ce n'est pas un nombre
    }
     return givenNumber */
     const inputField = document.getElementById("player2Input")
     const feedback = document.getElementById("feedback")
     const attemptsSpan = document.getElementById("attempts")

     // Récupérer la valeur entrée par l'utilisateur
     const player2Guess = Number(inputField.value)

     // Vérifier si c'est un nombre valide
     if (isNaN(player2Guess) || player2Guess < 0 || player2Guess > 50) {
        feedback.textContent = "Veuillez entrer un nombre valide entre 0 et 50."
        return
     }

     // Vérifie si la proposition est dans le range
     if (player2Guess < minRange || player2Guess > maxRange) {
        alert(`Roh... Ton nombre est en dehors du range actuel. Le nombre doit être entre ${minRange} et ${maxRange}.`) 
        return
     }

     // Incrémenter le compteur de tentatives
     attempts++
     attemptsSpan.textContent = attempts

    // Comparer avec le nomber choisit
    if (player2Guess < targetNumber) {
        feedback.textContent = "Plus grand !"
        // MAJ du range min si le nombre proposé est plus grand que minRange
        if(player2Guess > minRange) {
            minRange = player2Guess
            updateRangeDisplay()
        }
    }
    else if (player2Guess > targetNumber) {
        feedback.textContent = "Plus petit !"
        // MAJ range max si le nombre proposé est plus grand que maxRange
        if (player2Guess < maxRange) {
            maxRange = player2Guess
            updateRangeDisplay()
        }
    }
    else {
        feedback.textContent = "Bravo ! T'es le meilleur, tu a trouvé le nombre."
        
        displayVictory()
    }
}

function displayVictory() {
    const gameDiv = document.getElementById("game")
    const victoryDiv = document.getElementById("victory")

    gameDiv.style.display = "none" // Cache la section de jeu
    victoryDiv.style.display = "block" // Affiche le message de victoire
}

// Etape 3
// Fonction qui prend deux paramètres
/* function didIWin(givenNumber, targetNumber) {
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
} */