
`bi-service` plugin which integrates `Knex`

```javascript
const Service = require('bi-service');
const config = require('bi-config');
const knexBuilder = require('bi-service-knex');

const knex = knexBuilder({/*knex options*/});

const service = new Service(config);

//enables integrity inspection features
service.resourceManager.register('postgres', knex);
```
