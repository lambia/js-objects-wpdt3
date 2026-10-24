const oggettoMouse = {
    nome: "Mouse",
    img: "g502-hero-mouse-1.png",
    prezzo: 15.99,
    descrizione: "Questo mouse è potentissimo e ti fa giocare molto meglio"
};

// console.log(oggettoMouse);

// console.log(oggettoMouse["prezzo"]);

// console.log(` ${oggettoMouse.nome} di ${oggettoMouse.marca} costa ${oggettoMouse.prezzo}`);

// oggettoMouse.prezzo = 9.99;
// oggettoMouse.marca = "Logitech";

// console.log(` ${oggettoMouse.nome} di ${oggettoMouse.marca} costa ${oggettoMouse.prezzo}`);

// for (const nomeProprieta in oggettoMouse) {

//     const valoreProprieta = oggettoMouse[nomeProprieta];

//     console.log(nomeProprieta, valoreProprieta);
// }

const prodotti = [

    {
        nome: "Tastiera",
        prezzo: 123
    },
    {
        nome: "Display",
        prezzo: 22.22
    },
    {
        nome: "Batteria",
        prezzo: 9.99
    },
    oggettoMouse

];
// prodotti.push(oggettoMouse);


//console.log("prezzo della batteria: ", prodotti[2].prezzo);

// for (let x = 0; x < prodotti.length; x++) {
//     console.log(`${prodotti[x].nome} costa ${prodotti[x].prezzo}`);
// }

// for (let i = 0; i < prodotti.length; i++) {
//     const questoProdotto = prodotti[i];

//     console.log(`${questoProdotto.nome} costa ${questoProdotto.prezzo}`);
// }

let prodottiEconomici = [];

// for (const questoProdotto of prodotti) {
//     console.log(`${questoProdotto.nome} costa ${questoProdotto.prezzo}`);

//     if (questoProdotto.prezzo < 50) {
//         prodottiEconomici.push(questoProdotto);
//     }
// }

// console.log(prodottiEconomici);


prodottiEconomici = prodotti.filter(prodotto => {

    const condizione = (prodotto.prezzo > 10);
    console.log(condizione);

    return condizione;

});
console.log(prodottiEconomici);