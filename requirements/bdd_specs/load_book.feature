Feature: Visualizar livro 
Como gerente 
quero poder visualizar livro

Cenário: Identificador válido
Dado que o gerente informou identificador válidos
Quando solicitar para visualizar o livro 
Então o sistema retornar o livro

Cenário: Identificador Inválidos
Dado que o gerente informou identificador inválidos
Quando solicitar para visualizar o livro 
Então o sistema deve retornar uma mensagem, livro não encontrado
