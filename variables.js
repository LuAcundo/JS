// esto es un copmentario de una linea
/* esto es un
comentario de 
varias lineas */

console.log();
// console.log es una funcion para "imprimir" o "ver" cualquier variable o data
// console.log es una funcion que nos muestra el valor de las variables

console.log("Hey bae");
/* VARIABLES Y CONSTANTES */

/* LET Y CONST */
/* Keyword(let OR const) name = value */ 
// las comillas indican texto, sin ellas indica variable
//Estoy creando e inicializando, esta varible *fridge* con el valor *empty*

let fridge = "empty";
console.log(fridge);
/* para cambiar el valor de la variable solo usamos su nombre */
fridge = "full";
console.log(fridge);

/* Lo recomendable es poner todo con *const*, ya si ocupamos que cambie lo sustituimos por *let*/ 
/* CONST */
const mascota = "gato"; 
console.log(mascota);

//REGLAS VARIABLES//
//1.Se distinguen entre mayusculas y minusculas
//2.Deben comenzar con un caracter en minuscula, no pueden iniciar con numero ni contener simbolos
//3.En camelCased son las mejores practicas

//VALIDAS
let user;
let estudiante3;
let candyFavorite;

//NO VALIDAS
/*let User;
let 3etudiante
let Candyfavorite */

//CHALLENGE VARIABLES
//CONCATENACION
let firstName = 'Lucy';
console.log( "Hey " + firstName);
let lastName = "Garcia";
console.log("Hey " + firstName + " " + lastName);

//HW

let favFood = "Grilled Octopus With Chile-Herb Oil";
console.log( "My favorite food is" +" " + favFood);
console.log( "No. pero en serio, mi comida favorita es " + " " + favFood);
