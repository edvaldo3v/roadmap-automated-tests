Feature: Registar livro
Como gerente 
quero poder registar livros

Cenário: Dados Válidos
Dado que o gerente informou dados válidos
Quando solicitar para registar o livro 
Então o sistema Registar o livro
E manda mensagem de sucesso 

Cenário: Dados Inválidos
Dado que o gerente informou dados inválidos
Quando solicitar para registar o livro 
Então o sistema deve retornar uma mensagem de erro
