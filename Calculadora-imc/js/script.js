function calcular() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let imc = "";

    let soma = peso / (altura * altura);

    if (soma <= 18.4) {

        imc = "Desnutrição"

    } else {

        if (soma >= 18.5 && soma <= 24.99) {

            imc = "Normal"

        } else {

            if (soma >= 25 && soma <= 29.99) {

                imc = "Pré-Obesidade"

            } else {

                if (soma >= 30 && soma <= 34.99) {

                    imc = "Obesidade 1"

                } else {

                    if (soma >= 35 && soma <= 39.99) {

                        imc = "Obesidade 2"

                    } else {

                        imc = "Obesidade 3"

                    }
                }
            }
        }
    }
    document.getElementById("imc").value = imc;
}
function limpar() {
    location.reload();

}
function menu() {
    window.location.assign("file:///C:/Users/Leonidas/Desktop/Dev/projetos-js/calculadoras-js/Menu/index.html")
}