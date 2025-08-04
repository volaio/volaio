async function obtenerDolarBlue() {
  try {
    const res = await fetch("https://api.bluelytics.com.ar/v2/latest");
    const data = await res.json();
    return data.blue.value_sell;
  } catch (error) {
    alert("Error al obtener el dólar blue. Se usará un valor de referencia.");
    return 1350; // valor de respaldo
  }
}

async function calcularCosto() {
  const link = document.getElementById("productLink").value;
  const precioUSD = parseFloat(document.getElementById("priceUSD").value);
  const peso = parseFloat(document.getElementById("weightKG").value);

  if (!link || !precioUSD || !peso || peso < 1) {
    alert("Completá todos los campos. Mínimo 1 kg por producto.");
    return;
  }

  const dolarBlue = await obtenerDolarBlue();

  const precioPorKg = 70;
  const totalUSD = precioUSD + (peso * precioPorKg);
  const totalUSDMax = totalUSD * 1.2;

  const totalARS = totalUSD * dolarBlue;
  const totalARSMax = totalUSDMax * dolarBlue;

  document.getElementById("minUSD").textContent = totalUSD.toFixed(2);
  document.getElementById("maxUSD").textContent = totalUSDMax.toFixed(2);
  document.getElementById("minARS").textContent = totalARS.toLocaleString("es-AR", { style: "currency", currency: "ARS" });
  document.getElementById("maxARS").textContent = totalARSMax.toLocaleString("es-AR", { style: "currency", currency: "ARS" });

  const mensaje = `Hola Volaio, quiero avanzar con esta cotización:\n\nLink del producto: ${link}\nPrecio USD: ${precioUSD}\nPeso (kg): ${peso}\n\nGracias.`;

  const url = `https://wa.me/5491126310568?text=${encodeURIComponent(mensaje)}`;
  document.getElementById("whatsappBtn").href = url;

  document.getElementById("resultado").classList.remove("oculto");
}
