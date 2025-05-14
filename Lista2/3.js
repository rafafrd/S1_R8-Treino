let maiorMulher = 0;
let homem = 0;
let mulher = 0;
let soma = 0;
let somaHomem = 0;
for (let i = 1; i <= 5; i++) {
  let sexo = parseInt(prompt("Qual seu Sexo? (M - 1 | F - 2)"));
  let idade = parseInt(prompt("Qual a idade dessa pessoa? "));
  if (!isNaN(idade || sexo)) {
    soma = soma + idade;
    if (sexo == 1) {
      homem++;
      somaHomem = somaHomem + idade;
    } else if (sexo == 2) {
      mulher++;
      if (idade > 20) {
        maiorMulher++
      }
    } 
  } else {
    console.log("Idade inválida. Digite um número.");
    i--;
  }
}
console.log(`${soma / 5} é a média das idades de todos`);
console.log(`${homem} são Homens e a média da idade deles é ${somaHomem / homem}`);
console.log(`${mulher} são Mulheres e ${maiorMulher} delas tem mais de 20 anos`);