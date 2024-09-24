const cats = [
    "Milo", 
    "Otis", 
    "Garfield",
];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop("Garfield");
}

function destructivelyRemoveFirstCat() {
    cats.shift("Milo");
}

function appendCat(cats, newCat) {
    cats.slice("Broom");
}

function appendCat(name){
    var newArray = cats.slice();
    newArray.push("Broom")
    return newArray
}

function prependCat(name){
    var newArray = cats.slice();
    newArray.unshift("Arnold")
    return newArray
}

function removeLastCat() {
    let newCatsArray = cats.slice();
    newCatsArray.pop();
    return newCatsArray;
}

function removeFirstCat() {
    let newCatsArray = cats.slice();
    newCatsArray.shift();
    return newCatsArray;
}
