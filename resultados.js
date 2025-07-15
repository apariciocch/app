// Module to calculate scores for the test
// `respuestas` should be an object with item numbers as keys and 0-2 values

const AREAS = ['T', 'C', 'A', 'S', 'E', 'O'];

// Items for INTERESES POR ACTIVIDADES (1-72)
const ACTIVIDADES = {
  T: [1,7,13,19,25,31,37,43,49,55,61,67],
  C: [2,8,14,20,26,32,38,44,50,56,62,68],
  A: [3,9,15,21,27,33,39,45,51,57,63,69],
  S: [4,10,16,22,28,34,40,46,52,58,64,70],
  E: [5,11,17,23,29,35,41,47,53,59,65,71],
  O: [6,12,18,24,30,36,42,48,54,60,66,72]
};

// Items for INTERESES POR PROFESIONES (73-108)
const PROFESIONES = {
  T: [73,79,85,91,97,103],
  C: [74,80,86,92,98,104],
  A: [75,81,87,93,99,105],
  S: [76,82,88,94,100,106],
  E: [77,83,89,95,101,107],
  O: [78,84,90,96,102,108]
};

// Items for HABILIDADES Y DESTREZAS (109-162)
const HABILIDADES = {
  T: [109,115,127,133,139,145,151,157],
  C: [110,116,122,128,134,140,146,152],
  A: [111,117,123,129,135,141,147,153,159],
  S: [112,118,124,130,136,142,148,154,160],
  E: [113,119,125,131,137,143,149,155,161],
  O: [114,120,126,132,138,144,150,156,162]
};

const MAX_HABILIDADES = { T: 16, C: 16, A: 18, S: 18, E: 18, O: 18 };

function sumar(respuestas, items) {
  return items.reduce((acc, it) => acc + (respuestas[it] || 0), 0);
}

export function calcularResultados(respuestas) {
  const resultados = {};
  for (const area of AREAS) {
    const act = sumar(respuestas, ACTIVIDADES[area]);
    const prof = sumar(respuestas, PROFESIONES[area]);
    const hab = sumar(respuestas, HABILIDADES[area]);

    resultados[area] = {
      actividades: +(act / 24 * 10).toFixed(2),
      profesiones: +(prof / 12 * 10).toFixed(2),
      habilidades: +(hab / MAX_HABILIDADES[area] * 10).toFixed(2)
    };
  }
  return resultados;
}

export function interpretar(valor) {
  if (valor <= 2) return 'Muy Bajo';
  if (valor <= 4) return 'Bajo';
  if (valor <= 6) return 'Medio';
  if (valor <= 8) return 'Alto';
  return 'Muy Alto';
}

export function crearTabla(resultados) {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  thead.innerHTML = '<tr><th>Área</th><th>Actividades</th><th>Profesiones</th><th>Habilidades</th></tr>';
  table.appendChild(thead);
  const tbody = document.createElement('tbody');

  for (const area of AREAS) {
    const r = resultados[area];
    const tr = document.createElement('tr');
    const icon = (v) => (v > 6 ? ' ⭐' : '');
    tr.innerHTML = `<td>${area}</td>` +
      `<td>${r.actividades} (${interpretar(r.actividades)})${icon(r.actividades)}</td>` +
      `<td>${r.profesiones} (${interpretar(r.profesiones)})${icon(r.profesiones)}</td>` +
      `<td>${r.habilidades} (${interpretar(r.habilidades)})${icon(r.habilidades)}</td>`;
    tbody.appendChild(tr);
  }

  table.appendChild(tbody);
  return table;
}
