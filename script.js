const categorias = {
  reloj:       { pesoMin: 0.5, pesoMax: 1.0, costoReal: 40 },
  zapatilla:   { pesoMin: 0.8, pesoMax: 1.0, costoReal: 40 },
  remera:      { pesoMin: 0.3, pesoMax: 1.0, costoReal: 40 },
  pantalon:    { pesoMin: 0.5, pesoMax: 2.0, costoReal: 40 },
  computadora: { pesoMin: 2.0, pesoMax: 2.0, costoReal: 40 },
  auricular:   { pesoMin: 0.1, pesoMax: 0.5, costoReal: 40 },
  consola:     { pesoMin: 3.5, pesoMax: 3.5, costoReal: 40 },
  otro:        { pesoMin: 1.0, pesoMax: 10.0, costoReal: 40 },
  celular:     { pesoMin: 0.5, pesoMax: 0.5, costoReal: 70 },
};

function calcularPrecio() {
  const categoria = document.getElementById('categorySelect').value;
  const precioProducto = parseFloat(document.getElementById('usdInput').value);
  const resultado = document.getElementById('resultado');
  const whatsappLink = document.getElementById('whatsappLink');

  if (!categoria || isNaN(precioProducto)) {
    resultado.innerHTML = '<p>Completá todos los campos.</p>';
    whatsappLink.href = "#";
    return;
  }

  const datos = categorias[categoria];
  const pesoEstimado = (datos.pesoMin + datos.pesoMax) / 2;
  const precioPorKgAlCliente = datos.costoReal + 50;
  const costoEnvio = pesoEstimado * precioPorKgAlCliente;

  const precioFinalUSD = precioProducto + costoEnvio;

  resultado.innerHTML = `<p>¡Listo! Hacé clic en el botón para avanzar con tu pedido.</p>`;

  const mensaje = `Hola! Quiero importar un producto (${categoria.toUpperCase()}) con un precio estimado de ${precioFinalUSD.toFixed(2)} USD. ¿Cómo seguimos?`;
  const url = `https://wa.me/5491126310568?text=${encodeURIComponent(mensaje)}`;
  whatsappLink.href = url;
}

function scrollToElement(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
