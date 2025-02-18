let lar = prompt("informe a largura");
lar = parseInt(lar);
let alt = prompt("informe a altura");
alt = parseInt(alt);

function calculaArea(lar, alt){
    return lar*alt;
}

area = calculaArea(lar, alt)

console.log("a área do seu terreno é de"+ " "+ area+ " "+ "metros")