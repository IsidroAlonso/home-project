const { env: { REACT_APP_TEST_DB_URL: TEST_DB_URL } } = process
const listApartments = require('.')
const { errors: { ContentError } } = require('home-util')
const { database, models: { Apartment } } = require('home-data')

describe('logic - list', () => {

    it('should listing all the apartment items as object', () => {
        expect(listApartments()).toExist
        expect(typeof listApartments).toEqual('function')
        expect(typeof listApartments()).toEqual('object')
    })
})