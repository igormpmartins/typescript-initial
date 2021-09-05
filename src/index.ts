const soma = (a: number, b: number) => a + b

//por ser async, gera versão compatível com ecmascript 5
const readFile = async() => 10

let a: string = 'ab'
//a = 1
//a = soma(1, 2)

interface Point {
    x: number, 
    y: number
}

//consegue utilizar o q vai ser usado posteriormente!
const treku: Point = {
    x: 1, y: 1, z: 3
}

//notar que consegue implementar posteriormente, como o partials do C#
interface Point {
    z: number
}

const posicao: Point = {
    x: 1, y: 1, z: 3
}

console.log(treku)
console.log(posicao)

interface Pessoa  {
    nome: string,
    idade: number,
    //definindo um enum
    sexo?: 'm'|'f',
    [key: string]: string|number 
}

const humano: Pessoa = {
    nome: 'fulano',
    idade: 90,
    sexo: 'm'
}

console.log('humano ->', humano)

const Ola = (pessoa: Pessoa) => {
    console.log('olá,', pessoa.nome)
}

//É possível utilizar tanto minha var, quanto uma instância definida via parâmetro
Ola(humano)
Ola({nome: 'treku', idade: 50})

class Humano {
    altura: number
}

//implementando interface. Dica: é possível usar o quickFix para ele já preencher a definição da interface
class Funcionario extends Humano implements Pessoa {
    nome: string
    [key: string]: string | number
    idade: number
    sexo?: 'm' | 'f'
    constructor(nome) {
        super()
        this.nome = nome
    }    
}

const meuFunc = new Funcionario('Operador')
meuFunc.altura=2
console.log(meuFunc)
