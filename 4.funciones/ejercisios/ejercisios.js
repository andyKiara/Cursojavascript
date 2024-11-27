//primer ejercisio
function obtenerNumeroMenor(...numeros) {
    return Math.min(...numeros);
}

// Ejemplo de uso:
console.log(obtenerNumeroMenor(5, 2, 8, 3, 1)); // Salida: 1


//segundo ejercisio
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function mostrarSerieFibonacci(n) {
    const serie = [];
    for (let i = 0; i < n; i++) {
        serie.push(fibonacci(i));
    }
    return serie;
}

// Ejemplo de uso: mostrando los primeros 20 números de la serie de Fibonacci
console.log(mostrarSerieFibonacci(20));
// Salida: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]
