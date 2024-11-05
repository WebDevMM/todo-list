// Cambia automaticamente il titolo della pagina
document.title = 'Nuovo Titolo della Pagina';
console.log('Ciao, questo è il mio primo messaggio dalla console in un file esterno!');

// Funzione per aggiungere un nuovo elemento alla lista
function aggiungiElemento() {
    // Seleziona la lista esistente
    const lista = document.getElementById('lista');
    
    // Crea un nuovo elemento di lista
    const nuovoElemento = document.createElement('li');
    nuovoElemento.textContent = 'Nuovo Elemento'; // Il testo del nuovo elemento
    
    // Aggiungi il nuovo elemento alla lista
    lista.appendChild(nuovoElemento);
}

// Chiama la funzione per aggiungere l'elemento al caricamento della pagina
aggiungiElemento();