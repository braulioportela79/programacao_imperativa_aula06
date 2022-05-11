// Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.

function adicionar(num1, num2) {
    return num1 + num2;
};

// Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração do primeiro menos o segundo.

function subtrair(num1, num2) {
    return num1 - num2;
};

// Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.

function multiplicar(num1, num2) {
    return num1 * num2;
};

// Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.

function dividir(num1, num2) {
    return num1 / num2;
};

let num1 = 60;
let num2 = 40;

// No seu arquivo calculadora.js, a partir das 4 funções feitas anteriormente, crie um console.log no qual você irá colocar uma string para indicar que abaixo dela você começará a testar as funções.

console.log(`-------------- Teste de Operações / Calculadora --------------`);

// Execute a função que soma e a função que subtrai, passando quaisquer dois números como argumentos. Mostrar resultados no console.

console.log(`Resultado Função Adicionar: ${num1} + ${num2} = ${adicionar(num1, num2)}`);
console.log(`Resultado Função Subtrair: ${num1} - ${num2} = ${subtrair(num1, num2)}`);

// Execute a função que multiplica, passando quaisquer dois números como argumentos. Mostre o resultado no console.

console.log(`Resultado Função Multiplicar: ${num1} * ${num2} = ${multiplicar(num1, num2)}`);

// Execute a função que faz divisão, passando quaisquer dois números como argumentos. Mostre o resultado no console.

console.log(`Resultado Função Dividir: ${num1} / ${num2} = ${dividir(num1, num2)}`);

// Execute a função que faz divisão, passando agora o número zero como um dos dois argumentos. Mostre o resultado no console.

num1 = 0;

console.log(`Resultado Função Dividir(Zero como um dos argumentos): ${num1} / ${num2} = ${dividir(num1, num2)}`);

num1 = 60;
num2 = 0;

console.log(`Resultado Função Dividir(Zero como um dos argumentos): ${num1} / ${num2} = ${dividir(num1, num2)}`);

// Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado. Importante: quadradoDoNumero() deve usar a função multiplicação() para calcular o quadrado do parâmetro inserido em power().

function quadradoDoNumero(num1) {
    return `${multiplicar(num1, num1)}`;
};

console.log(`Resultado Função QuadradoDoNumero: ${num1} ao quadrado = ${quadradoDoNumero(num1)}`);

// Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro. Importante: Em mediaDeTresNumeros() você precisará usar algumas funções criadas anteriormente em nossa calculadora.

function mediaDeTresNumeros(num1, num2, num3) {
    let result1 = adicionar(num1, num2);
    let result2 = adicionar(result1, num3);
    return `${dividir(result2, 3)}`;
};

num2 = 40;
let num3 = 50;

console.log(`Resultado Função MediaDeTresNumeros: A média dos números ${num1}, ${num2}, ${num3} = ${mediaDeTresNumeros(num1, num2, num3)}`);

// Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, e que deverá retornar x% de totalPorcentagem. Exemplo: calculaPorcentagem(300, 15)  (deve retornar 45, pois é 15% de 300).

function calculaPorcentagem(num1, num2) {
    let result = multiplicar(num1, num2);
    return `${dividir(result, 100)}`;
};

console.log(`Resultado Função CalculaPorcentagem: ${num2}% de ${num1} = ${calculaPorcentagem(num1, num2)}`);


// Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em relação ao segundo parâmetro. Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1% de 200).

function geradorDePorcentagem(num1, num2) {
    let result = dividir(num1, num2);
    return `${multiplicar(result, 100)}`;
};

console.log(`Resultado Função GeradorDePorcentagem: ${num1} é ${geradorDePorcentagem(num1, num2)}% de ${num2}`);