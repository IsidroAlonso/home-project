const { env: { REACT_APP_TEST_DB_URL: TEST_DB_URL } } = process
const searchApartment = require('.')
const { errors: { NotFoundError } } = require('home-util')
const { database, models: { Apartment } } = require('home-data')

describe('logic - search', () => {
    beforeAll(() => database.connect(TEST_DB_URL))

    it('should succeed on searching the correct apartment based on the title', async() => {
        const query = 'Cool'

        const apartments = await searchApartment(query)

        expect(apartments).toExist
        expect(apartments.length).toBeGreaterThan(0)
        apartments.forEach(apartment => {
            expect(typeof apartment.title).toEqual('string')
        })
    })

    it('should succeed on searching the correct apartment based on the title - ignoring upper case', async() => {
        const query = 'WONDERFUL'

        const apartments = await searchApartment(query)

        expect(apartments).toExist
        expect(apartments.length).toBeGreaterThan(0)
        apartments.forEach(apartment => {
            expect(typeof apartment.title).toEqual('string')
        })
    })

    it('should succeed on searching the correct apartment based on the title - ignoring lower case', async() => {
        const query = 'nothing'

        const apartments = await searchApartment(query)

        expect(apartments).toExist
        expect(apartments.length).toBeGreaterThan(0)
        apartments.forEach(apartment => {
            expect(typeof apartment.title).toEqual('string')
        })
    })

    it('should fail on searching a wrong query', async() => {
        const query = 'wewewewewewewewew'

        try {
            await searchApartment(query)

            throw Error('should not reach this point')
        } catch (error) {
            expect(error).toExist
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toEqual(`apartment ${query} not found`)
        }
    })

    it('should fail on incorrect input apartment type', () => {
        expect(() => searchApartment(1)).toThrow(TypeError, '1 is not a string')
        expect(() => searchApartment(true)).toThrow(TypeError, 'true is not a string')
        expect(() => searchApartment([])).toThrow(TypeError, ' is not a string')
        expect(() => searchApartment({})).toThrow(TypeError, '[object Object] is not a string')
        expect(() => searchApartment(undefined)).toThrow(TypeError, 'undefined is not a string')
        expect(() => searchApartment(null)).toThrow(TypeError, 'null is not a string')
    })
})