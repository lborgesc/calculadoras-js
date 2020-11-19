function mostrar() {
    let numero = parseInt(document.getElementById("numero").value);
    let resultado = "";

    if (numero % 2 == 0) {

        resultado = "Par";

    } else {

        resultado = "Ímpar";
    }

    document.getElementById("resultado").value = resultado;
}
function limpar() {
    location.reload();

}
function menu() {
    window.location.assign("file:///C:/Users/Leonidas/Desktop/Dev/projetos-js/calculadoras-js/Menu/index.html")
}