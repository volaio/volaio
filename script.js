function calcularPrecio() {
  const precioUSD = parseFloat(document.getElementById('usdInput').value);
  const categoria = document.getElementById('categorySelect').value;

  if (isNaN(precioUSD)) {
    document.getElementById('resultado').innerText = "Ingresá un precio válido.";
    return;
  }

  // Margen aproximado por categoría
  const margenes = {
    apple: 1.35,
    zapatillas: 1.45,
    perfumes: 1.4,
    electronica: 1.5,
    otro: 1.5,
  };

  const dolarBlue = 1350; // Cambialo si querés
  const margen = margenes[categoria] || 1.5;
  const finalUSD = precioUSD * margen;
  const finalARS = finalUSD * dolarBlue;

  document.getElementById('resultado').innerText =
    `Precio final estimado: $${finalUSD.toFixed(2)} USD / $${finalARS.toLocaleString()} ARS`;
}
