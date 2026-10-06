function ehPrimo(num){
  if (num <= 1){
    return false
  }

  let limite = Math.sqrt(num)
  for (let i = 2; i <= limite; i++){
    if( num % i === 0){
      return false
    }
  }
  return true

}

let n = Number(prompt("Informe quantas vezes vai percorrer: "))
let lista = []
let listaPrimos = []
let soma = 0

for(let i = 0; i < n ; i ++){
  let nums = Number(prompt("informe os numeros: "))
  lista.push(nums)

  if (ehPrimo(nums)){
    soma += nums
    listaPrimos.push(nums)
  }
}

console.log("numeros na lista", lista);
console.log("numeros primos", listaPrimos);
console.log("A soma dos numeros primos é",soma);




