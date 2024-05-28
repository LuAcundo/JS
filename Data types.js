//String--Cadena--cualquier cosa dentro de comillas
const name = "Lucy";
const edad = "26";
const space = " ";

//Number--cualquier numero
const favNum = 7;
const favNum1 = 7.7;

//Boolean--(true or false)
const iloveCoding = true;
const iloveCoding1 =  false;

//Undefined
let casa; //no le agrego un valor, asi que es undefined
console.log(casa); 

//Null
const hoja = null;

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++CHALLENGES

//1. String Concatenation
//Voy a crear 3 variables constantes y les voy a asignar unas palabras a cada una
const first = "Welcome";
const second = "to the";
const third = "Jungle";
const espacio = " ";

//Hacer un console.log, concatenando estas variables pero voy a guardar esa frase en otra variable
const welcome = first + espacio + second + espacio + third ;
console.log(welcome);




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ********************TIPOS DE DATOS COMPUESTOS*******************************
// Nos permiten guardar en variables colecciones de datos asociados o no 

// OBJECT 

const persona = {
    // NOMBRE --- VALOR // KEY VALUE PAIRS
    // KEY -- VALUE
    // strings
    nombre: "Lucy Garcia",
    nacimiento: "26/07/1997",
    colorOjos: "cafés",
    // Number
    edad: 26,
    // Boolean
    estudia: true,
}

console.log(persona);
// ¿CÓMO ACCEDEMOS A LOS VALORES DEL OBJETO?
// QUIERO ACCEDER AL NOMBRE DE LA PERSONA
console.log("Mi nombre es " + persona.nombre);
console.log("Mi nacimiento es " + persona.nacimiento);

console.log(persona.edad);


// ARRAY 
//En ARRAY la diferencia visual es que usamos corchetes
//Las variables en array siempre inician con 0

//              index 0 ,   index 1,   index 2,  index 3
const frutas = [ "mango", "fresa", "uva", "kiwi"];
const vacio = [ ];
const fruta = [ "moras"];
//TIPOS DE DATOS DENTRO DE MI ARRAY
const miArray = [ 21, "ramen", true, undefined, false];
const miArray2 = [ 15, "manzana", [1, 2, 3, true, "banana"],{uno:1}];

console.log(frutas[3]);
console.log(frutas[1]);

const fruta1 = "sandía";
//          ACCEDO A EL NOMBRE DE LA VARIABLE fruta1 Y CON [] ESTOY ACCEDIENDO AL ÍNDICE EN ESPECÍFICO
console.log(fruta1[0]);

// AGREGAR VALORES A MI ARRAY INDIRECTAMENTE
// Método push (función )
vacio.push("holiscrayolis");

console.log(vacio);



// Objetos vacíos también son objetos
const empty = {};
