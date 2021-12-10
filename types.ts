//bollean(true / false)
let isOpen: boolean
isOpen = true

// string ('foo', "foo", `foo`)
let message: string
message = 'foo'

//number (todos numeors(float, int, hexdecimal, binario))
let total: number
total = 10

//array (type[])
let itens: number[]
itens = [1, 2, 3]

let values: Array<number>
values=[1, 2, 3]

//tuple 
let title: [number, string]
title = [1, 'foo']

//enum (chave - valor)
enum Colors{
    white = '#fff',
    black = '#000'
}

//any (qualquer coisa) NÃO E LEGAL!
let coisa: any
coisa = 'foo'

// void (vazio) não retorna nada
function logger(): void{
    console.log('foo')
}

//null / undefined
type Bla = string | undefined

//never
function error(): never{
    throw new Error("erro")
}

//object
let cart: object
cart ={
    key: "foo"
}
