let n1 = Number(prompt("informe a nota da n1"))
let n2 = Number(prompt("informe a nota da n2"))

let media  = ((n1 * 2) + (n2 *3)) / (2 + 3) 

if (media >= 7){
  console.log(`Parabens Voce está aprovado! sua media final é ${media}`);
}else{
  console.log(`Reprovado! sua média final é ${media}`);
}
