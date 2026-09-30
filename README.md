# Around The U.S.

O projeto **Around The U.S.** é uma página web interativa na qual o usuário pode editar as informações do perfil, adicionar novos cartões de lugares, curtir cartões, excluí-los e visualizar imagens em tamanho ampliado.

O projeto foi desenvolvido durante o curso de Desenvolvimento Web da TripleTen.

## Funcionalidades

- Editar o nome e a descrição do perfil.
- Abrir e fechar os pop-ups.
- Fechar os pop-ups pelo botão, pela tecla `Esc` ou clicando na sobreposição.
- Criar novos cartões com título e imagem.
- Gerar os cartões iniciais dinamicamente a partir de um array.
- Curtir e descurtir cartões.
- Excluir cartões.
- Visualizar imagens em tamanho ampliado.
- Exibir o nome do local como legenda da imagem.
- Validar os formulários em tempo real.
- Exibir mensagens de erro nos campos inválidos.
- Ativar ou desativar os botões de envio conforme a validade dos formulários.
- Limpar os erros de validação ao reabrir os formulários.

## Validação dos formulários

A validação foi criada com JavaScript e com a API de validação nativa do navegador.

Foram utilizados:

- `ValidityState`
- `validationMessage`
- Atributos `required`, `minlength`, `maxlength` e `type`
- Mensagens de erro exibidas abaixo dos campos
- Botões desabilitados enquanto o formulário estiver inválido
- Funções reutilizáveis para validar diferentes formulários

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Metodologia BEM
- Flexbox
- CSS Grid
- Design responsivo
- Manipulação do DOM
- Eventos do JavaScript
- Elementos `<template>`
- Validação de formulários
- Git e GitHub

## Estrutura do projeto

```text
web_project_around_pt/
├── blocks/
├── images/
├── pages/
│   └── index.css
├── scripts/
│   ├── index.js
│   └── validate.js
├── vendor/
├── index.html
├── README.md
└── .prettierignore
```

## Link do projeto

[Visualizar o projeto no GitHub Pages](https://gallo08.github.io/web_project_around_pt/)

## Autor

Desenvolvido por Gabriel Gallo como parte do programa de Desenvolvimento Web da TripleTen.
