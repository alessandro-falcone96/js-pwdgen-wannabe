var nome = prompt("Inserisci il tuo nome");
var cognome = prompt("Inserisci il tuo cognome")
var colore = prompt("Inserisci il tuo colore preferito")
console.log(nome, cognome, colore);

document.getElementById('password').innerHTML = nome + cognome + colore + 27
