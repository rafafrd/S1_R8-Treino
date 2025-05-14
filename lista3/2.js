let = resultado = 0;
let = numero = parseInt(prompt("Digite o numero para ver o fatorial "))
let conta = numero;
for (let i = numero - 1; i != 1 ; i--) {
  conta = conta * i
}
console.log(`O fatorial de ${numero}! é igual a ${conta}`)