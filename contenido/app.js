document.getElementById('calcular').addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value.trim();
    const edad = document.getElementById('edad').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');
  
    if (!nombre || isNaN(edad) || isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      resultado.textContent = 'Por favor completa todos los campos correctamente.';
      resultado.style.color = 'red';
      return;
    }
  
    const imc = peso / (altura * altura);
    let estado = "";
  
    if (imc < 18.5) estado = "Bajo peso";
    else if (imc < 24.9) estado = "Normal";
    else if (imc < 29.9) estado = "Sobrepeso";
    else estado = "Obesidad";
  
    resultado.style.color = 'black';
    resultado.textContent = `Hola ${nombre}, tu IMC es ${imc.toFixed(2)} (${estado}).`;
  });
  
  document.getElementById('nuevo').addEventListener('click', () => {
    document.getElementById('nombre').value = '';
    document.getElementById('edad').value = '';
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('resultado').textContent = '';
  });