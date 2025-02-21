let fatiaQueijo = 50;
let fatiapresunto = 50;
let hamburgue = 100;

//entrada
let sanduichesAFazer = 5;

// processamento
let quiloQueijo = (sanduichesAFazer * fatiaQueijo * 2) / 1000;
let quilopresunto = (sanduichesAFazer * fatiapresunto) / 1000
let quiloHamburgue = (sanduichesAFazer * hamburgue) / 1000

//saida
console.log("\t*** LANCHONETE ***");
console.log("para" + sanduichesAFazer + "sanduiches e necessario: ");
console.log("- " + quiloQueijo + "kg de queijo ");
console.log("- " + quilopresunto + "kg de presunto ");
console.log("- " + quiloHamburgue + "kg de hamburgue ");