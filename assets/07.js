// ----------------------------------------------------------------------------------
                                // LES FONCTION
// ----------------------------------------------------------------------------------

function test(prenom ,verif,age,jhordan ) {
    var prenom = prompt('Comment tu tappellle');    
    var age = parseInt(prompt('Quel age as tu?'));
    alert(2018-age);
}
test();
   
//     if (verif === verif) {
//         var age = 0;
//         for (var jhordan = 1990; jhordan <= 2053; jhordan += 1) {
//             document.write("<h2> tu est née en " + age + "ans en " + jhordan + " </h2>")
//             age++;
//         }
//     }
    
// }

// -- 1. Initialisation des Variables
var objetDate = new Date();
var anneeActuelle = objetDate.getFullYear();

// -- 2. Création d'une fonction
function identity(){
}

// -- 3. Je demande à l'utilisateur son Prénom
var prenomm = prompt("Hello ! whats is your name?","<Saisir votre Prénom");
console.log(prenomm);
console.log(typeof prenomm);

// -- 4. Je lui demande son age
var âge = parseInt(prompt('Hello'+prenomm+ "How old are you" ,"saisir votre age"));
console.log(age);
console.log(typeof age);

// -- 5. Déduire l'année de naissance et l'afficher dans un alerte
var anneeDeNaissance = anneeActuelle - age;
alert("RAAAAAAAye"+anneeDeNaissance);

// -- 6. Récapitulatif dans la page
// -- 7. Executer la fonction
identity();