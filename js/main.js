

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>abrir twitch.tv</b>";

console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://www.twitch.tv/");
    //window.location.href = "https://www.twitch.tv/"; abre na mesma janela
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("pagina carregada");
}

function functionChange(elemento){
    console.log(elemento.value);
}

/*
function clicou(){
    alert("Obrigado por clicar");
}

/* function soma(n1, n2){
    return n1+ n2;
}

function validarIdade(idade){
    if(idade >=18){
        validar = true           
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt("qual sua idade");
console.log(validarIdade(idade));
*/

/*
var d = new Date();
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getDay());
alert(d.getHours());
*/

/*
var count;
for(count=0; count <=5; count++){
    alert(count);
}
*/

/*
var count = 0;
while(count -5){
    console.log(count);
    count = count + 1; //ou count++ que é igual ele + 1
}
*/


/*
var idade = prompt("Digite sua idade");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade!")
}
*/

/* var pokemon = [{name:"bulbasaur", type:"grass"}, {name:"charmander", type:"fire"}]

console.log(pokemon);
alert(pokemon[1].type) */


/*var pokemon = {name:"bulbasaur", type:"grass"}

console.log(pokemon.name);
alert(pokemon.type)


var pokemon = {name:"bulbasaur", type:"grass"}

console.log(pokemon.name);
alert(pokemon.type); */

//var nome = "Vinicius Castro";
//var idade = "30";
//alert (nome + " tem " + idade + " anos ");

//var lista = ["gengar", "gastly", "haunter"];
//lista.push("ditto"); // add item na lista
//lista.pop(); //tira o ultimo elemento da lista
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" | "))
//console.log(lista.length)