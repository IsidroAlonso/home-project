const { Router } = require('express')
const { searchApartment, listApartments } = require('../../logic')
const { env: { SECRET } } = process
const bodyParser = require('body-parser')
const { errors: { NotFoundError } } = require('home-util')

const jsonBodyParser = bodyParser.json()

const router = Router()

router.get('/getapts', (req, res) => {
    try {
        listApartments()
            .then(apartments => res.json(apartments))
            .catch(error => {
                const { message } = error

                if (error instanceof NotFoundError)
                    return res.status(404).json({ message })

                res.status(500).json({ message })
            })
    } catch (error) {
        const { message } = error

        res.status(400).json({ message })
    }
})

router.get('/search/:query', jsonBodyParser, (req, res) => {
    try {
        let { params: { query } } = req

        searchApartment(query)
            .then(apartments => res.json(apartments))
            .catch(error => {
                const { message } = error

                if (error instanceof NotFoundError)
                    return res.status(404).json({ message })

                res.status(500).json({ message })
            })
    } catch (error) {
        const { message } = error

        res.status(400).json({ message })
    }
})

module.exports = router