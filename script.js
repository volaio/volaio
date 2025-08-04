function calcularPrecio() {
  const precioUSD = parseFloat(document.getElementById('usdInput').value);
  const link = document.getElementById('linkInput').value;

  if (isNaN(precioUSD) || !link) {
    document.getElementById('resultado').innerText = "Completá correctamente el precio y el link del producto.";
    return;
  }

  const categorias = [
    { palabra: "iphone", peso: 0.5 },
    { palabra: "macbook", peso: 2 },
    { palabra: "notebook", peso: 2 },
    { palabra: "zapatilla", peso: 1 },
    { palabra: "perfume", peso: 0.3 },
    { palabra: "auricular", peso: 0.4 },
    { palabra: "tablet", peso: 0.6 },
    { palabra: "cámara", peso: 0.9 },
    { palabra: "reloj", peso: 0.25 },
    { palabra: "usb", peso: 0.1 }
  ];

  const linkLower = link.toLowerCase();
  let pesoKG = 1; // Default si no encuentra categoría

  for (let cat of categorias) {
    if (linkLower.includes(cat.palabra)) {
      pesoKG = cat.peso;
      break;
    }
  }

  const costoPorKilo = 40;
  const margen = 1.35;
  const dolarBlue = 1350;

  const costoBase = precioUSD + (pesoKG * costoPorKilo);
  const precioFinalUSD = costoBase * margen;
  const precioFinalARS = precioFinalUSD * dolarBlue;

  const finalUSD = precioFinalUSD.toFixed(2);
  const finalARS = precioFinalARS.toLocaleString();

  const mensaje = `Hola, quiero hacer una importación con Volaio. El producto cuesta $${precioUSD} USD, se estimó un peso de ${pesoKG} kg y el precio final estimado es $${finalUSD} USD / $${finalARS} ARS. Link: ${link}`;
  const linkWhatsApp = `https://wa.me/5491126310568?text=${encodeURIComponent(mensaje)}`;

  document.getElementById('resultado').innerText =
    `Peso estimado: ${pesoKG} kg\nPrecio estimado: $${finalUSD} USD / $${finalARS} ARS`;

  document.getElementById('whatsappLink').href = linkWhatsApp;
}
document.addEventListener("DOMContentLoaded", () => {
  const fadeIns = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = "0s";
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  fadeIns.forEach((el) => observer.observe(el));
});
