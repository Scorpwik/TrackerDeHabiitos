// Modelo de datos: Arreglo de objetos (Requerimiento de la rúbrica)
let habitos = JSON.parse(localStorage.getItem('habitos')) || [];

// 1. Selecciona el formulario, input y el <ul>
const form = document.getElementById('form-habito');
const input = document.getElementById('input-habito');
const lista = document.getElementById('lista-habitos');

// Función para guardar en localStorage
const guardarDatos = () => {
    localStorage.setItem('habitos', JSON.stringify(habitos));
};

// Renderizado dinámico desde JS (Requerimiento)
const renderizar = () => {
    lista.innerHTML = "";
    
    habitos.forEach((habito) => {
        // Uso de destructuring
        const { id, nombre, completado } = habito;
        
        const li = document.createElement("li");
        li.dataset.id = id;
        
        if (completado) {
            li.classList.add("tachado");
        }
        
        li.innerHTML = `
            <span class="texto-habito">${nombre}</span>
            <button class="btn-eliminar">Eliminar</button>
        `;
        
        lista.appendChild(li);
    });
};

// Agregar un nuevo hábito
form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    if (input.value.trim() === "") return;

    // Objeto usando ES6+
    const nuevoHabito = {
        id: Date.now(),
        nombre: input.value,
        completado: false
    };
    
    habitos.push(nuevoHabito);
    guardarDatos();
    renderizar();
    
    form.reset();
});

// 2. Agrega UN SOLO addEventListener aquí (delegación de eventos)
lista.addEventListener("click", (event) => {
    const elementoClick = event.target;
    
    // Buscar el li padre al que se le hizo clic
    const liPadre = elementoClick.closest("li");
    if (!liPadre) return;
    
    // Obtener id como string para evitar problemas con datos antiguos en localStorage
    const id = String(liPadre.dataset.id);
    
    // Si hizo clic en el botón de eliminar
    if (elementoClick.classList.contains("btn-eliminar")) {
        // Arrow function y filter comparando strings
        habitos = habitos.filter((h) => String(h.id) !== id);
    } 
    // Si hizo clic en cualquier otra parte del <li> (para marcar como completado)
    else {
        const habitoEncontrado = habitos.find((h) => String(h.id) === id);
        if (habitoEncontrado) {
            habitoEncontrado.completado = !habitoEncontrado.completado;
        }
    }
    
    guardarDatos();
    renderizar();
});

// Inicializar la app renderizando los datos
renderizar();
