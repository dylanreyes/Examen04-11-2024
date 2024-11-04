function calcular() {
    const dni = document.getElementById('dni').value;
    // Enviar el DNI al servidor usando fetch o XMLHttpRequest
    fetch('/calcular', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ dni })
    })
    .then(response => response.json())
    .then(data => {
    document.getElementById('resultado').textContent = data.resultado;
    });
}