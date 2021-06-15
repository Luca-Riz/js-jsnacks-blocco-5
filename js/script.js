// 1. Creare un array di oggetti. Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

//crea array di oggetti
var bici = [
    {
        nome: 'specialized',
        peso: 10
    },
    {
        nome: 'wilier',
        peso: 7
    },
    {
        nome: 'cannondale',
        peso: 3
    }
];

//stampa a schermo la bici con peso minore

biciLeggera = bici[0];
for(var i=1; i<bici.length; i++){
    if(biciLeggera.peso > bici[i].peso){
        biciLeggera = bici[i];
    }
}

console.log(biciLeggera);


//=======================================================
// 2. Crea un array di 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.



//=======================================================
// 3. Crea un array di 10 oggetti che rappresentano una zucchina. Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine