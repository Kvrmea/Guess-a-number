askNumberFromPlayer1() :

Cette fonction demande au joueur 1 de choisir un nombre compris entre 0 et 50.
Si le nombre ne respecte pas ce range, la fonction continue de demander un nouveau nombre.

askNumberFromPlayer2() :

Cette fonction demande au joueur 2 d'entrer un nombre qu'il pense être le bon.
Si l'entrée n'est pas un nombre valide, la fonction redemande un nombre.

didIWin(givenNumber, targetNumber) :

Elle prend maintenant deux paramètres :
givenNumber : le nombre deviné par joueur 2.
targetNumber : le nombre choisi par joueur 1.
La fonction retourne true si joueur 2 a trouvé le bon nombre, sinon false.

gameplay() :

La fonction demande au joueur 1 de choisir un nombre.
Ensuite, elle entre dans une boucle où joueur 2 fait des tentatives jusqu'à ce qu'il devine correctement le nombre.

Utilisation du Code
Joueur 1 entre un nombre entre 0 et 50.
Joueur 2 essaie de deviner ce nombre.
Le jeu indique à joueur 2 si le nombre deviné est plus grand ou plus petit, jusqu'à ce qu'il trouve la bonne réponse.
