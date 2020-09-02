
# Reprograma Semana 4 - Arrays <h1>

## Arrays <h2>
O primeiro índice da array é o índice 0. Array é um arranjo, uma matriz. Os arrays do JavaScript aceitam dados mistos dentro dela.

### Fazendo verificações via arrays <h3>
```js
const cpf = [072, 200, 684, 5, 0]
console.log(cpf[0] === "072") //false, pois você tá comparando um número com uma string.
console.log(cpf[0] === 072) // true, pois agora sim você está comparando dois números.
```

### Como "puxar" apenas um item da array? <h3>
```js
const cpf = [072, 200, 684, 5, 0]
console.log(cpf[3]) // "índice 3 do CPF" ou "CPF índice 3"
//resultado no terminal: 684
```
Outra forma é fazendo uma operação matemática dentro dos colchetes:
```js
const cpf = [072, 200, 684, 5, 0]
console.log(cpf[90-88]) 
//resultado no terminal: 684
```

### Para saber quantos elementos têm na Array <h3>
```js
const cpf = [072, 200, 684, 5, 0]
console.log(cpf.length)
//resultado no terminal: 5
```

## Como construir uma Array <h2>
```js
const novaArray = []
novaArray[0] = "banana"
novaArray[1] = 2
novaArray[2] = true

console.log(novaArray)
```

## Array junto com o for <h2>
É possível imprimir na tela todos os itens da array em linhas separadas, índice por índice, com a ajuda do for:
```js
// Declarando a Array
    const paraFazer = ["Estudar", "Assistir vídeo", "Pesquisar Cursos"]
//Função
    function tempo(arr){
    for (i = 0; i < arr.length; i++){
        console.log(`índice: ${i} - tarefa:  ${arr[i]}`)
        }
    }
//Chamando a função
    tempo(paraFazer)
```

## Métodos de Array <h2>
Há formas já preparadas para fazer algumas coisas nas arrays, como empurrar fatores para dentro, tirar fatores e imprimir em tela, e muitos outros. Usamos assim: **"nomeDaArray.metodo"**.

Site com todos os métodos: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

Abaixo, três deles:

### arr.indexOf(oQueEstouProcurando) <h3>
Retorna qual o índice do que estou procurando. Se não estiver na array, aparece -1.
```js
const coresPreferidas = ['lilas', 'azul', 'rosa', 'branco']
console.log(coresPreferidas.indexOf(azul)) // terminal: 1
console.log(coresPreferidas.indexOf(branco)) // terminal: 3
console.log(coresPreferidas.indexOf(verde)) // terminal: -1
```

### arr.push(oQueVocêQuerIncluir) <h3>
Aqui é possível "empurrar" mais um participante para a array, sendo ele o último.
```js
const femaleRappers = ['Elliot', 'Hill', 'Minaj']
console.log(femaleRappers) // terminal: ['Elliot', 'Hill', 'Minaj']

femaleRappers.push('Thee Stalion')
console.log(femaleRappers) // terminal: ['Elliot', 'Hill', 'Minaj', 'Thee Stalion']
```

### arr.pop() <h3>
Arranca o último item de uma array.
```js
const trueSingers = ['Knowles', 'Houston', 'Keys', 'Spears']
console.log(trueSingers) // terminal: ['Knowles', 'Houston', 'Keys', 'Spears']
console.log(`Retiramos a ${trueSingers.pop()} da lista de cantoras`)
console.log(trueSingers) // terminal: ['Knowles', 'Houston', 'Keys']

## Observações gerais para colar num post-it <h2>
*Saiba o que tem guardado dentro de cada variável.*
*Uma comparação sempre retorna "true" ou "false":*
*Saiba o que tem guardado dentro de cada variável*
console.log(`índice: ${i} - tarefa:  ${arr[i]}`)