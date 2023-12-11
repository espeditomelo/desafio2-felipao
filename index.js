// Segundo desafio do Felipao
// Calcuçadora de partidas Rankeadas

const input = require("prompt-sync")({sigint: true})

let hero = []
let answer = "s"

while (answer === "s" || answer === "S") {

   hero[0] = input( "Insira o nome do Herói: " )
   hero[1] = input( "Insira a quantidade de vitórias: " )
   hero[2] = input( "Insira a quantidade de derrotas: " )

   console.log(`O Herói tem de saldo de **${calculateBalance(hero[1], hero[2])}** está no nível de **${defineLevel( calculateBalance(hero[1], hero[2]))}**`)

   answer = input( "Deseja definir o ranking para mais um herói? (S/N) " )

}

// funcao que calcula o saldo de vitorias e derrotas
function calculateBalance(victories, defeats) {
   let balance = victories - defeats
   return balance
}


// funcao que define o nivel do heroi a partir do saldo
function defineLevel( balance ) {

   let result

   if (balance < 10){
      result = "Ferro"
   } else if (balance >= 11 && balance <= 20){
      result = "Bronze"
   } else if (balance >= 21 && balance <= 50) {
      result = "Prata"
   } else if (balance >= 51 && balance <= 80) {
      result = "Ouro"
   } else if (balance >= 81 && balance <= 90) {
      result = "Diamante"
   } else if (balance >= 91 && balance <= 100) {
      result = "Lendário"
   } else {
      result = "Imortal"
   }

   return result
}



