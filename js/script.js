function start() {
    var buttonCalculateImc = document.querySelector('#button-calculate-imc');
    buttonCalculateImc.addEventListener('click', handleButtonClick);
}

function calculateImc(weight, height) {
    return weight / height**2;
}

function handleButtonClick() {
    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');
    var imcResult = document.querySelector('#imc-result');
    var faixaDePesoResult = document.querySelector('#faixa-de-peso-result');

    var weight = Number(inputWeight.value);
    var height = Number(inputHeight.value)

    var imc = calculateImc(weight, height);
    var faixaDePeso = informaFaixaDePeso(weight, height)
    imc = imc.toFixed(2)

    imcResult.textContent = imc;
    faixaDePesoResult.textContent = faixaDePeso;
}

function informaFaixaDePeso(weight, height) {
    imc = calculateImc(weight, height);
    if(imc >= 16 && imc < 17) {
        return "muito abaixo do peso"
    } else if (imc >= 17 && imc < 18.5){
        return "abaixo do peso"
    } else if (imc >= 18.5 && imc < 25){
        return "peso Normal"
    } else if (imc >= 25 && imc < 30.0){
        return "acima do peso"
    } else if (imc >= 30 && imc < 35){
        return "obesidade grau I"
    } else if (imc >= 35 && imc < 40){
        return "obesidade grau II"
    } else if (imc >= 40) {
        return "obesidade grau III"
    } else {
        return "inválido"
    }
}

start();