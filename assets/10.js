// alert('Mon fichier js fonctionne');
// Deux slash pour faire un commentaire
/*

Ici je peux faire un commentaiire sur plusieur ligne
RACCOURCI:
SHIFT +ALT +A

*/

// --1 Déclarer une variable JavaScript
var Prenom; //je déclare ma variable

// -- 2: Affecter une Valeur
Prenom = "Jhordan";

// --3 Afficher la valeur de ma variable dans la console F12
console.log(Prenom);

/*----------------------------------------------------- 
***************LES TYPES DE VARIABLES *****************
-------------------------------------------------------*/

// ------ typeof, me permet de connaitre le type de ma variable.
console.log(typeof Prenom);

// Déclaration et affectation d'un nombre.
var Age = 40;
// Connaitre son type
console.log(typeof Age);

/*------------------------------------------------------
                    LA PORTE DES VARIABLES
                    
    Les variables déclarées directement à la racine du fichier 
    JS sont appelés : variable GLOBALES.

    Elles sont disponiblie dans l'ensemble de votre document,
    y compris dans les fonctions.
    

    ###

    Les variabmes déclarés à l'intérieur d'une fonction sont appelées :variables LOCALES.

    Elles sont disponible UNIQUEMENT dans le scope de la fonction.
*/ 

// Les variables de tyype FLOAT
var uneDecimale = -2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale);

// Les Bolléens (VRAI / FAUX) soit c'est vrai soit c'est faux
var unBoolean = false; //true
console.log(unBoolean);
console.log(typeof unBoolean);


//-- Les Constantes

/**
 * La déclaration CONST permet de créer une constante accessible
 * *UNIQUEMENT en lecture. Sa valeur ne pourra pas être modifié
 * par des réaffectations ultérieures. Une constante ne peut pas 
 * être déclarée à nouveau....
 */
const HOST = "localhost";
const USER   = "root";
const PASSWORD = "mysql";

// Je ne peux pas faire cela..
// User = "Hugo";
// TypeErrot : Assignement to constabt variable

var unNombre = "24";
console.log(unNombre);
console.log(typeof unNombre);
/**
 * La fonction parseInt() pour retourner un Entier
 * à partir de mon string
 */
unNombre = parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

unNombre = "12.55";
unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);


// -- Pour convertir un nombre en string
unNombre = 10;
var monString = unNombre.toString();
console.log(monString);
console.log(typeof monString);

/*  */