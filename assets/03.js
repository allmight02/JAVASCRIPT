// ----------------------------------------------------------------------------------
                                // LA CONCATENATION
// ----------------------------------------------------------------------------------
var DebutDePhrase = "<h2> Aujourd'hui";
var DateDuJour = new Date();
var SuiteDePhrase = ", sont présent :";
var NombreDeStagiaire = 10;
var FinDePhrase = "apprenants </h2> .<br>";
/**Nous souhaitopns maintenant grâce à la concatenation ,
 * afficher le tout en une phrase sur notre page
 */
document.write(DebutDePhrase + SuiteDePhrase + DateDuJour.getDate()+ "/"+
DateDuJour.getMonth() +"/" + DateDuJour.getFullYear() + " " + NombreDeStagiaire + " "+ FinDePhrase);
