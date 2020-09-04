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

// function transformaObjeto (name, lname){
    
//     let objPessoa = {
//       nome: name,
//       sobrenome: lname,
//     }
//     let fullName = `${objPessoa.nome} ${objPessoa.sobrenome}`
//     return `${objPessoa.nome}, ${objPessoa.sobrenome}, ${fullName}`
//   }

//   console.log(transformaObjeto("Nazaré", "Tedesco"))

  function transformaObjeto (name, lname){
    let objPessoa = {
            nome: name,
            sobrenome: lname,
            }
    let fullName = `${name} ${lname}`
    let objPessoaNovo = objPessoa.map()
    return objPessoaNovo
  }

  console.log(transformaObjeto("Nazaré", "Tedesco"))