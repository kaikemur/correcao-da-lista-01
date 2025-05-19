const notas =[8.5, 7.0, 9.5, 6.5, 8.0, 7.5, 5.5, 6.0, 9.0, 10.0]

let totalSomanotas = 0;
let mediaTurma = 0;
let acimaDamedia= 0;
let maiorNota =notas [0];
let menorNota = notas [0];

//varredura do array de notas com laço de repetição
for (let i = 0; i < notas.length; i++) {
    totalSomanotas+= notas[i]
    
//verificação de maior nota
if (notas[i] > maiorNota) {
    maiorNota=notas[i];
}
    //verificação de menor nota
    if (notas[i]<menorNota){
    menorNota=notas[i]}
}
mediaTurma= totalSomanotas / notas.length;

for (let i = 0; i < notas.length; i++) {
    if(notas[i] > mediaTurma){
        acimaDamedia++;
    }

}
console.log(`a media da turma: ${mediaTurma}`);
console.log(`a quantidade de alunos acima da media é: ${acimaDamedia}`);
console.log(`a maior nota é:: ${maiorNota}`);
console.log(`a menor nota é:: ${menorNota}`);