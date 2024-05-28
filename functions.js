//cuando tenemos un objeto y adentro de este existe una funcion, se le llama metodo
//toda la logica de JS va a partir de crear funciones
//una cosa es crear una funcion y otra es llamarla




//los parametros siempre van adentro de parentesis


// function - palabra reservada de JS y nos indica que es una función
//  FUNCIÓN - BLOQUE DE CÓDIGO
// saluda (nombre de mi función)
function saluda(){
    // RETURN ES EL PEDAZO DE LÓGICA QUE REGRESA LA FUNCIÓN
    return "hola";
}

// LLAMAR O INVOCAR LA FUNCIÓN -> CALL THE FUNCTION, INVOKE THE FUNCTION
console.log(saluda());


// PARÁMETROS DE UNA FUNCIÓN
function suma (numero1, numero2){
    return numero1 + numero2;
}
// ARGUMENTOS
console.log(suma(5,100000));
console.log(suma(1004,435));
console.log(suma(4332,546));

//FUNCIONES QUE RECIBEN DATOS Y QUE NO RECIBEN DATOS
//Crear una funcion(addTwo) que acepta un numero y regresa el numero +2

function addTwo(number){
    //Guardar mi resultado del numero +2 en una variable
    const result = number + 2;
    //regresar esa variable con el resultado final
    return result;
}
//llamar funcion es lo mismo que ejecutar funcion
//cuidar la sintaxis para llamar correctamente a la funcion, es decir siempre agregar parentesis
//addTwo() ------es correcto
//addTwo --------no es correcto
console.log(addTwo(5));
console.log(addTwo(8292939));
console.log(addTwo(202.82829))


