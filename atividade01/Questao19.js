
let salarioBruto = 1000;
let inss = salarioBruto * 0.07; // 7%
let irrf = salarioBruto * 0.14; // 14%
let salarioLiquido = salarioBruto - (inss + irrf);

console.log("salario Bruto: R$" + salarioBruto);
console.log("(-) inss: R$" + inss);
console.log("(-) irrf: R$" + irrf);
console.log("Salario Liquido: R$" + salarioLiquido);
