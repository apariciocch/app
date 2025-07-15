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

document.addEventListener('DOMContentLoaded', () => {
    const cont = document.getElementById('apartado3');
    caracteristicas.forEach((texto, idx) => {
        const div = document.createElement('div');
        div.className = 'pregunta';

        const p = document.createElement('p');
        p.textContent = `${idx + 1}. ${texto}`;
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
        cont.appendChild(div);
    });

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
});
