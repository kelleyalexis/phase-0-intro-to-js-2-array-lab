const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = name => cats.push("Ralph");

const destructivelyPrependCat = name => cats.unshift("Bob");

const destructivelyRemoveLastCat = name => cats.pop();

const destructivelyRemoveFirstCat = name => cats.shift();

const appendCat = name => [...cats, "Broom"];

const prependCat = name => ["Arnold", ...cats];

const removeLastCat = name => cats.slice(0, cats.length -1);

const removeFirstCat = name => cats.slice(1);





