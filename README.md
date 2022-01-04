# hello-yarn-workspaces

This repo documents the steps from zero to monorepo using `yarn`.

Mistakes will be made, thus lessons learned.

## Tools

* Node 16.10.0
* `yarn@3.1.1`

## Steps taken

```bash
corepack enable
yarn init -2
```

```bash
cd apps/ui
yarn init -y

cd apps/api
yarn init -y

cd packages/ui-components
yarn init -y
```

```bash
yarn dlx husky-init --yarn2 && yarn
yarn husky add .husky/commit-msg 'yarn commitlint --edit $1'
yarn add --dev @commitlint/cli @commitlint/config-conventional
```

### add commitlint.config.js

```js
module.exports = { extends: ["@commitlint/config-conventional"] };
```

### add ui packages

```bash
yarn workspace ui add react react-dom
yarn workspace ui add --dev @types/react tailwindcss@latest autoprefixer@latest postcss@latest vite typescript @vitejs/plugin-react @tailwindcss/forms @types/react-dom
```

### VS Code support

[yarn workspaces monorepo with vite, react, tailwind - VS Code fails to resolve packages](https://stackoverflow.com/questions/70572380/yarn-workspaces-monorepo-with-vite-react-tailwind-vs-code-fails-to-resolve-p)
