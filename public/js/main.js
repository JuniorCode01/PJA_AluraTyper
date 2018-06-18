var frase = $(".frase").text();
var contadorPalavras = frase.split(" ").length;

var contadorAtual = $("#cont");
contadorAtual.text(contadorPalavras);
