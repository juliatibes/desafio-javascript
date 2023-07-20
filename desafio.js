// Exercício 01

let numAleatorio = parseInt(Math.random() * 999);

function numeroPorExtenso(numero) {
  const unidades = [
    "",
    "um",
    "dois",
    "três",
    "quatro",
    "cinco",
    "seis",
    "sete",
    "oito",
    "nove",
    "dez",
    "onze",
    "doze",
    "treze",
    "quatorze",
    "quinze",
    "dezesseis",
    "dezessete",
    "dezoito",
    "dezenove",
  ];

  const dezenas = [
    "",
    "",
    "vinte",
    "trinta",
    "quarenta",
    "cinquenta",
    "sessenta",
    "setenta",
    "oitenta",
    "noventa",
  ];

  const centenas = [
    "",
    "cento",
    "duzentos",
    "trezentos",
    "quatrocentos",
    "quinhentos",
    "seiscentos",
    "setecentos",
    "oitocentos",
    "novecentos",
  ];

  if (numero < 0 || numero > 999) {
    return "Fora do intervalo suportado (0 a 999)";
  }

  if (numero < 20) {
    return unidades[numero];
  }

  if (numero < 100) {
    const unidade = numero % 10;
    const dezena = Math.floor(numero / 10);
    return dezenas[dezena] + (unidade !== 0 ? " e " + unidades[unidade] : "");
  }

  if (numero < 1000) {
    const centena = Math.floor(numero / 100);
    const resto = numero % 100;
    return (
      centenas[centena] + (resto !== 0 ? " e " + numeroPorExtenso(resto) : "")
    );
  }
}

console.log(numeroPorExtenso(numAleatorio));

//Exercício 02

let num;
let arrayNumeros = [1, 2, 3, 4, 5];

function buscaNumero(num) {
  let index = arrayNumeros.findIndex((array) => {
    return array === num;
  });

  if (arrayNumeros.includes(num)) {
    return console.log(`O número ${num} existe na posição ${index} do array`);
  } else {
    return console.log(`O número ${num} não existe no array`);
  }
}

console.log(buscaNumero(5));

//Exercicio 03

// let num = -1;

// while (num <= 10) {
//   console.log(num);
//   num += 0;
// }

// if(num > 10) {
//     console.log(num)
// }

//b) Loop infinito

//Exercicio 04

let peso;
let altura;

function calculaImc(peso, altura) {
  let imc = peso / (altura * altura);
  console.log(imc)

  if(imc <= 18.4) {
    return console.log("Abaixo do peso")
  } else if (imc > 18.5 && imc <= 24.9) {
    return console.log("Normal")
  } else if (imc > 25.1 && imc <= 29.9) {
    return console.log("Acima do peso")
  } else {
    return console.log("Obeso")
  }
}

console.log(calculaImc(70, 1.75))

// Exercício 05

function Pilha() {
  let itens = [];

  this.adicionar = function (element) {
    itens.push(element)
  };

  this.remover = function () {
    return itens.pop()
  };

  this.mostrar = function() {
    console.log(itens.toString())
  }
}

let pilha = new Pilha()

pilha.adicionar('Pedro')
pilha.adicionar('Júlia')
pilha.adicionar('Ana')
pilha.adicionar('Lucas')

console.log(pilha.mostrar())

pilha.remover()

console.log(pilha.mostrar())

//Exercício 06

function Fila() {
    let itensFila = []

    this.adicionar = function(element) {
        itensFila.push(element)
    }

    this.remover = function(){
        return itensFila.shift()
    }

    this.mostrar = function(){
        console.log(itensFila.toString())
    }
}

let fila = new Fila();

fila.adicionar('Erick')
fila.adicionar('Letícia')
fila.adicionar('Amanda')

console.log(fila.mostrar())

fila.remover()

console.log(fila.mostrar())
