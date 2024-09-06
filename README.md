# Projeto de Testes Automatizados com Cypress

Este repositório contém um conjunto de testes automatizados para uma aplicação web e API, utilizando o [Cypress](https://www.cypress.io/), uma ferramenta de testes end-to-end moderna e robusta.

## Índice

- [Visão Geral](#visão-geral)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Executando os Testes](#executando-os-testes)
- [Comandos Personalizados](#comandos-personalizados)
- [Boas Práticas](#boas-práticas)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Visão Geral

Este projeto utiliza o Cypress para realizar testes end-to-end (E2E) na interface do usuário de uma aplicação web (https://demo.nopcommerce.com/) e testes de API da aplicação ServeRest (https://serverest.dev/). Os testes verificam a funcionalidade, a usabilidade e a integridade da aplicação.

## Pré-requisitos

### Links de instalação

- NODEJS - https://nodejs.org/en/download/package-manager
- VSCODE - https://code.visualstudio.com/download

### Documentos de referência

- CYPRESS:
  - https://www.cypress.io/
  - https://docs.cypress.io/guides/overview/why-cypress
  - https://on.cypress.io/configuration
- ALLURE
  - https://allurereport.org/docs/cypress/

## Instalação

1. Faça o download e instale o VSCODE ou outra IDE de sua preferência:
   |

2. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/andersonsbenicio/QualityMap-Challenge.git
   ```

3. Navegue até o diretório do projeto:

   ```bash
   cd seu-repositorio
   ```

4. Instale o Node.Js:

   ```bash
   npm install
   ```

5. Instale o framework Cypress:

   ```bash
   npm i cypress --save-dev
   ```

## Estrutura de Pastas

A estrutura de pastas do projeto segue a convenção padrão do Cypress:

```bash
qualitymap-challenge/
|-- .github/
|       ├── workflows/
|       |      ├── ci_cypress.yml
|-- cypress/
|       ├── e2e/
|       |       ├── api/
│       │       |    ├── crud-user.cy.js
│       │       |
│       |       ├── web/
│       │            ├── register_validation.cy.js
|       |            ├── register.cy.js
|       ├── fixtures/
│       |       ├── resister_validation.feature
|       |       ├── resister.feature
|       |       ├── user_data.json
|       |       ├── user.json
|       |
|       └── support/
|             ├── commands.json
|             ├── e2e.json
|
|-- .gitignore
|-- readme.md

- **`e2e/web`**: Contém testes E2E que simulam interações do usuário com a interface do usuário.
- **`e2e/api`**: Contém testes que verificam a integração com APIs.
- **`fixtures`**: Contém arquivos JSON que podem ser usados como mock de dados durante os testes.
- **`support`**: Contém comandos personalizados e funções de suporte que podem ser reutilizados nos testes.
```

## Executando os Testes

```bash
npx cypress run
```

### Executando os testes de WEB

Para rodar os testes end-to-end no modo headless (sem interface gráfica):

```bash
npx cypress run --spec "cypress/e2e/web"
```

Para rodar os testes end-to-end com a interface gráfica do Cypress:

```bash
npx cypress open
```

### Executando os testes de API

Para rodar os testes de integração da API no modo headless:

```bash
npx cypress run --spec "cypress\e2e\api"
```

## Comandos Personalizados

Os comandos personalizados são definidos no arquivo `cypress/support/commands.js`. Eles permitem reutilizar ações comuns, como login, navegação e outras interações de alto nível, facilitando a manutenção e o entendimento dos testes.

Exemplo de comando personalizado:

```javascript
Cypress.Commands.add("login", (email, password) => {
  cy.visit("/login");
  cy.get("input[name=email]").type(email);
  cy.get("input[name=password]").type(password);
  cy.get("button[type=submit]").click();
});
```

## Boas Práticas

- **Uso de Fixtures**: Armazene dados de teste em arquivos de fixture e reutilize-os, caso necessário.
- **Comandos Personalizados**: Crie comandos personalizados para reutilizar ações comuns e manter seus testes mais legíveis.
- **Organização de Testes**: Separe os testes em pastas claras e de acordo com seu propósito (WEB vs. API).

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorar o projeto.

## Licença

Este projeto está licenciado sob a Licença ISC. Consulte o arquivo [LICENSE](./LICENSE) para obter mais detalhes.

### Autor

- Nome: Anderson de Sousa Benício;

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/andersonsbenicio">
        <img loading="lazy" src="https://avatars.githubusercontent.com/u/73503794?v=4" width="90"><br/>
        <sub>Anderson Benício</sub>
      </a><br/>
      <a href="https://www.linkedin.com/in/andersonsbenicio/">
        <img src="https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white" alt="LinkedIn Badge">
      </a>
    </td>
  </tr>
</table>
