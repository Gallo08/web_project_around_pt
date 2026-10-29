# Around The U.S.

Página web interativa desenvolvida durante o curso de Desenvolvimento Web da TripleTen.

No Projeto 11, o código foi refatorado com programação orientada a objetos, herança e funções de retorno de chamada para separar as responsabilidades das classes.

## Funcionalidades

- Editar o nome e a descrição do perfil.
- Criar cartões com título e imagem.
- Renderizar seis cartões iniciais a partir de um array.
- Curtir, descurtir e excluir cartões.
- Visualizar imagens ampliadas com legenda.
- Fechar pop-ups pelo botão, pela tecla Esc ou pela sobreposição.
- Validar formulários em tempo real.
- Exibir mensagens de erro e desativar botões enquanto houver campos inválidos.
- Limpar os erros de validação ao reabrir os formulários.

## Organização do JavaScript

- `Card.js`: cria os cartões e controla curtidas, exclusão e a chamada da função de clique na imagem.
- `FormValidator.js`: valida os formulários e controla os botões de envio.
- `Section.js`: percorre os dados e adiciona os elementos ao contêiner.
- `Popup.js`: controla a abertura e o fechamento dos pop-ups.
- `PopupWithImage.js`: herda de Popup e exibe a imagem ampliada com legenda.
- `PopupWithForm.js`: herda de Popup, coleta os valores dos campos, trata o envio e limpa o formulário ao fechar.
- `UserInfo.js`: lê e atualiza as informações do perfil.
- `index.js`: cria as instâncias e conecta as interações da página.

As classes se comunicam por funções de retorno de chamada, sem criar instâncias umas das outras internamente.

## Validação dos formulários

A classe FormValidator utiliza a API de validação nativa do navegador:

- `ValidityState` e `validationMessage`.
- Atributos `required`, `minlength`, `maxlength` e `type`.
- Mensagens de erro abaixo dos campos.
- Controle do estado dos botões de envio.

## Tecnologias utilizadas

- HTML5 e CSS3.
- JavaScript com classes ES6 e módulos.
- Programação orientada a objetos e herança.
- Metodologia BEM.
- Flexbox, CSS Grid e design responsivo.
- Manipulação do DOM e eventos.
- Elementos `<template>`.
- Git e GitHub.

## Estrutura do projeto

```text
web_project_around_pt/
├── src/
│   ├── blocks/
│   ├── components/
│   │   ├── Card.js
│   │   ├── FormValidator.js
│   │   ├── Popup.js
│   │   ├── PopupWithForm.js
│   │   ├── PopupWithImage.js
│   │   ├── Section.js
│   │   └── UserInfo.js
│   ├── images/
│   ├── pages/
│   │   ├── index.css
│   │   └── index.js
│   ├── vendor/
│   └── index.html
├── README.md
└── .prettierignore
```

## Como executar localmente

Abra o projeto no VS Code e use a extensão Live Server no arquivo `src/index.html`.

As alterações no perfil e nos cartões não são persistidas após atualizar a página.

## Link do projeto

[Visualizar o projeto no GitHub Pages](https://gallo08.github.io/web_project_around_pt/src/)

## Autor

Desenvolvido por Gabriel Gallo como parte do programa de Desenvolvimento Web da TripleTen.
