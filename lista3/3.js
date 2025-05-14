let senhaCerta = String(prompt("Cadastre uma Senha!"))
let senha = String(prompt("Digite a senha: "))
while (senha != senhaCerta) {
  senha = String(prompt("ERRO - Digite a senha novamente: "))
}
alert(`Acesso permitido!`)