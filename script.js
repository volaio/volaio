function calcularPrecio() {
  const precioUSD = parseFloat(document.getElementById('usdInput').value);
  const pesoKG = parseFloat(document.getElementById('pesoInput').value);
  const link = document.getElementById('linkInput').value;

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

  const finalUSD = precioFinalUSD.toFixed(2);
  const finalARS = precioFinalARS.toLocaleString();

  const mensaje = `Hola, quiero hacer una importación con Volaio. El producto cuesta $${precioUSD} USD, pesa ${pesoKG} kg y el precio final estimado es $${finalUSD} USD / $${finalARS} ARS. Link: ${link}`;
  const linkWhatsApp = `https://wa.me/5491126310568?text=${encodeURIComponent(mensaje)}`;

  document.getElementById('resultado').innerText =
    `Precio estimado: $${finalUSD} USD / $${finalARS} ARS`;

  document.getElementById('whatsappLink').href = linkWhatsApp;
}
