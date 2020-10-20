// array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial])

// numeros = [2, 20, 200, 2000, 20000]
//     let resultadoReduce = numeros.reduce(
//         (acumulador, valorAtual) => (acumulador + valorAtual), 
//     0
//   )
//  console.log(resultadoReduce)


 pessoas = [
{
    name: "Mariana",
    age: 29,
    food: "chocolate"
},
{
    name: "Carlos",
    age: 73,
    food: "salada"
},
{
    name: "Helena",
    age: 85,
    food: "não cadastrado"
}
]
//     let resultadoReducePessoas = pessoas.reduce(function verifica(acumulador, valorAtual){
//         if (pessoas.food == "não cadastrado") {
//             (acumulador + valorAtual)
//         } 
//     []
//     })
//  console.log(resultadoReducePessoas)


 var resultadoReducePessoas = pessoas.reduce(function Reduzindo(acc, valorAtual, index){
     if (index <= 2){
         return acc + valorAtual
     }
     
},{'nome': 'mariana'})
console.log(resultadoReducePessoas)

// Sintaxe
// array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial]))
// Parâmetros
    // Callback: Função que é executada em cada valor no array (exceto no primeiro, se nenhum valorInicial for passado); recebe quatro argumentos:
        // Acumulador: O valor retornado na última invocação do callback, ou o argumento valorInicial, se fornecido (exemplo abaixo).
        // ValorAtual: O elemento atual que está sendo processado no array.
        // Index: Opcional. O índice do elemento atual que está sendo processado no array.
        // Array: Opcional. O array ao qual a função reduce() foi chamada.
// ValorInicial: Opcional. Valor a ser usado como o primeiro argumento da primeira chamada da função callback. Se nenhum valorInicial é fornecido, o primeiro elemento do array será usado como o valor inicial do acumulador e o valorAtual não será lido. Chamar reduce() em uma array vazia sem valor inicial retornará um erro.
