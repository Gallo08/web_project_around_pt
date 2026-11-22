# Around The U.S.

Página web interativa desenvolvida durante o curso de Desenvolvimento Web da TripleTen.

No Projeto 12, a página foi conectada a uma API para carregar e salvar as informações do perfil, a foto, os cartões e as curtidas no servidor.

## Funcionalidades

- Carregar o perfil e os cartões do servidor.
- Editar e salvar o nome e a descrição do perfil.
- Alterar e salvar a foto do perfil usando um link de imagem.
- Criar cartões com título e imagem.
- Curtir e descurtir cartões.
- Excluir cartões próprios após confirmação.
- Exibir a lixeira apenas nos cartões do usuário.
- Visualizar imagens ampliadas com legenda.
- Fechar pop-ups pelo botão, pela tecla Esc ou pela sobreposição.
- Validar formulários em tempo real.
- Exibir mensagens de erro e desativar o envio de campos inválidos.
- Mostrar “Salvando...” durante o envio dos formulários.
- Manter os dados salvos após atualizar a página.

## Organização do JavaScript

- `Api.js`: centraliza as solicitações ao servidor e verifica as respostas.
- `Card.js`: cria os cartões e conecta os eventos de imagem, curtida e exclusão às funções de retorno de chamada.
- `FormValidator.js`: valida os formulários e controla os botões de envio.
- `Section.js`: percorre os dados e adiciona os elementos ao contêiner.
- `Popup.js`: controla a abertura e o fechamento dos pop-ups.
- `PopupWithImage.js`: herda de Popup e exibe a imagem ampliada com legenda.
- `PopupWithForm.js`: herda de Popup, coleta os valores dos campos e controla o estado de carregamento.
- `PopupWithConfirmation.js`: herda de Popup e controla a confirmação de exclusão.
- `UserInfo.js`: lê e atualiza as informações e a foto do perfil.
- `index.js`: cria as instâncias e conecta as interações da página à API.

As classes se comunicam por funções de retorno de chamada, sem criar instâncias umas das outras internamente.

## Integração com a API

As solicitações são realizadas com `fetch`, usando os métodos GET, POST, PATCH, PUT e DELETE.

- Autorização enviada nos cabeçalhos das solicitações.
- Dados enviados e recebidos em JSON.
- Verificação das respostas com `res.ok`.
- Tratamento de erros com `.catch()`.
- Restauração dos botões com `.finally()`.
- Carregamento inicial com `Promise.all()`.
- Renderização dos cartões após obter o ID do usuário.

## Validação dos formulários

A classe FormValidator utiliza a API de validação nativa do navegador:

- `ValidityState` e `validationMessage`.
- Atributos `required`, `minlength`, `maxlength` e `type`.
- Mensagens de erro abaixo dos campos.
- Controle do estado dos botões de envio.
- Limpeza dos erros ao reabrir os formulários.

## Tecnologias utilizadas

- HTML5 e CSS3.
- JavaScript com classes ES6 e módulos.
- Programação orientada a objetos e herança.
- Fetch API, Promises e JSON.
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
│   │   ├── Api.js
│   │   ├── Card.js
│   │   ├── FormValidator.js
│   │   ├── Popup.js
│   │   ├── PopupWithConfirmation.js
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

É necessário acesso à internet e um token válido configurado na instância de Api em `src/pages/index.js`.

## Link do projeto

[Visualizar o projeto no GitHub Pages](https://gallo08.github.io/web_project_around_pt/src/)

## Autor

Desenvolvido por Gabriel Gallo como parte do programa de Desenvolvimento Web da TripleTen.
