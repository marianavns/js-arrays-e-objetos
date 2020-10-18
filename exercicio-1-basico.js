const pessoas = [
    {
        name: "Mariana",
        age: 29,
        food: "chocolate"
    },
    {
        name: "Carlos",
        age: 73,
        food: "salad"
    },
    {
        name: "Helena",
        age: 85,
        food: "chocolate"
    },
]

const atualizacao = [
    {
        food: "fruits",
        drink: "water"
    }
]

/* # Crie uma array com o nome das comidas:*/

// let allFoodsArray = pessoas.map(objeto => objeto.food)
// console.log(allFoodsArray)

/* 
O que faz o MAP?
- Roda uma função para cada elemento de uma array
- DEVOLVE UMA ARRAY nova. 
No exemplo acima, o map fez isso. A função era "de cada objeto, pegue apenas a propriedade food (rodou a função) e crie uma array nova (allfoods)
*/

/* # Crie uma array de objetos com o nome das comidas: 

Não dá para fazer { "chocolat", "salad", "chocolat" }. Isso não é um objeto. */

let allFoodsObject = {}
Object.keys(pessoas)
console.log(allFoodsObject)

// let allFoodsObject = {"vvv": 23}
// Object.values(pessoas).forEach(key => {
//     pessoas[key] = allFoodsObject[key]
// })
// console.log(Object.values(pessoas))
// console.log(allFoodsObject)

// Object.keys(updateCollaborator).forEach(key => {
    //     collabsToUpdate[key] = updateCollaborator[key]
    // })