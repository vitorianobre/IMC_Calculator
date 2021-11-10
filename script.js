var result = document.getElementById("resultado");

const btn = document.querySelector('.botao');

btn.addEventListener("click", (e) => {
    var peso = document.getElementById('peso');
    var altura = document.getElementById('altura');

    if (peso.value !== '' && altura.value !== ''){
        var alturaQuadrado = (altura.value * altura.value);
        var imc = parseFloat(peso.value / alturaQuadrado).toFixed(2);

        var saude;

        if (imc<18.5)
            saude = 'Abaixo do peso';
        else if (imc>=18.5 & imc<=24.9)
            saude = 'Peso normal'
        else if (imc>=25 & imc<=29.9)
            saude = 'Sobrepeso'
        else if (imc>=30 & imc<=34.9)
            saude = 'Obesidade Grau I'
        else if (imc>=35 & imc<=39.9)
            saude = 'Obesidade Grau II'
        else if (imc>=40)
            saude = 'Obesidade Grau III ou Morbida'
        
        result.innerHTML = '<p>IMC: '+imc+'</p>'+'<p><br>'+saude+'</p';
    } else {
        result.innerHTML = 'Preencha todos os campos!';
    }
});