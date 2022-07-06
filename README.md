# Glucose Monitoring

A basic calendar application for monitoring patients' glucose measurements.

## Installation

Clone the project

```bash
  git clone git@github.com:cmpsleo/glucose-monitoring.git
```

Go to the directory

```bash
  cd glucose-monitoring
```

Install dependencies

```bash
  yarn install
```

Create a file `.env.local` at the root of the project and add this:

```
  API_BASE_URL=
```

Start server

```bash
  yarn dev
```

## Structure

This project is for a study case implementing a clean architecture approach, see below the directories explanation:

```
├── ...
├── src
│ ├── domain             👑 - Main layer responsible for use cases and entities
│ ├── application        🤝 - Implement classes following domain layer
│ ├── infra              🏗️ - Create the communication to external services
│ ├── main               📌 - Factory layer to all class instances
│ ├── pages              🥂 - Screen composition
│ └── presentation       🧩 - UI only without any type of logic
├── ...
```

## Storybook

For tests and development is used Storybook. Run with:

```bash
  yarn storybook
```

## Tests

Tests is only for `Application` and `Infra` layer. Run with:

```bash
  yarn test
```

## Deployment

The main entry for a new feature is with `pull requests` that run an action with code checks e tests and will deploy automatically after PR approbation and merge to main.

## Demo

[Click here](https://glucose-monitoring.vercel.app)

## Tools

**Client:** React, Nextjs, Styled Components, Styled Media Query, Polished, Jest, Typescript, Axios, React Query, Storybook, Dayjs, Husky, Lint Staged, ReactInk, Faker, Eslint, Conventional Commit.

## References

- [React com Mango](https://www.udemy.com/course/react-com-mango)
- [Implementando Clean Architecture no ReactJS](https://joaogbsczip.medium.com/implementando-clean-architecture-no-reactjs-af17fb70ca6)
- [Clean Architecture // Live #77](https://www.youtube.com/watch?v=kwpiV0efMRM&ab_channel=RodrigoBranas)
