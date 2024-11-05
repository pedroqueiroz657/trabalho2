document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const altura = document.getElementById('altura').value.trim();
    const peso = document.getElementById('peso').value.trim();
    const message = document.getElementById('message');
    const resultadoIMC = document.getElementById('resultadoIMC');
  
    // Resetar mensagens de erro e resultado IMC
    message.textContent = '';
    resultadoIMC.textContent = '';
    resultadoIMC.style.color = '';
  
    // Validação da altura
    if (!altura || isNaN(altura) || altura <= 0 || altura > 250) {
      message.textContent = 'Por favor, insira uma altura válida entre 1 e 250 cm.';
      return;
    }
  
    // Validação do peso
    if (!peso || isNaN(peso) || peso <= 0 || peso > 500) {
      message.textContent = 'Por favor, insira um peso válido entre 1 e 500 kg.';
      return;
    }
  
    // Calcular o IMC
    const alturaEmMetros = altura / 100;
    const imc = (peso / (alturaEmMetros ** 2)).toFixed(2);
  
    // Exibir o resultado
    message.style.color = 'green';
    message.textContent = 'Valores válidos!';
    resultadoIMC.style.color = 'blue';
    resultadoIMC.textContent = `Seu IMC é: ${imc}`;
  
    // Classificação do IMC
    if (imc < 18.5) {
      resultadoIMC.textContent += " (Abaixo do peso)";
    } else if (imc < 24.9) {
      resultadoIMC.textContent += " (Peso normal)";
    } else if (imc < 29.9) {
      resultadoIMC.textContent += " (Sobrepeso)";
    } else {
      resultadoIMC.textContent += " (Obesidade)";
    }
  });
  