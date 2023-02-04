function form() {
  const form = document.querySelector('#form');

  function calcularImc(peso, altura) {
    return peso / (altura * altura);
  }

  function submitForm(event) {
    event.preventDefault();

    let peso = document.querySelector('#peso').value;
    let altura = document.querySelector('#altura').value;
    let calculoImc = calcularImc(peso, altura).toFixed(2);
    let mensagem = document.querySelector('#resultado');

    if (peso.includes(',') || altura.includes(',')) {
      peso = Number(peso.replace(',', '.'));
      altura = Number(altura.replace(',', '.'));
    } else {
      peso = Number(peso);
      altura = Number(altura);
    }

    if (!peso || peso <= 0 || peso >= 300) {
      mensagem.innerHTML = 'Peso invalido';
      return;
    }

    if (!altura || altura <= 0 || altura >= 300) {
      mensagem.innerHTML = 'Altura invalida';
      return;
    }

    if (calculoImc < 18.5) {
      mensagem.innerHTML = `<p class='red'>Seu IMC é ${calculoImc} (Abaixo do peso)</p>`;
    } else if (calculoImc >= 18.5 && calculoImc < 24.9) {
      mensagem.innerHTML = `<p class='blue'>Seu IMC é ${calculoImc} (Peso normal)</p>`;
    } else if (calculoImc >= 24.9 && calculoImc < 29.9) {
      mensagem.innerHTML = `<p class='yellow'>Seu IMC é ${calculoImc} (Sobrepeso)</p>`;
    } else if (calculoImc >= 29.9 && calculoImc < 34.9) {
      mensagem.innerHTML = `<p class='red'>Seu IMC é ${calculoImc} (Obesidade grau 1)</p>`;
    } else if (calculoImc >= 34.9 && calculoImc < 39.9) {
      mensagem.innerHTML = `<p class='red'>Seu IMC é ${calculoImc} (Obesidade grau 2)</p>`;
    } else {
      mensagem.innerHTML = `<p class='red'>Seu IMC é ${calculoImc} (Obesidade grau 3)</p>`;
    }
  }

  form.addEventListener('submit', submitForm);
}

form();
