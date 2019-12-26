require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const searchApartment = require('.')
const { errors: { NotFoundError } } = require('home-util')
const { database, models: { Apartment } } = require('home-data')

describe('logic - search', () => {
    before(() => database.connect(TEST_DB_URL))

    it('should succeed on searching the correct apartment based on the title', async() => {
        const query = 'Cool'

        const apartments = await searchApartment(query)

        expect(apartments).to.exist
        expect(apartments.length).to.be.greaterThan(0)
        apartments.forEach(apartment => {
            expect(typeof apartment.title).to.equal('string')
        })
    })

    it('should succeed on searching the correct apartment based on the title - ignoring upper case', async() => {
        const query = 'WONDERFUL'

        const apartments = await searchApartment(query)

        expect(apartments).to.exist
        expect(apartments.length).to.be.greaterThan(0)
        apartments.forEach(apartment => {
            expect(typeof apartment.title).to.equal('string')
        })
    })

    it('should succeed on searching the correct apartment based on the title - ignoring lower case', async() => {
        const query = 'nothing'

        const apartments = await searchApartment(query)

        expect(apartments).to.exist
        expect(apartments.length).to.be.greaterThan(0)
        apartments.forEach(apartment => {
            expect(typeof apartment.title).to.equal('string')
        })
    })

    it('should fail on searching a wrong query', async() => {
        const query = 'wewewewewewewewew'

        try {
            await searchApartment(query)

            throw Error('should not reach this point')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.an.instanceOf(NotFoundError)
            expect(error.message).to.equal(`apartment ${query} not found`)
        }
    })

    it('should fail on incorrect input apartment type', () => {
        expect(() => searchApartment(1)).to.throw(TypeError, '1 is not a string')
        expect(() => searchApartment(true)).to.throw(TypeError, 'true is not a string')
        expect(() => searchApartment([])).to.throw(TypeError, ' is not a string')
        expect(() => searchApartment({})).to.throw(TypeError, '[object Object] is not a string')
        expect(() => searchApartment(undefined)).to.throw(TypeError, 'undefined is not a string')
        expect(() => searchApartment(null)).to.throw(TypeError, 'null is not a string')
    })
})