function calcularPrecio() {
  const categoria = document.getElementById("categorySelect").value;
  const usdProducto = parseFloat(document.getElementById("usdInput").value);
  const resultadoDiv = document.getElementById("resultado");
  const linkBtn = document.getElementById("whatsappLink");

  if (!categoria || isNaN(usdProducto) || usdProducto <= 0) {
    resultadoDiv.innerHTML = "Por favor completá todos los campos.";
    linkBtn.style.display = "none";
    return;
  }

  // Tabla de categorías con peso estimado y costos por kg
  const datos = {
    reloj:       { min: 0.5, max: 1,   tipo: "general" },
    zapatilla:   { min: 0.8, max: 1,   tipo: "general" },
    remera:      { min: 0.2, max: 0.5, tipo: "general" },
    pantalon:    { min: 0.6, max: 1.5, tipo: "general" },
    computadora: { min: 1.5, max: 3,   tipo: "general" },
    auricular:   { min: 0.2, max: 0.5, tipo: "general" },
    consola:     { min: 1.5, max: 3,   tipo: "general" },
    otro:        { min: 1,   max: 10,  tipo: "general" },
    celular:     { min: 0.5, max: 1,   tipo: "celular" }
  };

  const item = datos[categoria];

  if (!item) {
    resultadoDiv.innerHTML = "Categoría no válida.";
    linkBtn.style.display = "none";
    return;
  }

  const costoBase = item.tipo === "celular" ? 70 : 40;
  const precioClientePorKg = costoBase + 50;

  const estimadoMin = Math.round((item.min * precioClientePorKg + usdProducto) * 1.2);
  const estimadoMax = Math.round((item.max * precioClientePorKg + usdProducto) * 1.2);

  const texto = `💡 Estimación: entre $${estimadoMin} y $${estimadoMax} USD (producto + envío + margen).`;
  resultadoDiv.innerHTML = texto;

  const mensaje = encodeURIComponent(
    `Hola! Quiero importar un producto de la categoría "${categoria}" que cuesta $${usdProducto} USD.\n\n¿Podrían cotizarlo con más detalle?\nVisto en Volaio.`
  );

  linkBtn.href = `https://wa.me/5491126310568?text=${mensaje}`;
  linkBtn.style.display = "inline-block";
}

function scrollToElement(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
