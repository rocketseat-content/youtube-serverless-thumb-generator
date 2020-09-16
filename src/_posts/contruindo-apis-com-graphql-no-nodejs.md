---
title: "Construindo APIs com GraphQL no Node.js"
description: "No post de hoje criaremos um servidor simples com GraphQL e Express.js, mas que servira de base para estruturas mais complexas."
---

Já falamos um pouco sobre ferramentas de consumo de dados de API com GraphQL como o Apollo e Relay, agora chegou o momento de mostrarmos um pouco como funciona um serviço com GraphQL.

No post de hoje criaremos um servidor simples com GraphQL e Express.js, mas que servira de base para estruturas mais complexas.

## GraphQL

O GraphQL é uma linguagem de consultas de dados para APIs que visa passar a responsabilidade do pedido de dados para o lado do cliente, o cliente escolhe o que quer e o servidor entrega. 

No servidor ele é estruturado por 3 pilares principais, o Schema, que define os tipos de dados e quais serão as requisições, o Resolver, é a função que devolve os dados para o cliente, e o Provider, definindo onde os dados estarão guardados.