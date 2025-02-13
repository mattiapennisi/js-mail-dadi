// Creo un'array di email
mailList = ['luigi@gmail.com', 'marco@hotmail.com', 'simone@gmail.it']

// Prompt per permettere all'utente di inserire la propria email

const userMail = String(prompt('Inserisci la tua email')) 

// Controllo che la mail sia presente nell'array e stampo messaggio di esito

if (mailList.includes(userMail)) {
    console.log(`Puoi entrare! La tua email è presente nella lista degli invitati!`);
} else {
    console.log(`Mi dispiace. La tua email non è presente nella lista degli invitati`);
}