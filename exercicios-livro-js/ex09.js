function verificarNumero(num) {
    if (num < 0) {
        console.log('Negativo');
    } else if (num > 0) {
        console.log('Positivo');
    } else {
        console.log('Neutro');
    }   
}

verificarNumero(5); // Positivo
verificarNumero(-5); // Negativo
verificarNumero(0); // Neutro