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
