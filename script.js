function scrollToElement(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function calcularPrecio() {
  const categoria = document.getElementById("categorySelect").value;
  const precioProducto = parseFloat(document.getElementById("usdInput").value);
  const resultado = document.getElementById("resultado");
  const whatsappLink = document.getElementById("whatsappLink");

  if (!categoria || isNaN(precioProducto)) {
    resultado.textContent = "Por favor, completá todos los campos.";
    return;
  }

  const dolarBlue = 1200; // Valor manual del dólar blue

  const categorias = {
    reloj: { minKg: 0.5, maxKg: 1.0, usdKg: 90 },
    zapatilla: { minKg: 0.8, maxKg: 1.0, usdKg: 90 },
    remera: { minKg: 0.3, maxKg: 1.0, usdKg: 90 },
    pantalon: { minKg: 0.5, maxKg: 2.0, usdKg: 90 },
    computadora: { minKg: 2.0, maxKg: 2.0, usdKg: 90 },
    auricular: { minKg: 0.1, maxKg: 0.5, usdKg: 90 },
    consola: { minKg: 3.5, maxKg: 3.5, usdKg: 90 },
    otro: { minKg: 1.0, maxKg: 10.0, usdKg: 90 },
    celular: { minKg: 0.5, maxKg: 0.5, usdKg: 130 }
  };

  const cat = categorias[categoria];

  const minCosto = (cat.minKg * cat.usdKg) + precioProducto;
  const maxCosto = (cat.maxKg * cat.usdKg) + precioProducto;

  const minARS = Math.round(minCosto * dolarBlue);
  const maxARS = Math.round(maxCosto * dolarBlue);

  resultado.innerHTML = `
    <p><strong>Estimación en USD:</strong> $${minCosto.toFixed(2)} - $${maxCosto.toFixed(2)}</p>
    <p><strong>Estimación en pesos (ARS):</strong> $${minARS.toLocaleString()} - $${maxARS.toLocaleString()}</p>
  `;

  const mensaje = encodeURIComponent(
    `Hola, quiero encargar un producto:\n- Categoría: ${categoria}\n- Precio estimado: $${minCosto.toFixed(2)} a $${maxCosto.toFixed(2)} USD\n- Estimado en pesos: $${minARS.toLocaleString()} a $${maxARS.toLocaleString()}`
  );

  whatsappLink.href = `https://wa.me/5491126310568?text=${mensaje}`;
}
