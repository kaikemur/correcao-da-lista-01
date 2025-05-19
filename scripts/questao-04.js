const temperaturaCelcius =[0, 10, 20, 30, 40]
let contador = 0;
const farenheiht=[];


//formula de conversao* 9/5 + 32
for (let i = 0; i < temperaturaCelcius.length; i++) {
    farenheiht[contador]=(temperaturaCelcius[i] * 9)/5 + 32;
    contador++;

}
console.table(temperaturaCelcius)
console.table(farenheiht)