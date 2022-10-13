// PARTE 1

var frase = "Sto imparando JavaScript";

document.getElementById('maiuscola').innerHTML = frase.toUpperCase();
document.getElementById('minuscola').innerHTML = frase.toLowerCase();

var lista = frase.split("");

document.getElementById('strArray').innerHTML = lista;

var caratteri = frase.charAt(2) + frase.charAt(1) + frase.charAt(14) + frase.charAt(18);
document.getElementById('estraiCaratteri').innerHTML = caratteri;

var nuovaFrase = frase.concat(" JS");
document.getElementById('concatena').innerHTML = nuovaFrase;

var pos = frase.slice(5, 9);
document.getElementById('estraiStringa').innerHTML = pos;

// PARTE 2

var array1 = ['Giovanni', 'Carla', 'Piero', 'Mirtilla'];
document.getElementById('array').innerHTML = array1;

array1.length;
document.getElementById('lunghezza').innerHTML = array1.length;

document.getElementById('elemento').innerHTML = array1[2];

array1.splice(2, 1, "Massimo");
document.getElementById('modificato').innerHTML = array1;

document.getElementById('ultimo').innerHTML = array1.pop();

// PARTE 3

const eta = [2001, 1990, 1987, 2018, 2010];
const anno = 2022;

calcolaEta(eta, anno);
function calcolaEta(eta, anno) {
    var array = [
        anno - eta[0],
        anno - eta[1],
        anno - eta[2],
        anno - eta[3],
        anno - eta[4],
    ];

    document.getElementById('eta1').innerHTML += `${anno - eta[0]} anni`;
    document.getElementById('eta2').innerHTML += `${anno - eta[1]} anni`;
    document.getElementById('eta3').innerHTML += `${anno - eta[2]} anni`;
    document.getElementById('eta4').innerHTML += `${anno - eta[3]} anni`;
    document.getElementById('eta5').innerHTML += `${anno - eta[4]} anni`;
    document.getElementById('arrayEta').innerHTML += array;
}


// PARTE 4

var arrayAnimali = ['coniglio', 'cane', 'gatto', 'cricieto'];

document.getElementById('intero').innerHTML = arrayAnimali;

arrayAnimali.push("leone");
document.getElementById('aggiunto').innerHTML = arrayAnimali;

document.getElementById('estratto').innerHTML = arrayAnimali.slice(0, 4);

document.getElementById('verifica1').innerHTML = arrayAnimali.includes("coniglio");
document.getElementById('verifica2').innerHTML = arrayAnimali.includes("lepre");





