const { calcularTotales } = require('../script.js');

describe('calcularTotales - peso', () => {
  test.each([
    ['iphone 14', 0.5],
    ['macbook pro', 2],
    ['perfume channel', 0.3]
  ])('detecta peso para %s', (keyword, expected) => {
    const { pesoKG } = calcularTotales(100, `http://example.com/${keyword}`);
    expect(pesoKG).toBe(expected);
  });

  test('usa peso por defecto cuando no se reconoce la categoría', () => {
    const { pesoKG } = calcularTotales(100, 'http://example.com/desconocido');
    expect(pesoKG).toBe(1);
  });
});

describe('calcularTotales - totales', () => {
  test('calcula totales para iphone', () => {
    const { precioFinalUSD, precioFinalARS } = calcularTotales(100, 'iphone');
    expect(precioFinalUSD).toBeCloseTo(162);
    expect(precioFinalARS).toBeCloseTo(218700);
  });

  test('calcula totales para producto desconocido', () => {
    const { precioFinalUSD, precioFinalARS } = calcularTotales(200, 'algo');
    expect(precioFinalUSD).toBeCloseTo(324);
    expect(precioFinalARS).toBeCloseTo(437400);
  });
});
