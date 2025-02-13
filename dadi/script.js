/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// Genero due numeri interi casuali da 1 a 6

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
}

let userNum = getRandomIntInclusive(1, 6)
let pcNum = getRandomIntInclusive(1, 6)

console.log(userNum);
console.log(pcNum);
 
// Controllo quale dei due numeri è maggiore e lo stampo a console

if (userNum > pcNum) {
    console.log('Hai vinto tu!');
} else if (userNum < pcNum) {
    console.log('Ha vinto il pc!');
} else {
    console.log('Tu e il pc avete trovato lo stesso numero. Riprova');
}