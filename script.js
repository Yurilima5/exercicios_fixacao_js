//Exercício 1

let tempo = "chuvoso"

if(tempo == "ensolarado"){
    console.log("O dia está limpo, dá uma praia ;)")
}else{
    console.log("o dia está chuvoso, melhor ficar em casa :(")
}

//Exercício 2

for(let i = 0; i <= 20; i += 2 ){
   console.log(i)
}

//Exercício 3

function mensagem(){
    console.log("Hum hoje podemos comer uma pizza :p")
}
 mensagem();

//Exercício 4

function nome (nome){
    console.log(`meu nome é ${nome}`);
}
nome(`Yuri Lima`);


//Exercício 5

function sobre (nome , idade , gosto){
    console.log(`sobre mim ${nome, idade, gosto}`)
}
sobre(`Yuri`, `18 anos`, `rock/eletronica` )

//Exercício 6

function midia (filme , musica){
    console.log(`o filme é ${filme} e a música é ${musica}`)
}
midia(`Kungfu panda 3` , `I'm so sorry ~imagine dragons`)

//Exercício 7

//??

//Exercício 8

let clima = limpo = false;

if(clima != true){
    console.log("o clima é falso");
}else{
    console.log("o clima é verídico");
}

//Exercício 9

let compras = ["sabonete", "shampoo", "cebola", "aipim", "tomate"];
console.log(compras);  

//Exercício 10

let lista_desejo = ["funko pop Sherek", "Ps5", "mousepad da xuxa", "cabo av"];
console.log(lista_desejo);
lista_desejo.unshift("panela polishop");

//Exercício 11

lista_desejo.pop();

//Exercício 12

lista_desejo.push("taça copa do Brasil" , "camisa branca do flamengo")

//Exercício 13

lista_desejo.shift();

//Exercício 14

let ordem =  [7,5,6,3,10,8,9,2,1,4];
console.log(
ordem.sort(function (a,b) {
    return a - b;
})
);

//Exercício 15

let sobre_yuri = {
    altura:1.86,
    personalidade:"extrovertido",
    comida:"strognoff"
};

//Exercício 16

sobre_yuri.pet="tem um cão"

//Exercício 17

delete sobre_yuri.comida

//Exercício 18

console.log(sobre_yuri);

//Exercício 19

let cadastro = [
    {
        nome: "Kleber",
        idade: 20,
        telefone: 21903442995,
        amigos: ["João", "Carlos", "Rebeca", "Lucas", "Gabriel"]
    }
    ,{
       nome: "João",
       idade: 18,
       telefone: 2190863349,
       amigos: ["Kleber","Carlos","Rebeca","Lucas","Gabriel"]
       
    },
    {
        
    },
    {

    }
]
console.log(cadastro);

//Exercício 20
//??