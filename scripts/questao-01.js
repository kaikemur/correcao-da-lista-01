const idades=[17,21,16,25,19];
let maioresDeidade = 0;
let menoresDeidade = 0;
//e um laço de repetição para varrer todos os elementos do meu array idades
for (let i = 0; i < idades.length; i++) {
    //condição para contadores de maior e menor idade
    if(idades[i]>=18){
        maioresDeidade ++;
    }

}

menoresDeidade=idades.length - maioresDeidade
console.log(`A quantidade de pessoas maiores de idades é: ${maioresDeidade}`);
console.log(`A quantidade de pessoas menores menores de idade é: ${menoresDeidade}`);
