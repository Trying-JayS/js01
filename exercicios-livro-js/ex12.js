function mediaEstudante(mediaFinal){
    if(mediaFinal >= 7){
        console.log('Aprovado');
    } else if (mediaFinal >= 5 && mediaFinal < 7){
        console.log('Recuperação');
    } else {
        console.log('Reprovado');
    }
}

mediaEstudante(8); // Aprovado
mediaEstudante(6); // Recuperação
mediaEstudante(4); // Reprovado