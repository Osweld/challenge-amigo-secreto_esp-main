# Explicación del código

## Agregar amigos

Esta parte hace varias funciones:

- se crea una lista para los amigos.
- Se crea una función para agregar los amigos a la lista.
- Se valida que no este vacío el nombre.
- Se valida que no haya espacios en blanco al inicio y al final.

```js
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
```

## Actualizar lista de amigos

En esta parte se obtenemos el selector de la lista y vamos agregando los amigos a la lista para mostrarlos, esta función se ejecutara cada vez que hagamos agreguemos un nuevo amigo a la lista.

```js
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}
```

## Sorteo y mostrar resultado

En esta parte primero verificamos que la lista no este vacía, después se procede a hacer el sorteo con `Math.Random()`, una ves tenemos el resultado mandamos a llamar la función `mostrarResultado(nombreSorteado)` en la cual mostramos un mensaje con el nombre del ganador de amigo secreto.

```js
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
```