# Repro

Repro for https://github.com/typeorm/typeorm/issues/3813

To reproduce:

1. `git clone git@github.com:aaronjensen/typeorm-monorepo-repro.git`
2. `cd typeorm-monorepo-repro`
3. `yarn`
4. `cd subproject`
5. `node index.js`

Then try `mv ormconfig.js ..` and `node index.js` again.

It should when the `ormconfig.js` is in `subproject/`
