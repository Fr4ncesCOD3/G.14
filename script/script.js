const RandomN = document.getElementById('RandomN');
const numberExtracted = document.getElementById('numberExtracted');
const tableNumbers = document.getElementById('tableNumbers');
const userTable = document.getElementById('userTable');

// Genero numeri da 1 a 76
const numeriEstratti = new Set();

const generaNumeroRandom = function() {
    if (numeriEstratti.size === 76) {
        numberExtracted.textContent = "Tutti i numeri sono stati estratti!";
        return;
    }

    let numeroRandom;
    do {
        numeroRandom = Math.floor(Math.random() * 76) + 1;
    } while (numeriEstratti.has(numeroRandom));

    numeriEstratti.add(numeroRandom);
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

creaTabellaNumeri();

// Tabella dell'utente
const creaTabellaUtente = function() {
    let numeriGenerati = [];
    
    while (numeriGenerati.length < 24) {
        let numero = Math.floor(Math.random() * 76) + 1;
        if (!numeriGenerati.includes(numero)) {
            numeriGenerati.push(numero);
            let cellNumber = document.createElement('div');
            cellNumber.textContent = numero;
            cellNumber.className = 'numero-user';
            userTable.appendChild(cellNumber);
        }
    }
};

if (userTable) {
    creaTabellaUtente();
} else {
    console.error("L'elemento userTable non è stato trovato.");
}

// Verificare se il numero estratto è presente nella tabella dell'utente
const verificaNumeroEstratto = () => {
    const numeroEstratto = parseInt(numberExtracted.textContent);
    const numeriUtente = document.querySelectorAll('.numero-user');

    numeriUtente.forEach(numero => {
        if (parseInt(numero.textContent) === numeroEstratto) {
            numero.style.backgroundColor = '#a90a0a';
        }
    });
};

RandomN.addEventListener('click', verificaNumeroEstratto);

// Verificare se il numero estratto è presente nella tabella dei numeri
const verificaNumeroEstratti = () => {
    const numeroEstratto = parseInt(numberExtracted.textContent);
    const numeriEstratti = document.querySelectorAll('.numero');

    numeriEstratti.forEach(numero => {
        if (parseInt(numero.textContent) === numeroEstratto) {
            numero.style.backgroundColor = '#a90a0a';
            numero.style.color = '#fff';
        }
    });
};

RandomN.addEventListener('click', verificaNumeroEstratti);

// Se l'utente ha vinto
const verificaVittoria = () => {
    const numeriUtente = document.querySelectorAll('.numero-user');
    let tuttiTrovati = true;

    numeriUtente.forEach(numero => {
        if (numero.style.backgroundColor !== 'rgb(169, 10, 10)') {
            tuttiTrovati = false;
        }
    });

    if (tuttiTrovati) {
        alert("Hai vinto!!!");
        RandomN.disabled = true;
    }
};

RandomN.addEventListener('click', verificaVittoria);

// Bottone per riavviare il gioco 
const riavviaGioco = () => {
    location.reload();
};

const bottoneRiavvia = document.getElementById('riavviaButton');
bottoneRiavvia.addEventListener('click', riavviaGioco);
