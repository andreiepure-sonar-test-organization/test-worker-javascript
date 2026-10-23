# JavaScript worker fixture

A small Node.js project (no npm dependencies) for exercising the Autoscan **uncompiled-language worker**.

```sh
npm start
npm test
```

`src/inventory.js` has intentional issues, so a successful automatic analysis should report them:

- loose equality (`==`)
- an unused local variable
- an empty `catch` block
