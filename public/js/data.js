
const data = new Date();

function zeroEsquerda(num){
   return num >= 10 ? num : `0${num}`;
}
function formataData(data){
   const ano = data.getFullYear();

   return `${ano}`
}

data_formatada = formataData(data)

document.getElementById("data").innerHTML = data_formatada;