// ----------------------------------------------------------------------------------
                                // LES BOUCLES
// ----------------------------------------------------------------------------------

// Pur i = 0 ; Tant que i est strictement inferieur ou égal à , 10 ;alors j'incrémente de i de 1.
for (let i = 0; i <= 10 ; i++) {
    document.write('<p>Instruction executée : <strong>' +i+ '</strong></p>');
}


document.write("<hr>");
// Avec la boucle while
let j = 0;
while(j<= 10) {
    document.write('<p>Instruction executée : <strong>' + j + '</strong></p>');
    j++;
}
/* -----------------------------
            EXERCICE
------------------------------ */

var Prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Hugo', 'Jacques'];

/**
 * CONSIGNE : Grâce à une boucle FOR, affichez la liste des prénoms
 * du tableau ci-dessus dans la console, ou sur votre page.
 */
// i = Prenoms;
//  for (let i = 0; i < 10; i++) {
//      console.log([i]);
     
//  }
 for (let index = 0; index < Prenoms.length; index++) {
     console.log( )= Prenoms[index];
 }

//  avec boucle while
let f =0;
while (f < Prenoms.length) {
    console.log(Prenoms[f]);
}