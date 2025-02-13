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