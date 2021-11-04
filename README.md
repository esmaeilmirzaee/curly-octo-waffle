# TypeScript, Express, Sequelize, and PostgreSQL

> In this repository, I have just developed a simple CRUD operations using `TypeScript`, `Express`, `Sequelize`, and `Postgresql`.

It is worth noting that I user Postgres in a container so I could deploy my application in the future easily. And, I use visual studio code as my primary coding environment.

I know it is against best practice to work on `main`/`master` branch but to make everything smooth and simple I just use the `main` branch.

## Setup

### Application bootstrap

```bash
mkdir project_name
npm init -y

npm i -S

npm i -S -D

npx tsc --init

mkdir src
touch src/app.ts
code .
```

#### Config start scripts and build path

1. Open `tsconfig.json`, search for `outDir`, uncomment the line and finally replace it with `./build`.

2. Open `package.json` file and add the following content to `scripts` section of the file, if there is no `scripts` section please create it.

```json
"scripts": {
    "dev": "ts-node-dev --clear --respawn --transpile-only src/app.ts",
    "build" : "",
    "start":""
}
```

#### `app.ts` boilerplate

open `app.ts` file and add the following piece of code.

```typescript
import express from 'express';
import config from 'config';

const PORT = 1337;
const app = express();

// Set middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
    console.log('App is listening on ' + PORT);
});
```

#### Routes

#### Database connection
