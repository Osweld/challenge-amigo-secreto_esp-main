let amigos = [];
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }
    
    if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya está en la lista.');
        inputAmigo.value = '';
        return;
    }
    
    amigos.push(nombreAmigo);
    inputAmigo.value = '';
    actualizarListaAmigos();
    
    limpiarResultado();
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}



function sortearAmigo() {
    if (amigos.length === 0) {
        alert('La lista está vacía. Agrega al menos un amigo para sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    
    mostrarResultado(amigoSorteado);
}

function mostrarResultado(nombreSorteado) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    const li = document.createElement('li');
    li.innerHTML = `🎉🎉🎉 <strong>El amigo secreto sorteado es:</strong> ${nombreSorteado}🎉🎉🎉`;
    resultado.appendChild(li);
}


function limpiarResultado() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
}