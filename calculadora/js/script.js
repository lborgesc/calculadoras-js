
function calcular() {
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    let operacao = document.getElementById("operacao").value;
    let resultado = "";


    if (operacao == "somar") {
        resultado = numero1 + numero2;
    } else {
        if (operacao == "subtrair") {
            resultado = numero1 - numero2;
        } else {
            if (operacao == "multiplicar") {
                resultado = numero1 * numero2;
            } else {
                resultado = numero1 / numero2;
            }
        }
    }

    document.getElementById("resultado").value = resultado;
}

function limpar() {
    location.reload();

}
function menu() {
    window.location.assign("file:///C:/Users/Leonidas/Desktop/Dev/projetos-js/calculadoras-js/Menu/index.html")
}