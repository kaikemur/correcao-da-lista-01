const precos= [150, 50, 220, 80, 120, 30, 480, 70, 90, 190];
const precosComDesconto= [];
let contadorArrayPrecosDesconto = 0;
let preco=0;
let desconto = 0;
let somaTotalPrecos=0;
let sommaTotalPrecosComDesconto = 0;
let perda=0;
let mediaDescontos = 0;

//varedura de array com laço de repetição
for (let i = 0; i < precos.length; i++) {
    preco = precos[i];
    if (precos[i] > 100 ) {
        desconto = precos[i]*0.1// 10/100
        preco = precos[i] - desconto;

    }
    precosComDesconto[contadorArrayPrecosDesconto] = preco;
    contadorArrayPrecosDesconto++;

    somaTotalPrecos+= precos[i];
    sommaTotalPrecosComDesconto+=precosComDesconto[i]

}
perda = somaTotalPrecos-sommaTotalPrecosComDesconto;
mediaDescontos =sommaTotalPrecosComDesconto /precosComDesconto.length




console.table(precos);
console.table(precosComDesconto);
console.log(`a loja vai perder: R$${perda.toFixed(2)}`);
console.log(`a media  dos valores com desconto é: R${mediaDescontos.toFixed(2)}`);

