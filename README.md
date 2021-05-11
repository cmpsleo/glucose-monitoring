# Klv Frontend Challenge

Aplicação de exibição de histórico de medições dos membros.

## Instalação

Clone the project

```bash
  git clone git@github.com:cmpsleo/klv-member-calendar.git
```

Vá para o diretório do projeto

```bash
  cd klv-member-calendar
```

Instale as dependências

```bash
  yarn install
```

Crie o arquivo `.env.local` na raiz do projeto e adicione os valores para:

```
  API_BASE_URL=
```

Inicie o server

```bash
  yarn dev
```

## Variáveis de ambiente

Para rodar este projeto, você irá precisar adicionar a seguinte variável no seu arquivo .env

`API_BASE_URL`

## Estrutura

É utilizado Clean Architecture para a estrutura da aplicação, segue abaixo a explicação dos diretórios:

```
├── ...
├── src
│ ├── domain             👑 - Principal camada responsável dos casos de uso e entities
│ ├── application        🤝 - Implementa as classes definidas na Domain layer
│ ├── infra              🏗️ - Realiza a comunicação com serviços externos
│ ├── main               📌 - Factories de todas as instâncias das classes
│ ├── pages              🥂 - Composite das telas
│ └── presentation       🧩 - Toda a UI da aplicação sem lógica de domínio apenas da própria UI.
├── ...
```

## Storybook

Para testes e desenvolvimento é utilizado o Storybook, para rodar execute o seguinte comando:

```bash
  yarn storybook
```

## Testes

Foram criados testes apenas para as camadas de Application e Infra. Para rodar, execute o seguinte comando:

```bash
  yarn test
```

## Deploy

Através de `pull requests` é rodado uma pipeline de code check e testes e os deploys estão configurados ao mergear as alterações na branch `main`.

## Demonstração

[Clique aqui](https://klv-member-calendar.vercel.app)

## Ferramentas

**Client:** React, Nextjs, Styled Components, Styled Media Query, Polished, Jest, Typescript, Axios, React Query, Storybook, Dayjs, Husky, Lint Staged, ReactInk, Faker, Eslint, Conventional Commit.

## Referências

- [React com Mango](https://www.udemy.com/course/react-com-mango)
- [Implementando Clean Architecture no ReactJS](https://joaogbsczip.medium.com/implementando-clean-architecture-no-reactjs-af17fb70ca6)
- [Clean Architecture // Live #77](https://www.youtube.com/watch?v=kwpiV0efMRM&ab_channel=RodrigoBranas)
