let parrafoInicial = document.getElementById("parrafoInicial");

console.log(parrafoInicial);

parrafoInicial.onclick = function() {
    cambiacolorAleatorio()
}

function cambiacolorAleatorio() {

    const colores =[
        "red",
        "blue",
        "black",
        "cyan"
    ];

    parrafoInicial.style.color = colores[Math.floor(Math.random() * colores.length)]
};


/* 

TIPOS DE DATOS
var - Modificable, scope global - NO SE RECOMIENDA
let - modificable, scope limitado - RECOMENDADA
const - CONSTANTE, no modificable - scope global
CASES

PascalCase - Clases - JAVA

camelCase - Vaiables, funciones, atributos. - JavaScript
        Varibale - parrafoInicial =
        Funcion - parrafoInicial ()
        Atributo - parrafoInicial

Snake_case - Python, JavaScript
        Variables y funciones

CASE - Constantes


*/


