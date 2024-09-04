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

Este projeto utiliza o Cypress para realizar testes end-to-end (E2E) na interface do usuário de uma aplicação web e testes de integração para a API da mesma aplicação. Os testes verificam a funcionalidade, a usabilidade e a integridade da aplicação.

## Pré-requisitos

- [Node.js](https://nodejs.org/en/) (v12.0.0 ou superior)
- [npm](https://www.npmjs.com/) (v6.0.0 ou superior) ou [Yarn](https://yarnpkg.com/) como gerenciador de pacotes
- [Cypress](https://www.cypress.io/) (a versão mais recente é recomendada)

## Instalação

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/andersonsbenicio/QualityMap-Challenge.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd seu-repositorio
   ```

3. Instale as dependências do projeto:

   ```bash
   npm install
   ```

   ou, se estiver usando Yarn:

   ```bash
   yarn install
   ```

## Estrutura de Pastas

A estrutura de pastas do projeto segue a convenção padrão do Cypress:

```
cypress
├── fixtures         # Arquivos de dados de teste (massas de teste)
├── integration      # Testes de integração (API)
├── e2e              # Testes end-to-end (E2E) para a aplicação web
├── plugins          # Plugins para Cypress
└── support          # Comandos personalizados e funções utilitárias
```

- **`fixtures`**: Contém arquivos JSON que podem ser usados como mock de dados durante os testes.
- **`e2e`**: Contém testes E2E que simulam interações do usuário com a interface do usuário.
- **`support`**: Contém comandos personalizados e funções de suporte que podem ser reutilizados nos testes.

## Executando os Testes

Para executar os testes, utilize os seguintes comandos:

### Executando os testes de interface (E2E)

Para rodar os testes end-to-end no modo headless (sem interface gráfica):

```bash
npx cypress run --spec "cypress/e2e/**/*"
```

Para rodar os testes end-to-end com a interface gráfica do Cypress:

```bash
npx cypress open
```

### Executando os testes de API

Para rodar os testes de integração da API no modo headless:

```bash
npx cypress run --spec "cypress/integration/**/*"
```

## Comandos Personalizados

Os comandos personalizados são definidos no arquivo `cypress/support/commands.js`. Eles permitem reutilizar ações comuns, como login, navegação e outras interações de alto nível, facilitando a manutenção e o entendimento dos testes.

Exemplo de comando personalizado:

Adicionar Exemplo

## Boas Práticas

- **Uso de Fixtures**: Armazene dados de teste em arquivos de fixture e reutilize-os.
- **Comandos Personalizados**: Crie comandos personalizados para reutilizar ações comuns e manter seus testes mais legíveis.
- **Organização de Testes**: Separe os testes em pastas claras e de acordo com seu propósito (E2E vs. integração).

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorar o projeto.

## Licença

Este projeto está licenciado sob a Licença ISC. Consulte o arquivo [LICENSE](./LICENSE) para obter mais detalhes.
