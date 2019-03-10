[![Build Status](https://travis-ci.org/lucid-services/serviser-knex.svg?branch=master)](https://travis-ci.org/lucid-services/serviser-knex) [![npm version](https://badge.fury.io/js/serviser-knex.svg)](https://www.npmjs.com/package/serviser-knex)  

[serviser](https://github.com/lucid-services/serviser) plugin which integrates [Knex](https://github.com/tgriesser/knex)

```javascript
const Service = require('serviser');
const config = require('serviser-config');
const knexBuilder = require('serviser-knex');

const knex = knexBuilder({/*knex options*/});

const service = new Service(config);

//enables integrity inspection features
service.resourceManager.register('postgres', knex);
```

Define minimum required db server version:
----------------------------------------
```javascript
const knex = knexBuilder({
    client: 'postgres',
    version: '10.5.0'
});
```

if the defined version requirement isn't satisfied, the service initialization
process will fail with an error.

SQL query debugging:
---------------------
```bash
> export SQL_DEBUG=1
> npm start
```

Tests
-----

> npm test
