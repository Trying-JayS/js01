/*

Função de palíndromo
Escreva uma função chamada isPalindrome que recebe uma palavra como argumento.

A função deve verificar se a palavra é um palíndromo.

Um palíndromo é uma palavra que é lida da mesma forma tanto da esquerda para a direita quanto da direita para a esquerda.

A função deve retornar true se a palavra for um palíndromo e false caso contrário.

Por exemplo:

isPalindrome('radar') deve retornar true.

isPalindrome('hello') deve retornar false.

*/

function isPalindrome(palavra) {
    // Converte a palavra para minúsculas e remove espaços caso existam
    palavra = palavra.toLowerCase().replace(/\s+/g, '');

    // Inverte a palavra
    let palavraInvertida = palavra.split('').reverse().join('');

    // Verifica se a palavra original é igual à invertida
    return palavra === palavraInvertida;
}

// Testando a função
console.log(isPalindrome('radar')); // true
console.log(isPalindrome('hello')); // false
console.log(isPalindrome('Racecar')); // true (ignora maiúsculas)
console.log(isPalindrome('A man a plan a canal Panama')); // true (ignora espaços)