const path      = require('path');
const m         = require('module');
const sinon     = require('sinon');
const chai      = require('chai');
const sinonChai = require("sinon-chai");
const Knex      = require('knex');

var knexBuilder = require('../index.js');

var expect = chai.expect;

chai.use(sinonChai);
chai.should();

describe('knexBuilder', function() {
    it('should return new Knex object', function() {
        let knex = knexBuilder({
            connection: {
                host: 'localhost',
                db: 'test',
                username: 'root',
            },
            dialect: 'postgres'
        });

        knex.should.have.deep.property('client');
    });

    it('should build new Knex object with provided options', function() {

        const options = {
            connection: {
                host: 'localhost',
                db: 'test',
                username: 'root',
                password: 'test',
            },
            dialect: 'postgres',
            pool: {
                min: 10,
                max: 100,
                idle: 10
            }
        };

        const knex = knexBuilder(options);

        knex.client.config.should.be.eql({
            pool: options.pool,
            debug: false,
            connection: {
                host: 'localhost',
                database: 'test',
                user: 'root',
                password: 'test'
            },
            client: 'postgres'
        });
    });
});
