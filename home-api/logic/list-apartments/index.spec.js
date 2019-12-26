require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const listApartments = require('.')
const { errors: { ContentError } } = require('home-util')
const { database, models: { Apartment } } = require('home-data')

describe('logic - list', () => {

    it('should listing all the apartment items as object', () => {
        expect(listApartments()).to.exist
        expect(typeof listApartments).to.equal('function')
        expect(typeof listApartments()).to.equal('object')
    })
})