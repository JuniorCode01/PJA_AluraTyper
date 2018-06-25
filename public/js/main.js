var frase = $(".frase").text(); //obtem do DOM um objeto com a classe frase e obtendo o valor de texto atribuindo para uma variável
var contadorPalavras = frase.split(" ").length; //uma variável recebe o resultado que pega cada palavra e separa pelos espaços, joga em um array e obtem o seu tamanho.

var contadorAtual = $("#tamanho-frase"); //assim que é feito a contagem, obtem um objeto do DOM com o id cont,
contadorAtual.text(contadorPalavras); //substituindo seu valor de texto para o número de palavras contadas.


var campo = $(".campo-digitacao"); //obtendo o conteúdo de dento do text area através do evento de input
campo.on("input", function() {
    conteudo = campo.val();
    console.log(conteudo);
    
    //Depois que o browser reconhece o evento de input, obtemos o valor do seu conteúdo,
    //assim com a função split podemos usar expressão regular que remove os espaços
    var qtdPalavras = conteudo.split(/\S+/).length - 1;
    $("#contador-palavras").text(qtdPalavras);

    //O mesmo é feito com a quantidade de caracteres
    var qtdCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdCaracteres);
})

//mensagens do console
console.groupCollapsed('Mensagens de Teste');
console.log(contadorPalavras);
console.groupEnd();
