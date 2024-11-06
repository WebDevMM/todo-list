// Cambia automaticamente il titolo della pagina
document.title = 'Nuovo Titolo della Pagina';
console.log('Ciao, questo è il mio primo messaggio dalla console in un file esterno!');

// Seleziona la lista e il bottone
const lista = document.getElementById('lista');
const bottone = document.getElementById('aggiungiBottone');
const input = document.getElementById('nuovoElemento');

// Aggiungi un evento di clic al bottone
bottone.addEventListener('click', () => {
    // Ottieni il testo dall'input
    const testoNuovoElemento = input.value;
    // Crea un nuovo elemento di lista solo se c'è testo
    if (testoNuovoElemento !== '') {
        const nuovoElemento = document.createElement('li');
        nuovoElemento.textContent = testoNuovoElemento;
        // Aggiungi il nuovo elemento alla lista
        lista.appendChild(nuovoElemento);
        // Ripristina il campo di input
        input.value = '';
    }
});