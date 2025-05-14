nota = parseInt(prompt("Digite uma nota entre 0 - 10 para avaliar"))
while (nota <= 0 || nota >= 10) {
  nota = parseInt(prompt("Digite uma nota valida, entre 0 - 10"))
}
alert(`Sua avaliação foi de ${nota}, muito obrigado pelo seu feedback!`)