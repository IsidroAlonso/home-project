const { validate, errors: { NotFoundError } } = require('home-util')
const { models: { Apartment } } = require('home-data')

module.exports = function (query) {
    validate.string(query)
    validate.string.notVoid('query', query)

    return (async () => {

        const apartments = await Apartment.find({"title": {$regex : `.*${query}*`, $options: 'i'}}).lean()

        if (apartments.length === 0) throw new NotFoundError(`apartment ${query} not found`)

        return apartments
    })()
}
