function nota(nota1, nota2){
    var notaFinal = (nota1 + nota2) / 2;
    if(notaFinal >= 7){
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}

nota(8,6); // Aprovado
nota(5,5); // Reprovado