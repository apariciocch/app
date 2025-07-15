document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('descargar-informe');
    if (!btn) return;
    btn.addEventListener('click', generarInforme);
});

function generarInforme() {
    if (typeof calcularResultados === 'function') {
        calcularResultados();
    }
    const form = document.getElementById('info-form');
    const fd = new FormData(form);

    function formatearFecha(f) {
        if (!f) return '';
        const d = new Date(f);
        const dia = String(d.getDate()).padStart(2, '0');
        const mes = String(d.getMonth() + 1).padStart(2, '0');
        const anio = d.getFullYear();
        return `${dia}/${mes}/${anio}`;
    }

    const mapEstudios = { sin: 'Sin estudios', primarios: 'Primarios', secundarios: 'Secundarios', superiores: 'Superiores' };
    const mapSituacion = { hogar: 'Labores del hogar', ocupado: 'Ocupado', parado: 'Parado', estudiante: 'Estudiante', otros: 'Otros' };

    const nombre = fd.get('nombre') || '';
    const centro = fd.get('centro') || '';
    const fecha = formatearFecha(fd.get('fecha'));
    const dni = fd.get('dni') || '';
    const edad = fd.get('edad') || '';
    const sexo = fd.get('sexo') === 'mujer' ? 'Mujer' : (fd.get('sexo') === 'varon' ? 'Varón' : '');

    let datos = '';
    if (nombre) datos += `<p><strong>Nombre completo:</strong> ${nombre}</p>`;
    if (centro) datos += `<p><strong>Centro/ grupo:</strong> ${centro}</p>`;
    if (fecha) datos += `<p><strong>Fecha:</strong> ${fecha}</p>`;
    if (dni) datos += `<p><strong>DNI:</strong> ${dni}</p>`;
    if (edad) datos += `<p><strong>Edad:</strong> ${edad}</p>`;
    if (sexo) datos += `<p><strong>Sexo:</strong> ${sexo}</p>`;

    const edadNum = parseInt(edad, 10);
    if (!isNaN(edadNum)) {
        if (edadNum < 18) {
            const padre = mapEstudios[fd.get('padre')] || '';
            const madre = mapEstudios[fd.get('madre')] || '';
            if (padre) datos += `<p><strong>Nivel de estudios del padre:</strong> ${padre}</p>`;
            if (madre) datos += `<p><strong>Nivel de estudios de la madre:</strong> ${madre}</p>`;
        } else {
            const situacion = mapSituacion[fd.get('situacion')] || '';
            const estudios = mapEstudios[fd.get('estudios')] || '';
            if (situacion) datos += `<p><strong>Situación laboral:</strong> ${situacion}</p>`;
            if (estudios) datos += `<p><strong>Nivel de estudios:</strong> ${estudios}</p>`;
        }
    }

    const profesiones = [];
    for (let i = 1; i <= 5; i++) {
        const p = (fd.get(`profesion${i}`) || '').trim();
        if (p) profesiones.push(p);
    }
    if (profesiones.length) {
        datos += '<p><strong>Profesiones de interés:</strong></p>' +
            '<ol>' + profesiones.map(p => `<li>${p}</li>`).join('') + '</ol>';
    }

    const charMap = {};
    document.querySelectorAll('#caracteristicas-tabla tbody tr').forEach(r => {
        const area = r.cells[0].textContent.trim();
        const val = r.querySelector('.puntaje-c').textContent.trim();
        charMap[area] = val;
    });

    let tabla = `<table border="1" style="border-collapse:collapse;">` +
        `<tr><th>Área</th><th>Interés Actividades</th><th>Interés Profesiones` +
        `</th><th>Habilidades</th><th>Características personales</th><th>Interpretación</th></tr>`;

    const totales = [];
    document.querySelectorAll('#resultado-tabla tbody tr').forEach(r => {
        const area = r.cells[0].textContent.trim();
        const ia = r.querySelector('.puntaje-i').textContent.trim();
        const ip = r.querySelector('.puntaje-h').textContent.trim();
        const total = r.querySelector('.total').textContent.trim();
        const interp = r.querySelector('.coincidencia').textContent.trim();
        const carac = charMap[area] || '';
        tabla += `<tr><td>${area}</td><td>${ia}</td><td>${ip}</td><td>${total}</td><td>${carac}</td><td>${interp}</td></tr>`;
        totales.push({area, total: parseInt(total) || 0});
    });
    tabla += '</table>';

    totales.sort((a,b)=>b.total-a.total);
    const principal = totales[0] ? totales[0].area : '';
    const secundarias = totales.slice(1,3).map(t=>t.area).join(', ');
    const menor = totales[totales.length-1] ? totales[totales.length-1].area : '';

    const sugerenciasHTML = document.getElementById('sugerencias')?.innerHTML || '';

    const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body>` +
    `<h1>Informe Vocacional</h1>` +
    `<h2>1. Datos de Identificación</h2>` + datos +
    `<h2>2. Motivo de la Evaluación</h2>` +
    `<p>El presente informe tiene como finalidad explorar los intereses vocacionales, las habilidades percibidas y las características personales del evaluado, con el objetivo de brindar una orientación profesional que le permita tomar decisiones informadas sobre su futuro académico y laboral.</p>` +
    `<h2>3. Instrumento Aplicado</h2>` +
    `<p>Componentes evaluados:</p><ul><li>Intereses por actividades</li><li>Intereses por profesiones</li><li>Habilidades y destrezas</li><li>Características personales</li></ul>` +
    `<h2>4. Resultados Obtenidos</h2>` +
    `<h3>4.1. Perfil Vocacional por Área</h3>` + tabla +
    `<p>Nota: Cada dimensión fue escalada a una puntuación de 0 a 10, siguiendo las normas del instrumento EXPLORA.</p>` +
    `<h3>4.2. Áreas con mayor afinidad</h3>` +
    `<p>Área principal: ${principal}</p>` +
    `<p>Áreas secundarias: ${secundarias}</p>` +
    `<p>Áreas con menor afinidad: ${menor}</p>` +
    `<h2>5. Análisis e Interpretación Profesional</h2>` +
    `<p>El perfil obtenido sugiere una clara orientación hacia el área social-asistencial, con puntajes elevados tanto en intereses como en habilidades, lo que indica una fuerte motivación y autopercepción de competencia en profesiones vinculadas al apoyo humano. Las características personales destacan la empatía, la responsabilidad y el gusto por la colaboración. Se recomienda explorar carreras como psicología, trabajo social o educación.</p>` +
    `<h2>6. Sugerencias de Carreras Profesionales (según afinidad)</h2>` +
    sugerenciasHTML +
    `<h2>7. Conclusiones Generales</h2>` +
    `<p>El evaluado muestra un perfil vocacional congruente con sus características personales, intereses y habilidades percibidas. Se recomienda fortalecer su autoexploración a través de actividades, talleres o pasantías, así como buscar orientación adicional si persisten dudas vocacionales.</p>` +
    `<h2>8. Recomendaciones</h2>` +
    `<p></p>` +
    `</body></html>`;

    const blob = new Blob(['\ufeff', html], {type: 'application/msword'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    let fileName = 'informe.doc';
    const safeName = nombre.replace(/[\\/:*?"<>|]/g, '').trim();
    if (safeName) fileName = `${safeName}.doc`;
    a.download = fileName;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}

