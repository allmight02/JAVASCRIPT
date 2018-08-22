// ----------------------------------------------------------------------------------
                                // LES FONCTION
// ----------------------------------------------------------------------------------


// ## -- Déclarer une fonction -- ## //
/**
 * NB : Cette fonction ne retourne aucune valeur et ne prend pas de parametres.
 */

function bonjour() {
    alert('Bonjour !');
}

/**
 * Je vais executer ma fonction "bonjour" et
 * déclencher ses instructions.
 */
// bonjour();

/**
 * function nomDeMaFonction( argument 1, argument 2, argument 3) {
 * }
 */
// function ditbonjour(prenom , nom) {
//     document.write('Bonjour !<strong>'+ prenom +' '+ nom + '</strong>');
// }

// Executer une fonction avec des arguments
// ditbonjour('Izuku', 'Midoriya');
// une function ne fait qu'une seule chose

/**
 * Créez une fonction permettant d'effectuer l'addition 
 * de deux nombre (nb1 et nb2)
 */

  
function calul(nb1 , nb2) {
    return nb1 + nb2;

 }
 console.log(calul(10,5) );