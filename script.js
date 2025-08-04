function calcularPrecio() {
  const precioUSD = parseFloat(document.getElementById('usdInput').value);
  const pesoKG = parseFloat(document.getElementById('pesoInput').value);

  if (isNaN(precioUSD) || isNaN(pesoKG)) {
    document.getElementById('resultado').innerText = "Completá correctamente el precio y el peso.";
    return;
  }

  const costoPorKilo = 40;
  const margen = 1.35;
  const dolarBlue = 1350;

  const costoBase = precioUSD + (pesoKG * costoPorKilo);
  const precioFinalUSD = costoBase * margen;
  const precioFinalARS = precioFinalUSD * dolarBlue;

  document.getElementById('resultado').innerText =
    `Precio estimado: $${precioFinalUSD.toFixed(2)} USD / $${precioFinalARS.toLocaleString()} ARS`;
}
