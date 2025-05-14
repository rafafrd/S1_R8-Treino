let maior = 0;
let menor = 0;
let soma = 0;

for (let i = 1; i <= 4; i++) {
    let idade = parseInt(prompt("Digite uma idade: ")); 
    if (!isNaN(idade)) {
        soma += idade;
        
        if (idade >= 18) {
            maior++;
        }
        if (idade < 5) {
            menor++;
        }
    } else {
        console.log("Idade inválida. Digite um número.");
        i--;
    }
}

console.log(`${soma / 4} é a média das idades`);
console.log(`${maior} são maiores que 18`);
console.log(`${menor} são menores que 5`);