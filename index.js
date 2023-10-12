const cats = [
    "Milo",
    "Otis",
    "Garfield"
]
function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
  cats.unshift(name);
}
function destructivelyRemoveFirstCat(name) {
  cats.shift(name);
}
function destructivelyRemoveLastCat(name) {
  cats.pop(name);
}
function appendCat(name) {
  const copyOfCats = cats.concat(name);
  return copyOfCats;
}
function prependCat(name) {
  const copyOfCats = cats.slice();
  copyOfCats.unshift(name); 
  return copyOfCats; 
}
function removeLastCat(name) {
  const copyOfCats = cats.slice(0, cats.length - 1); 
  return copyOfCats; 
}
function removeFirstCat(name) {
  const copyOfCats = cats.slice(1); 
  return copyOfCats; 
}
