function calcular() {
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;

  const resultado = document.getElementById("resultado");

  if (nome !== "" && altura !== "" && peso !== "") {
    const somaIMC = (peso / (altura * altura)).toFixed(1);

    let classificacao = "";

    if (somaIMC < 18.5) {
      classificacao = "abaixo do peso";
    } else if (somaIMC < 25) {
      classificacao = "com o peso ideal. Parabéns!";
    } else if (somaIMC < 30) {
      classificacao = "levemente acima do peso.";
    } else if (somaIMC < 35) {
      classificacao = "com  obseidade grau 1";
    } else if (somaIMC < 40) {
      classificacao = "com obesidade grau 2 ";
    } else {
      classificacao = "com obesidade grau 3. CUIDADO!!";
    }

    resultado.innerHTML = `${nome}, seu IMC é ${somaIMC} e você esta ${classificacao}`;
  } else {
    resultado.innerHTML = "Preencha todos os campos!";
  }
}
