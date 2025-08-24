// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el elemento input y su valor
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombre === '') {
        alert('Por favor, ingrese un nombre válido');
        return;
    }
    
    // Agregar el nombre al array
    amigos.push(nombre);
    
    // Actualizar la lista visual
    actualizarListaAmigos();
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
    inputAmigo.focus();
}

// Función que recorre el array amigos y agrega cada nombre como un elemento <li>
function actualizarListaAmigos() {
    // 1. Obtener el elemento de la lista
    const listaAmigos = document.getElementById('listaAmigos');
    
    // 2. Limpiar la lista existente
    listaAmigos.innerHTML = "";
    
    // 3. Si no hay amigos, mostrar mensaje
    if (amigos.length === 0) {
        listaAmigos.innerHTML = '<li class="lista-vacia">No hay amigos agregados todavía</li>';
        return;
    }
    
    // 4. Iterar sobre el array y crear elementos
    for (let i = 0; i < amigos.length; i++) {
        // Crear elemento de lista
        const li = document.createElement('li');
        li.className = 'amigo-item';
        
        // Crear elemento de texto con el nombre
        const span = document.createElement('span');
        span.textContent = amigos[i];
        
        // Crear botón para eliminar
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.className = 'eliminar-btn';
        eliminarBtn.onclick = () => eliminarAmigo(i);
        
        // Agregar elementos al li
        li.appendChild(span);
        li.appendChild(eliminarBtn);
        
        // Agregar li a la lista
        listaAmigos.appendChild(li);
    }
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    // Eliminar el amigo del array
    amigos.splice(index, 1);
    
    // Actualizar la lista visual
    actualizarListaAmigos();
}

// Función que selecciona de manera aleatoria uno de los nombres
function sortearAmigo() {
    // 1. Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('No hay amigos para sortear');
        return;
    }
    
    // 2. Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // 3. Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // 4. Mostrar el resultado
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `
        <li class="resultado-item">
            <h3 class="resultado-titulo">¡El amigo secreto es!</h3>
            <p class="ganador">${amigoSorteado}</p>
            <p class="mensaje-felicidades">¡Felicidades! 🎉</p>
        </li>
    `;
    
    // Hacer scroll hasta el resultado
    resultadoElemento.scrollIntoView({ behavior: 'smooth' });
}

// Inicializar la aplicación cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Agregar evento al campo de entrada para permitir agregar con Enter
    document.getElementById('amigo').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            agregarAmigo();
        }
    });
    
    // Inicializar la lista
    actualizarListaAmigos();
});