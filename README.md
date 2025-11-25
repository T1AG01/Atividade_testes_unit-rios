# Atividade-Testes-Unitarios
Atividade de Testes Unitários realizada durante o último ano do curso de Desenvolvimento de Sistemas no Senai - Boqueirão


# Descrição Atividade:
Desenvolver uma mini aplicação contendo uma calculadora com múltiplas funcionalidades e criar testes unitários, garantindo a cobertura 100% e o correto funcionamento do código.

Você deve criar:
Um arquivo JavaScript (calculadora.js) contendo as funções da calculadora.
Um arquivo de testes (calculadora.test.js) utilizando Jest para testar todas as funções.
Capturas de tela (prints) mostrando os testes rodando e passando.

A entrega deve conter os 3 arquivos!

Funcionalidades obrigatórias da calculadora
somar
subtrair
multiplicar
dividir (lançar erro ao tentar dividir por zero)
potência
média
porcentagem


# Instruções para rodar os testes:

Criar projeto: npm init -y

Instalar Jest: npm install jest

Atualizar o package.json adicionando:
 
"scripts": {
      "test": jest --coverage"
}

Rodar os testes: npm test

# NPM para rodar:

npm install jest prompt-sync
