function podeVotar(idade) {
    if (idade >=18 && idade <= 70) {
        console.log("Voto obrigatório");
    } else if ((idade >= 16 && idade < 18) || idade >= 70) {
        console.log("Voto facultativo");
    } else {
        console.log("Não pode votar");
    }
}

podeVotar(15); // "Não pode votar"
podeVotar(18); // "Voto facultativo"
podeVotar(71); // "Voto opcional"