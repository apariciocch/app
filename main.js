document.addEventListener('DOMContentLoaded', function () {
    const AREAS = ['T', 'C', 'A', 'S', 'E', 'O'];
    const etiquetas = {
        T: 'Técnico-manual',
        C: 'Científico-investigador',
        A: 'Artístico-creativo',
        S: 'Social-asistencial',
        E: 'Empresarial-persuasivo',
        O: 'Oficina-administración'
    };
    const edadInput = document.getElementById('edad');
    const mayorDiv = document.getElementById('adulto');
    const menorDiv = document.getElementById('menor');

    function toggleSections() {
        const edad = parseInt(edadInput.value, 10);
        if (!isNaN(edad)) {
            if (edad >= 18) {
                mayorDiv.classList.remove('hidden');
                menorDiv.classList.add('hidden');
            } else {
                mayorDiv.classList.add('hidden');
                menorDiv.classList.remove('hidden');
            }
        } else {
            mayorDiv.classList.add('hidden');
            menorDiv.classList.add('hidden');
        }
    }

    edadInput.addEventListener('input', toggleSections);
    toggleSections();

    const preguntas = [
        "Trabajar de técnico electricista.",
        "Trabajar en un laboratorio como investigador.",
        "Dibujar y pintar cuadros.",
        "Ayudar a resolver los problemas de otras personas.",
        "Supervisar y dirigir el trabajo de otros.",
        "Trabajar como contable en una empresa.",
        "Conducir un autobús o camión.",
        "Investigar el uso de energía solar.",
        "Trabajar como decorador de interiores.",
        "Trabajar como trabajador social en un ayuntamiento.",
        "Montar y dirigir un negocio propio.",
        "Trabajar de cajero en un banco.",
        "Manejar herramientas eléctricas.",
        "Ser médico-cirujano aplicando técnicas quirúrgicas.",
        "Ser cantante en una orquesta o grupo.",
        "Ser educador de personas con discapacidad psíquica.",
        "Dirigir una empresa.",
        "Ser secretario de un ayuntamiento.",
        "Reparar electrodomésticos.",
        "Ser químico en una empresa farmacéutica.",
        "Tocar en una banda u orquesta.",
        "Ayudar a personas con trastornos psicológicos.",
        "Ser agente de seguros.",
        "Preparar nóminas en una empresa.",
        "Ser técnico de sonido.",
        "Ver documentales científicos.",
        "Diseñar ropa.",
        "Ser maestro en un colegio.",
        "Vender bienes raíces.",
        "Llevar registro de ingresos y gastos.",
        "Conocer cómo funcionan máquinas.",
        "Ser biólogo en un zoológico.",
        "Ser fotógrafo de reportajes.",
        "Elaborar materiales educativos contra la violencia.",
        "Ser responsable de contratación de personal.",
        "Ser secretario de dirección.",
        "Ser guarda forestal.",
        "Inventar equipos técnico-científicos.",
        "Hacer montajes audiovisuales.",
        "Resolver problemas del habla en niños y adultos.",
        "Negociar para obtener beneficios.",
        "Trabajar como administrativo público.",
        "Hacer un curso de mecánica de automóviles.",
        "Ser matemático en estadística.",
        "Diseñador gráfico en publicidad.",
        "Ser maestro de adultos.",
        "Jefe de ventas en concesionario.",
        "Llevar inventario de almacén.",
        "Ser fontanero.",
        "Usar el ordenador para resolver problemas científicos.",
        "Ser locutor de radio.",
        "Ser profesor.",
        "Ser agente comercial.",
        "Trabajar en la recepción de un hotel.",
        "Manejar maquinaria.",
        "Ser ayudante de investigador.",
        "Diseñar anuncios para TV o revistas.",
        "Ser guía-intérprete de personas sordociegas.",
        "Asesorar jurídicamente a una empresa.",
        "Revisar presupuestos de empresa.",
        "Ser ingeniero industrial.",
        "Manejar equipos de laboratorio.",
        "Aprender a tocar un instrumento.",
        "Orientar a personas desempleadas.",
        "Seleccionar proveedores.",
        "Llevar registro de datos por ordenador.",
        "Ser bombero.",
        "Analizar el cambio climático.",
        "Escribir guiones para cine o TV.",
        "Aconsejar a personas.",
        "Aprender estrategias para éxito en los negocios.",
        "Ser administrador de fincas urbanas.",
        "Responsable del mantenimiento de edificios.",
        "Ser analista clínico.",
        "Escribir obras literarias.",
        "Hacer voluntariado en una ONG.",
        "Convencer a la gente para obtener beneficios.",
        "Ser experto en impuestos.",
        "Ser técnico instalador de placas solares.",
        "Investigar cura para el cáncer.",
        "Dibujar cómics.",
        "Ser técnico-orientador de inmigrantes.",
        "Ser abogado.",
        "Ser registrador de la propiedad.",
        "Instalar y reparar teléfonos.",
        "Investigar trastornos mentales.",
        "Diseñador gráfico de videojuegos.",
        "Orientador en secundaria.",
        "Ser gerente o empresario.",
        "Rellenar impresos y formularios.",
        "Arreglar ordenadores.",
        "Ser arqueólogo.",
        "Componer música.",
        "Ser educador en inicial.",
        "Ser economista en un banco.",
        "Escribir cartas comerciales.",
        "Reparar objetos de casa.",
        "Ser veterinario.",
        "Ser actor.",
        "Cuidar a enfermos.",
        "Ser director de hotel.",
        "Realizar tareas de oficina.",
        "Hacer trabajos de carpintería.",
        "Resolver problemas con matemáticas.",
        "Redactar noticias para un periódico.",
        "Estudiar psicología.",
        "Encargado de compras en centro comercial.",
        "Gestionar y tramitar documentación."
    ];

    const habilidades = [
        "Arreglar averías en electrodomésticos.",
        "Manejar equipos informáticos.",
        "Hacer fotografías y videos.",
        "Escuchar y entender a los demás.",
        "Ser líder y dirigir grupos.",
        "Usar Internet para gestionar información.",
        "Manejar herramientas.",
        "Aprender conocimientos científicos.",
        "Cantar.",
        "Enseñar en escuelas.",
        "Dirigir trabajos en grupo.",
        "Usar bases de datos.",
        "Manejar máquinas.",
        "Solucionar problemas técnicos.",
        "Actuar en teatro o cine.",
        "Cuidar y curar a personas.",
        "Hacer tareas de marketing.",
        "Crear y ordenar archivos.",
        "Aprender a usar aparatos nuevos.",
        "Usar equipos de laboratorio.",
        "Escribir cuentos, noticias o poesía.",
        "Ayudar a otros con sus problemas.",
        "Crear un producto para venderlo.",
        "Realizar tareas de oficina.",
        "Conducir vehículos.",
        "Probar ideas o predicciones.",
        "Tener ideas creativas artísticas.",
        "Contactar y relacionarse con otros.",
        "Emprender un negocio.",
        "Escribir correspondencia comercial.",
        "Hacer bricolaje.",
        "Formular hipótesis científicas.",
        "Decorar espacios.",
        "Atender a personas problemáticas.",
        "Supervisar trabajos.",
        "Clasificar correspondencia.",
        "Realizar trabajos manuales.",
        "Comprender fenómenos naturales o sociales.",
        "Diseñar objetos o ropa.",
        "Explicar dudas académicas.",
        "Hacer acciones comerciales.",
        "Hacer balances de ingresos y gastos.",
        "Montar y desmontar equipos.",
        "Investigar y experimentar.",
        "Dibujar motivos ilustrativos.",
        "Inspirar confianza.",
        "Negociar.",
        "Manejar equipos de oficina.",
        "Reparar muebles.",
        "Aplicar matemáticas a problemas.",
        "Crear arte con principios estéticos.",
        "Asesorar a personas con problemas.",
        "Convencer con argumentos.",
        "Tramitar documentos oficiales."
    ];
    const caracteristicas = [
        "Realista y práctica.",
        "Con curiosidad intelectual.",
        "Intuitiva y creativa.",
        "Cooperativa.",
        "Competitiva y ambiciosa.",
        "Metódica y organizada.",
        "Materialista, con interés en bienes.",
        "Investigadora, que cuestiona e indaga.",
        "Imaginativa y soñadora.",
        "Generosa y social.",
        "Con liderazgo y autoridad.",
        "Obediente y que sigue instrucciones.",
        "Constante, con destrezas técnicas.",
        "Interesada en la comprensión del mundo.",
        "Creativa y artística.",
        "Sociable, que disfruta ayudando.",
        "Enérgica, que convence.",
        "Cuidadosa y meticulosa."
    ];

    const areasCaracteristicas = {
        T: [163, 168, 174, 175, 180],
        C: [164, 170, 176],
        A: [165, 171, 177],
        S: [166, 172, 178],
        E: [167, 173, 179],
        O: [168, 174, 180]
    };

    const itemsActividades = {
        T: [1,7,13,19,25,31,37,43,49,55,61,67],
        C: [2,8,14,20,26,32,38,44,50,56,62,68],
        A: [3,9,15,21,27,33,39,45,51,57,63,69],
        S: [4,10,16,22,28,34,40,46,52,58,64,70],
        E: [5,11,17,23,29,35,41,47,53,59,65,71],
        O: [6,12,18,24,30,36,42,48,54,60,66,72]
    };

    const itemsProfesiones = {
        T: [73,79,85,91,97,103],
        C: [74,80,86,92,98,104],
        A: [75,81,87,93,99,105],
        S: [76,82,88,94,100,106],
        E: [77,83,89,95,101,107],
        O: [78,84,90,96,102,108]
    };

    const itemsHabilidades = {
        T: [109,115,127,133,139,145,151,157],
        C: [110,116,122,128,134,140,146,152],
        A: [111,117,123,129,135,141,147,153,159],
        S: [112,118,124,130,136,142,148,154,160],
        E: [113,119,125,131,137,143,149,155,161],
        O: [114,120,126,132,138,144,150,156,162]
    };

    const apartado1 = document.getElementById('apartado1');
    if (apartado1) {
        const offset1 = 0;
        preguntas.forEach((texto, idx) => {
            const div = document.createElement('div');
            div.className = 'pregunta';

            const p = document.createElement('p');
            p.textContent = `${offset1 + idx + 1}. ${texto}`;
            div.appendChild(p);

            const opciones = [
                { valor: 2, texto: '(S) Sí' },
                { valor: 1, texto: '(?) ¿' },
                { valor: 0, texto: '(N) No' }
            ];

            opciones.forEach(op => {
                const label = document.createElement('label');
                label.className = 'radio-option';
                const input = document.createElement('input');
                input.type = 'radio';
                input.name = `p${idx + 1}`;
                input.value = op.valor;
                const span = document.createElement('span');
                span.textContent = ` ${op.texto}`;
                if (op.valor === 2) {
                    input.checked = true;
                    input.classList.add('preselected');
                    span.classList.add('preselected');
                }
                label.appendChild(input);
                label.appendChild(span);
                div.appendChild(label);
            });

            apartado1.appendChild(div);
        });
    }

    const apartado2 = document.getElementById('apartado2');
    if (apartado2) {
        const offset2 = preguntas.length;
        habilidades.forEach((texto, idx) => {
            const div = document.createElement('div');
            div.className = 'pregunta';

            const p = document.createElement('p');
            p.textContent = `${offset2 + idx + 1}. ${texto}`;
            div.appendChild(p);

            const opciones = [
                { valor: 2, texto: '(S) Sí' },
                { valor: 1, texto: '(?) ¿' },
                { valor: 0, texto: '(N) No' }
            ];

            opciones.forEach(op => {
                const label = document.createElement('label');
                label.className = 'radio-option';
                const input = document.createElement('input');
                input.type = 'radio';
                input.name = `h${idx + 1}`;
                input.value = op.valor;
                const span = document.createElement('span');
                span.textContent = ` ${op.texto}`;
                if (op.valor === 2) {
                    input.checked = true;
                    input.classList.add('preselected');
                    span.classList.add('preselected');
                }
                label.appendChild(input);
                label.appendChild(span);
                div.appendChild(label);
            });

            apartado2.appendChild(div);
        });
    }
    const apartado3 = document.getElementById('apartado3');
    if (apartado3) {
        const offset3 = preguntas.length + habilidades.length;
        caracteristicas.forEach((texto, idx) => {
            const div = document.createElement('div');
            div.className = 'pregunta';

            const p = document.createElement('p');
            p.textContent = `${offset3 + idx + 1}. ${texto}`;
            div.appendChild(p);

            const opciones = [
                { valor: 2, texto: '(S) Sí' },
                { valor: 1, texto: '(?) ¿' },
                { valor: 0, texto: '(N) No' }
            ];

            opciones.forEach(op => {
                const label = document.createElement('label');
                label.className = 'radio-option';
                const input = document.createElement('input');
                input.type = 'radio';
                input.name = `c${idx + 1}`;
                input.value = op.valor;
                const span = document.createElement('span');
                span.textContent = ` ${op.texto}`;
                if (op.valor === 2) {
                    input.checked = true;
                    input.classList.add('preselected');
                    span.classList.add('preselected');
                }
                label.appendChild(input);
                label.appendChild(span);
                div.appendChild(label);
            });

            apartado3.appendChild(div);
        });
    }

    // Cuando el usuario seleccione una opción, quitar estado preseleccionado
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', function () {
            const group = document.querySelectorAll(`input[name="${this.name}"]`);
            group.forEach(inp => {
                inp.classList.remove('preselected');
                if (inp.nextElementSibling) {
                    inp.nextElementSibling.classList.remove('preselected');
                }
            });
        });
    });

    const totalIntereses = preguntas.length;
    const totalHabilidades = habilidades.length;

    function obtenerValor(num) {
        let name;
        if (num <= totalIntereses) {
            name = `p${num}`;
        } else if (num <= totalIntereses + totalHabilidades) {
            name = `h${num - totalIntereses}`;
        } else {
            name = `c${num - totalIntereses - totalHabilidades}`;
        }
        const el = document.querySelector(`input[name="${name}"]:checked`);
        return el ? parseInt(el.value, 10) : 0;
    }

    // Determina el texto de la coincidencia según la guía proporcionada
    function interpretarCoincidencia(interes, habilidad) {
        if (interes >= 16 && habilidad >= 12) {
            return '✅ Alta: Motivación + competencia: perfil recomendado';
        }
        if (interes >= 16 && habilidad < 10) {
            return '⚠️ Interés > Habilidad: Motivado, pero necesita reforzar habilidades';
        }
        if (interes < 10 && habilidad >= 12) {
            return '⚠️ Habilidad > Interés: Competente, pero poco motivado: revisar causas';
        }
        if (interes < 10 && habilidad < 10) {
            return '❌ Baja: Poca afinidad con el área, no es prioritaria';
        }
        return '';
    }

    function calcularResultadosApartado3() {
        const puntajes = { T: 0, C: 0, A: 0, S: 0, E: 0, O: 0 };
        for (const [area, items] of Object.entries(areasCaracteristicas)) {
            items.forEach(it => {
                puntajes[area] += obtenerValor(it);
            });
        }
        return puntajes;
    }

    function actualizarTabla(idTabla, clase, itemsMap) {
        const filas = document.querySelectorAll(`#${idTabla} tbody tr`);
        filas.forEach(fila => {
            const area = fila.dataset.area;
            const items = itemsMap[area] || [];
            const suma = items.reduce((acc, n) => acc + obtenerValor(n), 0);
            const celda = fila.querySelector(`.${clase}`);
            if (celda) celda.textContent = suma;
        });
    }

    function crearTablaGraf(nombre, clave, datos) {
        let html = `<div class="seccion"><h3>${nombre}</h3><table class="tabla">` +
            `<tr><th>Área</th><th>Etiqueta</th><th>Puntaje (0-10)</th><th>Visual</th></tr>`;
        AREAS.forEach(area => {
            const valor = datos[clave][area];
            const porcentaje = (valor / 10) * 100;
            html += `<tr>` +
                `<td>${area}</td>` +
                `<td>${etiquetas[area]}</td>` +
                `<td>${valor}</td>` +
                `<td>` +
                    `<div class="barra"><div class="punto" style="left: calc(${porcentaje}% - 5px);"></div></div>` +
                    `<div class="barra-labels"><span>Muy bajo</span><span>Muy alto</span></div>` +
                `</td>` +
                `</tr>`;
        });
        html += `</table></div>`;
        return html;
    }

    function mostrarGrafica(datos) {
        const cont = document.getElementById('grafica');
        if (!cont) return;
        cont.innerHTML =
            crearTablaGraf('Intereses por Actividades', 'Act', datos) +
            crearTablaGraf('Intereses por Profesiones', 'Prf', datos) +
            crearTablaGraf('Habilidades y Destrezas', 'Hab', datos) +
            crearTablaGraf('Características Personales', 'Per', datos);
    }

    function calcularGrafica(resCaracRaw) {
        const datos = { Act: {}, Prf: {}, Hab: {}, Per: {} };
        AREAS.forEach(area => {
            const sumAct = itemsActividades[area].reduce((a, n) => a + obtenerValor(n), 0);
            datos.Act[area] = +(sumAct / 24 * 10).toFixed(1);

            const sumProf = itemsProfesiones[area].reduce((a, n) => a + obtenerValor(n), 0);
            datos.Prf[area] = +(sumProf / 12 * 10).toFixed(1);

            const sumHab = itemsHabilidades[area].reduce((a, n) => a + obtenerValor(n), 0);
            const maxHab = itemsHabilidades[area].length * 2;
            datos.Hab[area] = +(sumHab / maxHab * 10).toFixed(1);

            const maxPer = areasCaracteristicas[area].length * 2;
            datos.Per[area] = +((resCaracRaw[area] || 0) / maxPer * 10).toFixed(1);
        });
        mostrarGrafica(datos);
    }

    function calcularResultados() {
        const filas = document.querySelectorAll('#resultado-tabla tbody tr');
        filas.forEach(fila => {
            const intereses = fila.dataset.intereses.split(',').map(n => parseInt(n.trim(), 10));
            const habilidades = fila.dataset.habilidades.split(',').map(n => parseInt(n.trim(), 10));

            const sumaInt = intereses.reduce((acc, n) => acc + obtenerValor(n), 0);
            const sumaHab = habilidades.reduce((acc, n) => acc + obtenerValor(n), 0);

            const celdaInt = fila.querySelector('.puntaje-i');
            const celdaHab = fila.querySelector('.puntaje-h');
            const celdaTotal = fila.querySelector('.total');

            if (celdaInt) celdaInt.textContent = sumaInt;
            if (celdaHab) celdaHab.textContent = sumaHab;
            if (celdaTotal) celdaTotal.textContent = sumaInt + sumaHab;

            const celdaCoinc = fila.querySelector('.coincidencia');
            if (celdaCoinc) celdaCoinc.textContent = interpretarCoincidencia(sumaInt, sumaHab);
        });

        actualizarTabla('tabla-actividades', 'puntaje-act', itemsActividades);
        actualizarTabla('tabla-profesiones', 'puntaje-prof', itemsProfesiones);
        actualizarTabla('tabla-habilidades', 'puntaje-hab', itemsHabilidades);

        const resCarac = calcularResultadosApartado3();
        const filasC = document.querySelectorAll('#caracteristicas-tabla tbody tr');
        filasC.forEach(f => {
            const area = f.dataset.area;
            const celda = f.querySelector('.puntaje-c');
            const max = areasCaracteristicas[area].length * 2;
            if (celda) celda.textContent = `${resCarac[area]} / ${max}`;
        });

        calcularGrafica(resCarac);
    }

    const btnCalcular = document.getElementById('calcular');
    if (btnCalcular) {
        btnCalcular.addEventListener('click', calcularResultados);
    }
});
