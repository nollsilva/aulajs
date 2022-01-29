function clicou() {
    document.getElementById("Agradecimento").innerHTML = "<b>link de redirecionamento</b>";
    // <b> texto </b> deixa texto em negrito
    //console.log(document.getElementById("Agradecimento"));
    // alert("Obg por clicar");
}

function redirecionar() {
    window.open("https://www.youtube.com/channel/UCpe1fF6SZ2bPGb4nEM9Pyiw");
    // window.location.href = "https://www.youtube.com/channel/UCpe1fF6SZ2bPGb4nEM9Pyiw";
    // .location e .open diferença abre na mesma aba e abre em outra respectivamente
}

function trocar(elemento) {
    elemento.innerHTML = "Obrigado";
    //document.getElementById("mousemove").innerHTML = "Obrigado";
    //  alert("trocar texto")
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Pagina carregada");
}

function funcaoChange(elemento) {
    console.log("elemento.value")
}
/*

function soma(n1, n2) {
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}

alert(soma(5, 10));
alert(setReplace("vai " + "Japão ", "Brasil"));


function validaidade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true
    } else {
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade? ");
console.log(validaidade(idade));

var nome = "noll silva";
var idade = 23;
var idade2 = 7;
var frase = "Japao é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");

console.log(nome);
console.log(idade + idade2);
//console.log(frase.replace("Japao", "Brasil"));
//console.log(frase.toUpperCase()); deixa td maiusculo

var lista = ["maça", "perâ", "laranja"];
console.log(lista);

//push add elementos a lista
lista.push("uva");
//pop del elementos da lista
lista.pop("laranja");

//length diz a quantidade de itens na lista
console.log(lista.length);

*/