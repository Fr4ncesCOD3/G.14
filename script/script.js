const RandomN = document.getElementById('RandomN');
const numberExtracted = document.getElementById('numberExtracted');
const tableNumbers = document.getElementById('tableNumbers');


//genero n 1-76
const generaNumeroRandom = () => {
    const numeroRandom = Math.floor(Math.random() * 76) + 1;
    numberExtracted.textContent = numeroRandom;
};

RandomN.addEventListener('click', generaNumeroRandom);

// Funzione per creare la tabella dei numeri
const creaTabellaNumeri = () => {
    for (let i = 1; i <= 76; i++) {
        const cellNumber = document.createElement('div');
        cellNumber.textContent = i;
        cellNumber.classList.add('numero');
        tableNumbers.appendChild(cellNumber);
    }
};

// Chiamata alla funzione per creare la tabella
creaTabellaNumeri();
