// const cpf = [072, 200, 684, 5, 0]
// console.log(cpf[2])

// const cpf = [072, 200, 684, 5, 0]
// console.log(cpf.length)

// const cpf = [072, 200, 684, 5, 0]
// console.log(cpf[0] === 072)

// const cpf = [072, 200, 684, 5, 0]
// console.log(cpf[90-88])

// const novaArray = []
// novaArray[0] = "banana"
// novaArray[1] = 2
// novaArray[2] = true
// console.log(novaArray)

// const paraFazer = ["Estudar", "Assistir vídeo", "Pesquisar Cursos"]
// function tempo(arr){
// for (i = 0; i < arr.length; i++){
//     console.log(`índice: ${i} - tarefa:  ${arr[i]}`)
//     }
// }
// tempo(paraFazer)

// const femaleRappers = ['Elliot', 'Hill', 'Minaj']
// console.log(femaleRappers) // terminal: ['Elliot', 'Hill', 'Minaj']
// femaleRappers.push('Thee Stalion')
// console.log(femaleRappers) // terminal: ['Elliot', 'Hill', 'Minaj', 'Thee Stalion']

// const trueSingers = ['Knowles', 'Houston', 'Keys', 'Spears']
// console.log(trueSingers) // terminal: ['Knowles', 'Houston', 'Keys', 'Spears']
// console.log(`Retiramos a ${trueSingers.pop()} da lista de cantoras`)
// console.log(trueSingers) // terminal: ['Knowles', 'Houston', 'Keys']

// const coresPreferidas = ['lilas', 'azul', 'rosa', 'branco']
// console.log(coresPreferidas.indexOf('azul')) // terminal: 1
// console.log(coresPreferidas.indexOf('branco')) // terminal: 3
// console.log(coresPreferidas.indexOf('verde')) // terminal: -1

// const pessoa1 = {
//     fname: 'Mariana', // conjunto chave-valor
//     age: '29',
//     lname: 'Souza',
//     cities: ['Recife', 'Jaboatao', 'Sao Paulo'],
// }

// console.log(`O nome da pessoa no objeto é ${pessoa1.fname}`)
// console.log(`Uma das cidades que a ${pessoa1['fname'][0]} esteve é ${pessoa1['cities'][2]}`)

// const pessoa2 = {}
// console.log(pessoa2) // terminal: {}
// pessoa2['name'] = "Leonardo"
// pessoa2['age'] = 35
// pessoa2['lname'] = "Vieira"
// console.log(pessoa2) // terminal: {}


// function criaObjeto(nome, idade){
//     let objeto = {
//         nome,
//         idade,
//     }
// return objeto
// }

// console.log(criaObjeto("Mariana", 29))

// const nome = "mariana"
// console.log(nome[2]) // terminal: "r"

// femaleRappers = ["Beyonce", "Minaj"]
// console.log(femaleRappers)
// femaleRappers[2] = "Elliot"
// console.log(femaleRappers)

// function imprimeObjeto (){
//         const objeto = {
//             nome: 'Mariana',
//             sobrenome: 'Vieira',
//             contatos: {
//                 pessoa1: "Iasmin",
//                 pessoa2: "Leonardo",
//                 }
//         }
//     return objeto
// }

// console.log(imprimeObjeto())

// imprimeObjeto()

// function imprimeArray (){
//     let array = ['Mariana', 'Iasmin', 'Leonardo']
//     return array
// }

// console.log(imprimeArray())


// console.log(arrayBase)
// let arrayNova = arrayBase.map(i => 2*i)
// console.log(arrayNova)

// let arrayBase = [1, 10, 100]
// console.log(arrayBase) // terminal: [ 1, 10, 200 ]
// let arrayNova = arrayBase.map(i => 2*i)
// console.log(arrayNova) // terminal: [ 2, 20, 200 ]

// let arrayBase = [1, 10, 100]
// let arrayNova = []
// for (i = 0; i < arrayBase.length; i++){
//     arrayNova.push(arrayBase[i]*20)
// }
// console.log(arrayNova)

// let arrayBase = [1, 10, 100] // terminal: [ 1, 10, 200 ]
// let arrayNova = arrayBase.map(parametro => 2*parametro)
// console.log(arrayNova)

// const objeto = [{
//     nome: 'Mariana',
//     sobrenome: 'Vieira',
//     contatos: {
//         pessoa1: "Iasmin",
//         pessoa2: "Leonardo",
//     }
// }]

// const nomePessoa2 = objeto.map(objeto => objeto.contatos[0] )
// console.log(nomePessoa2)

// let numeros = [0, 1, 2, 3, 4, 5, 6];
// let total = numeros.reduce((acumulador, numero, indice, original) => {
// return acumulador += numero;
// }, 0)
// console.log(total)

// function divideString(entrada){
// let arrayString = entrada.split('')
// console.log(arrayString)
// }

// divideString('484848')

// const divideString = (entrada) => {
//     let arrayString = entrada.split('')
//     return arrayString
// }

// console.log(divideString('484848'))

// const inverteString = (entrada) => {
//     let arrayInvertida = entrada.reverse()
//     console.log(arrayInvertida)
// }

// inverteString([2, 3, 4, 5])
    
const inverteString = (precisaSerEmFormatoStringComColchetes) => {
    let arrayInvertida = precisaSerEmFormatoStringComColchetes.reverse()
    console.log(arrayInvertida)
}

inverteString([2, 3, 4, 5])
     
