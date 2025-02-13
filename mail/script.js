/*
Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

Bonus:
Dopo aver svolto l'esercizio con il for fai una cartella bonus e svolgilo anche anche usando un metodo delle array tipo includes
*/

// Creo un'array di email
mailList = ['luigi@gmail.com', 'marco@hotmail.com', 'simone@gmail.it']

// Prompt per permettere all'utente di inserire la propria email

const userMail = String(prompt('Inserisci la tua email')) 

// Controllo che la mail sia presente nell'array e stampo messaggio di esito

let mailMatch = false;

for (let i = mailList.length - 1; i >= 0; i--) {
    if (userMail === mailList[i]) {
        mailMatch = true;
        console.log(`Puoi entrare! La tua email è presente nella lista degli invitati!`);
    }
}

if (mailMatch == false) {
    console.log(`Mi dispiace. La tua email non è presente nella lista degli invitati`);
}