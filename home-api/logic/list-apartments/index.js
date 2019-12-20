const { models: { Apartment } } = require('home-data')

module.exports = function () {

    return (async () => {

        const apartments = await Apartment.find().lean()

        return apartments
    })()
}
