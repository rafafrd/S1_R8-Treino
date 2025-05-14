let saldo = 0;
let opcao;

do {
  opcao = prompt(
    "===-- MENU --===\n\n" +
      "1. Ver saldo\n" +
      "2. Fazer depósito\n" +
      "3. Sair\n\n" +
      "Digite uma opção (Ex: 2):"
    );
  switch (opcao) {
    case "1":
      alert(`Seu saldo atual é: R$${saldo.toFixed(2)}`);
      break;
    case "2":
      let valorDeposito = parseFloat(prompt("Digite o valor do depósito:"));
      if (!isNaN(valorDeposito) && valorDeposito > 0) {
        saldo += valorDeposito;
        alert(
          `Depósito de R$${valorDeposito.toFixed(2)} realizado com sucesso!\nNovo saldo: R$${saldo.toFixed(2)}`);
      } else {
        alert("Valor inválido para depósito. Por favor, digite um número positivo.");
      }
      break;
    case "3":
      alert("Saindo do sistema... Obrigado!");
      break;
    default:
      alert("Opção inválida. Por favor, escolha 1, 2 ou 3.");
  }
} while (opcao !== "3");