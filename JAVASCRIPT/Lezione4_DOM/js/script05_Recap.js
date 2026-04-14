class Prodotto{
    constructor(nome, desc, img, prezzo){
        this.nome = nome;
        this.desc = desc;
        this.img = img;
        this.prezzo = prezzo;
    }
}

let prodotti = [
    new Prodotto("Smartphone", "Lorem ecc ecc", "https://i.guim.co.uk/img/media/6ead18d1b23b6cdaa33f6731c0c417a8f0576552/539_452_3726_2236/master/3726.jpg?width=445&dpr=1&s=none&crop=none", 599),
    new Prodotto("PC", "Lorem ecc ecc", "https://t3.ftcdn.net/jpg/05/44/71/62/360_F_544716203_PkX2ZAij0YWqvgDpd8P8bF32zTSxzO1K.jpg", 699)
]

const main = document.querySelector("#main");
const container = document.querySelector("#main .container");



function creaDiv(){

}
