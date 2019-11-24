//https://github.com/ironhack-labs/lab-javascript-basic-algorithms



//ITERACIÓN 1
//creamos la variable hacker1 con el nombre del driver
let hacker1 = "alberto";
//sacamos en consola el nombre

console.log(`The driver's name is ${hacker1}`)

//creamos  la varable hacker2 con el nombre del navegador
let hacker2 = "alberto"
// Sacamos en consola el nombre 
console.log(`The navigator's name is ${hacker2}`)

//Iteracion 2
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)

} else if (hacker1.length < hacker2.length) {

  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  //se da por hecho de que si no es mayor ni menor es porque son igual de largos
  console.log(`Wow, you both have equally long names, ${hacker1} characters!.`)
}





//ITERACIÓN  3
//3.1
//declaramos la variable de string vacio fuera donde se meterán letra a letra .
let selec = "";
function spaceLetter(hacker2) {
  for (i = 0; i <= hacker2.length; i++) {
    //recorre las letras de hacker2 y las mete una a una en selec
    selec += hacker2.charAt(i);
    selec += " "
  }
  //imprimimos en mayuscula la variable selec
  console.log(selec.toUpperCase())
}


//3.2
// declaramos variable string vacio
let selec2 = "";
function reverseLetters(hacker2) {
  for (i = hacker2.length; i >= 0; i--) {
    //le vamos restando uno a la posicion total de letras y vamos metiendo la letra en selec2
    selec2 += hacker2.charAt(i);

  }
  console.log(selec2)
}


//3.3

function lexicoGraphic(hacker1, hacker2) {
  // creamos el array vacio
  let lexicoArray = []
  //le metemos los dos nombres hacker1 y 2
  lexicoArray.push(hacker1, hacker2)
  //los ordenamos por orden alfabético con .sort
  lexicoArray.sort();
  //comparamos los dos valores que hemos metido en el array "lexicoArray" y mostramos en consecuencia.
  if (lexicoArray[0] == lexicoArray[1]) {
    console.log("What?! You both have the same name?")
  } else if (lexicoArray[0] == hacker2) {
    console.log("Yo!, the navigator goes first definitely.")
  } else if (lexicoArray[0] == hacker1) {
    console.log("The driver's name goes first.")
  } else { }
  
}



//LLAMADAS A LAS FUNCIONES
spaceLetter(hacker2)
reverseLetters(hacker2)
lexicoGraphic(hacker1, hacker2)