// Seleziona la lista e il bottone
const lista = document.getElementById('lista');
const bottone = document.getElementById('aggiungiBottone');
const input = document.getElementById('nuovoElemento');

// Aggiungi un evento di click al bottone
bottone.addEventListener('click', () => {
    // Ottieni il testo dall'input
    const testoNuovoElemento = input.value;
    // Crea un nuovo elemento di lista solo se c'è testo
    if (testoNuovoElemento !== '') {
        const nuovoElemento = document.createElement('li');
        nuovoElemento.textContent = testoNuovoElemento;
        // Aggiungi il nuovo elemento alla lista
        lista.appendChild(nuovoElemento);
        // Resetta il campo input
        input.value = '';
    }
});