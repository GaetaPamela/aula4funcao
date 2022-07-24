//1 - crie uma função que exiba uma mensagem no console
function mensagem(){
console.log("Mostrando a mensagem");
}

mensagem()
//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function recebeNome(nome){
    console.log(nome)
}
recebeNome("Pamela");

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function sobre (nome, idade, estiloMusical){
    console.log(nome,idade,estiloMusical)
}
sobre("Pamela", "30", "Sertanejo");

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function entretenimento (filme, musica){
console.log(filme,musica);
}
entretenimento("Homem Aranha", "JorgeeMatheus");

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function triplo(numero){
    return numero *3
}
var resultado = triplo(4);
console.log(resultado);