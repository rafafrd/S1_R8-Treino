mediaAltura = 0;
mais90 = 0;
menor50 = 0;
maior100 = 0;
for (let i = 1; i <= 4; i++) {
    let peso = parseInt(prompt("Qual seu peso? (Ex: 80)"));
    let altura = parseFloat(prompt("Qual a sua altura? (Ex: 1.76) "));
    mediaAltura = mediaAltura + altura
    if (peso > 90) {
        mais90++
    } else if (peso < 50 && altura < 1.60) {
        menor50++
    } else if (peso > 100 && altura > 1.90) {
        maior100++
        mais90++
    }
}
console.log(`A média da altura de todos é ${mediaAltura.toFixed(2)}`)
console.log(`${mais90} Pessoas pesam mais de 90`)
console.log(`${menor50} Pesam menos de 50KG e tem menos de 1.60m de altura`)
console.log(`${maior100} Pessoas pesam mais de 100KG e tem mais de 1.90m`)