// ----------------------------------------------------------------------------------
                                // LES FONCTION
// ----------------------------------------------------------------------------------
//  var majoriteLegalFr = 18;

//  if (14 >= majoriteLegalFr) {
//      alert('Bienvenue !');
//  }
// //  LE ESLE N'EST PAS OBLIGATOIRE
//  else {
//      alert('Va voir chez Google si...');
//  }


/* -------------------------------
             EXERCICE

    Créer une fonction permettant de vérifier l'age d'un visiteur (prompt).
    S'il a la majorité légale, alors je lui souhaite la bienvenue,
    sinon, je fait une redirection sur Google après lui avoir signalé le soucis.

-------------------------------- */
//  var majorite = 18;
 
 function test() {
     var poppup = parseInt(prompt('Quel age a tu?'));
     if(poppup >= 18) {
         alert('Bienvenue');
     }
     else {
         document.location.href ="https://getbootstrap.com/docs/4.1/getting-started/introduction/";
     }
 }
 test();


// -- 1. Déclarer la majorité
const MAJORITELEGALEFR = 18;

// -- 2. Vérifier si l'utilisateur est majeur (fonction)
function monUtilisateurEstMajeur(age) {
    if (age >= MAJORITELEGALEFR) {
        return true;
    } else {
        return false;
    }
}

// -- 3. Je demande à l'utilisateur son age
var age = parseInt(prompt("Bonjour, Quel age avez-vous ?", "<Saisissez votre Age>"));

// -- 4. Vérification
if (monUtilisateurEstMajeur(age)) {

    alert("Bienvenue sur mon site internet réservé aux majeurs");
    document.write("0_0 !!!");

} else {
    // -- 5. Redirection
    document.location.href = "http://fr.lmgtfy.com/?q=Majorit%C3%A9+L%C3%A9gale+en+France";

}
// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
// LES OPERATEUR DE COMPARAISON
/**
 * L' Opérateur de comparaison "==" signifie : Egal à.
 * Il permet de vérifier que 2 variables sont identiques.
 * 
 * 
 * 
 * L'Opérateur de comparaisson "===" signifie : Strictement égal à.
 * Il va comparer la valeur et aussi le type !
 * 
 * L'Opérateur "!=" : Différent de 
 * L'Opérateur "!== " : Strictement différent de 
 */
// ----------------------------------------------------------------------------------


/* -------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen 
d'un email et d'un mot de passe.

 1 Je doit saisir mon email et mon mot de passe afin d'être authentifié sur le site.

En cas d'échec une alert m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
-------------------------------- */
var email = "jho02@live.fr"
var mdp = "wf3";
// 1 on demande son email
var emailLog = prompt(" Quel est ton email");
var mdpLog = prompt('Ton mdp');

// 2 je verifie si l'email saisie correspond avec elle dans la BDD
if (email === emailLog && mdp === mdpLog) {
    // 3 Tout est ok je continue la vérification avec le mot de passe 
    alert('Bienvenue');
} else {
    // 4 Erreur au niveau de l'identification
    alert('Votre mot de pase ou email est incorrect');
}
// -- Exemple AVEC une fonction

function login(email, mdp) {
    return email === emailLog && mdp === mdpLog;
}

if (login(emailLog, mdpLog)) {
    alert("Bienvenue " + emailLog + " !");
} else {
    alert("ATTENTION, email / mot de passe incorrect.");
}

 /**-----------------------------------------------------------
  * 
  *                  --   LES OPERATEURS LOGIQUES  --
  * 
  * ----------------------------------------------------------*/

  /**
   * L'Opérateurs ET : && Si la combinaison email et emaillog
   * correspond; ET la combinaison mdplog et mdp correspond
   * 
   * Dans cette condition,Les 2 doivetn OBLIGATOIREMENT correspondre pour être validé.
   * EX:if (email === emailLog && mdp === mdpLog ) {...}
   * 
   * ---------------------------------------------------------------
   * 
   * L'Opérateur OU : ||. Si la combinaison email et emaillog
   * correspond,ET/OU la combinaison mdplog et mdp correspond.
   * 
   * --> Dans cette condition , au moin l'une des deux doit 
   * correspondre pour être validée.
   * if (email === emailLog || mdp === mdpLog )
   * 
   * ----------------------------------------------------------------
   * L'Opérateur ! : ou encore NOT .
   * Il signifie le CONTRAIRE DE.
   * 
   * var monUtilisateurEstApprouve = true;
   * if( !monUtilisateurEstApprouve) {....}
   * Si mon utilisateur n'est pas approuvé.
   * 
   * Reviens à écrire
   * if(monUtilisateurEstApprouve === false) {...}
   * 
   *-----------------------------------------------------------------------------------*/