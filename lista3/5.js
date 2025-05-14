soma = 0;
pergunta = parseInt(prompt("Digite um numero para somar (0 para encerrar)"))
soma = soma + pergunta
while (pergunta != 0) {
  pergunta = parseInt(prompt("Digite outro numero para somar (0 para encerrar)"))
  soma = soma + pergunta
}
alert(`A soma de todos os numeros é ${soma}`)