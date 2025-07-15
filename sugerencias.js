const resultadosPerfil = {
    T: 3.3,
    C: 7.1,
    A: 5.0,
    S: 9.8,
    E: 4.2,
    O: 2.5
};

function clasificarNivel(puntaje) {
    if (puntaje <= 2) return "Muy bajo";
    if (puntaje <= 4) return "Bajo";
    if (puntaje <= 6) return "Medio";
    if (puntaje <= 8) return "Alto";
    return "Muy alto";
}

const sugerenciasPorNivel = {
    T: {
        "Muy alto": ["Técnico electricista", "Mecánico industrial", "Instalador solar"],
        "Alto": ["Carpintero", "Soldador", "Técnico electrónico"],
        "Medio": ["Electricista", "Técnico en refrigeración"],
        "Bajo": ["Ayudante de mantenimiento"],
        "Muy bajo": []
    },
    C: {
        "Muy alto": ["Investigador biomédico", "Ingeniero en nanotecnología", "Físico teórico"],
        "Alto": ["Ingeniero químico", "Bioinformático", "Matemático"],
        "Medio": ["Técnico de laboratorio", "Auxiliar de investigación"],
        "Bajo": ["Pasante de ciencias básicas"],
        "Muy bajo": []
    },
    A: {
        "Muy alto": ["Diseñador gráfico", "Ilustrador", "Director de arte"],
        "Alto": ["Escenógrafo", "Músico profesional", "Editor de video"],
        "Medio": ["Asistente de diseño", "Dibujante técnico"],
        "Bajo": ["Ayudante de producción audiovisual"],
        "Muy bajo": []
    },
    S: {
        "Muy alto": ["Psicólogo clínico", "Médico", "Educador social"],
        "Alto": ["Enfermero", "Logopeda", "Orientador educativo"],
        "Medio": ["Técnico en salud mental", "Asistente social"],
        "Bajo": ["Voluntario asistencial"],
        "Muy bajo": []
    },
    E: {
        "Muy alto": ["Emprendedor", "Director comercial", "Líder de ventas"],
        "Alto": ["Administrador de empresas", "Coordinador de ventas"],
        "Medio": ["Teleoperador", "Asistente de marketing"],
        "Bajo": ["Promotor de ventas"],
        "Muy bajo": []
    },
    O: {
        "Muy alto": ["Project manager", "Analista administrativo", "Gestor de procesos"],
        "Alto": ["Contador", "Secretario ejecutivo", "Jefe de oficina"],
        "Medio": ["Asistente contable", "Digitador"],
        "Bajo": ["Auxiliar de oficina"],
        "Muy bajo": []
    }
};

const etiquetas = {
    T: "Técnico-manual",
    C: "Científico-investigador",
    A: "Artístico-creativo",
    S: "Social-asistencial",
    E: "Empresarial-persuasivo",
    O: "Oficina-administración"
};

function mostrarSugerencias() {
    const cont = document.getElementById("sugerencias");
    if (!cont) return;
    cont.innerHTML = "";
    for (const area in resultadosPerfil) {
        const puntaje = resultadosPerfil[area];
        const nivel = clasificarNivel(puntaje);
        const profesiones = (sugerenciasPorNivel[area] && sugerenciasPorNivel[area][nivel]) || [];
        const div = document.createElement("div");
        let html = `<h3>${etiquetas[area] || area} - Puntaje: ${puntaje} (${nivel})</h3>`;
        if (profesiones.length) {
        html += "<ul>" + profesiones.map(p => `<li>${p}</li>`).join("") + "</ul>";
        } else {
        html += "<p>Sin sugerencias.</p>";
        }
        div.innerHTML = html;
        cont.appendChild(div);
    }
}

document.addEventListener("DOMContentLoaded", mostrarSugerencias);
