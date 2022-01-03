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
