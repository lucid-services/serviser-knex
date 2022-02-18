## 3.0.1

* [FIXED] broken release, knex lib file has changed

## 3.0.0

* [CHANGED] upgrade knex to v1.x.x

## 2.0.1

* [FIXED] KnexBuilder.prototype.inspectIntegrity should return bluebird's Promise instance explicitly because of its extra methods

## 2.0.0

* [CHANGED] updated knex@0.21.9

## 1.0.3

* [CHANGED] renamed project

## 1.0.2

* [FIXED] `inspectIntegrity` - failure because of invalid sql query result evaulation when mysql driver was used

## 1.0.1

* [FIXED] `inspectIntegrity` is accesible on query builder objects as well as on knex instance
* [FIXED] use `knex@0.16.3`

## 1.0.0

* [ADDED] initial release
