const path       = require('path');
const m          = require('module');
const sinon      = require('sinon');
const chai       = require('chai');
const sinonChai  = require("sinon-chai");
const Knex       = require('knex');
const KnexRunner = require('knex/lib/runner');
const Promise    = require('bluebird');

var knexBuilder = require('../index.js');

var expect = chai.expect;

chai.use(sinonChai);
chai.should();

describe('knexBuilder', function() {
    before(function() {
        this.runner = sinon.stub(KnexRunner.prototype, 'query');
        this.ensureConnection = sinon.stub(KnexRunner.prototype, 'ensureConnection').resolves({});
    });

    beforeEach(function() {
        this.runner.reset();
    });

    after(function() {
        this.runner.restore();
        this.ensureConnection.restore();
    });

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

    describe('inspectIntegrity', function() {
        before(function() {
            this.knex = knexBuilder({
                connection: {
                    host: 'localhost',
                    db: 'test',
                    username: 'root',
                    password: 'test',
                },
                version: '5.6.0',
                client: 'postgres'
            });
        });

        beforeEach(function() {
            this.runner.resolves(Promise.resolve({rows: [{
                server_version: '5.6.0'
            }]}));
        });

        it('should return resolved promise with true', function() {
            return this.knex.inspectIntegrity().then(function(result) {
                expect(result).to.be.equal(true);
            });
        });

        it('should return resolved promise with true (2)', function() {
            return this.knex.withSchema('public').inspectIntegrity().then(function(result) {
                expect(result).to.be.equal(true);
            });
        });

        it('should return resolved promise with true (3)', function() {
            return this.knex('users').inspectIntegrity().then(function(result) {
                expect(result).to.be.equal(true);
            });
        });
    });
});
