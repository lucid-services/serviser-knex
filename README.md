[![Build Status](https://travis-ci.org/BohemiaInteractive/bi-service-knex.svg?branch=master)](https://travis-ci.org/BohemiaInteractive/bi-service-knex) [![npm version](https://badge.fury.io/js/bi-service-knex.svg)](https://www.npmjs.com/package/bi-service-knex)  

[bi-service](https://github.com/BohemiaInteractive/bi-service) plugin which integrates [Knex](https://github.com/tgriesser/knex)

```javascript
const Service = require('bi-service');
const config = require('bi-config');
const knexBuilder = require('bi-service-knex');

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
