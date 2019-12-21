const call = require('../../utils/call')
const { validate, errors: { CredentialsError, NotFoundError } } = require('home-util')
const API_URL = process.env.REACT_APP_API_URL

module.exports = function (query) {

    validate.string(query)
    validate.string.notVoid('query', query)

    return (async () => {
        const res = await call(`${API_URL}/apartments/search/${query}`, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json' 
            }
        })

        if (res.status === 200) {
            const apartments = JSON.parse(res.body)

            return apartments
        }
        
        if (res.status === 401) throw new CredentialsError(JSON.parse(res.body).message)
        
        if (res.status === 404) throw new NotFoundError(JSON.parse(res.body).message)

        throw new Error(JSON.parse(res.body).message)
    })()
}