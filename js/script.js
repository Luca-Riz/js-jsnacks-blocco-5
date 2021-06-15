// 1. Creare un array di oggetti. Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

//crea array di oggetti
// var bici = [
//     {
//         nome: 'specialized',
//         peso: 10
//     },
//     {
//         nome: 'wilier',
//         peso: 7
//     },
//     {
//         nome: 'cannondale',
//         peso: 3
//     }
// ];

// //stampa a schermo la bici con peso minore

// biciLeggera = bici[0];
// for(var i=1; i<bici.length; i++){
//     if(biciLeggera.peso > bici[i].peso){
//         biciLeggera = bici[i];
//     }
// }

// console.log(biciLeggera);


//=======================================================
// 2. Crea un array di 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.


//creo array 10 oggetti
var zucchine = [
    {
        varieta: 'var1',
        peso: 5,
        lunghezza: 10
    },
    {
        varieta: 'var2',
        peso: 7,
        lunghezza: 12
    },
    {
        varieta: 'var3',
        peso: 9,
        lunghezza: 15
    },
    {
        varieta: 'var4',
        peso: 11,
        lunghezza: 17
    },
    {
        varieta: 'var5',
        peso: 8,
        lunghezza: 10
    },
    {
        varieta: 'var6',
        peso: 15,
        lunghezza: 19
    },
    {
        varieta: 'var7',
        peso: 8,
        lunghezza: 16
    },
    {
        varieta: 'var8',
        peso: 6,
        lunghezza: 17
    },
    {
        varieta: 'var9',
        peso: 5,
        lunghezza: 18
    },
    {
        varieta: 'var10',
        peso: 9,
        lunghezza: 14
    },
];

//calcola quanto pesano tutte le zucchine

var pesoTot = 0;
for (var i=0; i<zucchine.length; i++){
    pesoTot += zucchine[i].peso;
}

console.log(pesoTot);


//=======================================================
// 3. Crea un array di 10 oggetti che rappresentano una zucchina. Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine