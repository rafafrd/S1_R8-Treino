let acimaDe5 = 0;
let divisiveisPor3 = 0;

for (let c = 1; c <= 20; c++) {
    let numero = Math.ceil(Math.random() * 10);
    console.log(numero)
    if (numero > 5) acimaDe5++;
    if (numero % 3 === 0) divisiveisPor3++;
}
console.log(`\nTotal de números acima de 5: ${acimaDe5}`);
console.log(`Total de números divisíveis por 3: ${divisiveisPor3}`);