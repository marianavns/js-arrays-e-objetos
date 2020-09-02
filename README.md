
## Reprograma Semana 4 - Arrays, <h1>

## Observações gerais para colar num post-it <h2>

*Saiba o que tem guardado dentro de cada variável.*
*Uma comparação sempre retorna "true" ou "false":*
```js
const cpf = [072, 200, 684, 5, 0]
console.log(cpf[0] === "072") //false, pois você tá comparando um número com uma string.
console.log(cpf[0] === 072) // true, pois agora sim você está comparando dois números.

```


## Arrays <h2>

O primeiro índice da array é o índice 0. Array é um arranjo, uma matriz. Os arrays do JavaScript aceitam dados mistos dentro dela.

**Saiba o que tem guardado dentro de cada variável**

```js
const cpf = [072, 200, 684, 5, 0]
console.log(cpf[3]) // "índice 3 do CPF" ou "CPF índice 3"
//resultado no terminal: 684
```

## Para saber o tamanho da Array <h3>

```js
const cpf = [072, 200, 684, 5, 0]
console.log(cpf.length)
//resultado no terminal: 5
```

## Operações dentro dos colchetes da Array <h3>
```js
const cpf = [072, 200, 684, 5, 0]
console.log(cpf[90-88]) 
//resultado no terminal: 684
```

## Como construir uma Array <h3>

```js
const novaArray = []
novaArray[0] = "banana"
novaArray[1] = 2
novaArray[2] = true

console.log(novaArray)
```




