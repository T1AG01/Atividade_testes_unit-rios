const calculadora = require('./calculadora');

describe('Funções de calculo ', function(){
    test('Calcular a soma entre 2 números', function(){
        expect(calculadora.somar(5,15)).toBe(20);
    });

    test('Calcular a subtração entre 2 números', function(){
        expect(calculadora.subtrair(15,5)).toBe(10);
    });

    test('Calcular a multiplicação entre 2 números', function(){
        expect(calculadora.multiplicar(5,3)).toBe(15);
    });

    test('Calcular a divisão entre 2 números', function(){
        expect(calculadora.dividir(15,5)).toBe(3);
    });

    test('Calcular a potencia de um número', function(){
        expect(calculadora.potencia(5,3)).toBe(125);
    });

    test('Calcular a média de dois números', function(){
        expect(calculadora.media(5,15)).toBe(10);
    });

    test('Calcular a porcentagem de um número', function(){
        expect(calculadora.porcentagem(5,15)).toBe(0.75);
    });
})

// somar, subtrair, multiplicar, dividir, potencia, media, porcentagem