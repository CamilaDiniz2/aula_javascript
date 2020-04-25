
//var nome = "Camila Diniz";
//var idade = 31;
//var idade2 = 10;
//var frase = "Esta é uma frase";

// alert(nome + " tem " + idade + " anos");

//alert(idade+idade2);

//console.log(nome);
//console.log(idade+idade2);
//console.log(frase.replace("Esta", "Essa"));
//console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());

// Lista de algumas capitais do Nordeste
//var lista = ["Recife", "João Pessoa", "Natal"];

/* Imprime no console o elemento 1 da lista, 
considerando que o primeiro elemento da lista é o 0*/
//console.log(lista[1]);

// Adiciona um elemento na lista
//lista.push("Fortaleza");

// Deleta o último elemento da lista;
//lista.pop();

//Imprime no console primeiro a lista completa
//console.log(lista);

// Mostra o tamanho da lista
//console.log(lista.length);

// Inverte os elementos da lista
//console.log(lista.reverse());

//Transforma a lista em string
//console.log(lista.toString());

//console.log(lista.join(" /"));

//Cria um dicionário
//var fruta = {nome: "maça", cor: "vermelha"};

//console.log(fruta);
//console.log(fruta.cor);

// Agora irá ser criada uma lista de frutas
//var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "banana", cor: "amarela"}];
//console.log(frutas);

/* Estruturas de controle, condicionais
var idade = prompt("Digite sua idade: ");

if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}; */

/* Laços de repetição: While
var count = 0;

while (count < 5){
    console.log(count);
    alert(count);
    count = count + 1;
    // mesma funcao de somar 1
    // count++
}; */

/* Laço de repetição: for
var count;

for (count = 0; count<=5; count++){
    console.log(count);
    alert(count);
};*/

/* Data
var d = new Date();
alert(d.getMonth()+1);
alert(d.getSeconds());
alert(d.getTime());
*/

/* Funções
function soma(n1, n2){
    return n1 + n2;
};

//alert(soma(5,10));


function validarIdade(idade){
    var validar;

    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    };
    return validar;
};

var idade = prompt("Qual é a sua idade: ");
console.log(validarIdade(idade));
*/

function botao(){
    document.getElementById("agradecimento").innerHTML = "Obrigada pela sua visita";
};

function redirecionar(){
    window.open("https://digitalinnovation.one/");
}

function trocar(elemento){
    elemento.innerHTML = "Obrigada por passar o mouse";
    //alert("Trocar texto");
}

function voltar(elemento)
{
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregando");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}