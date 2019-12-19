import React from 'react'
import { withRouter } from 'react-router-dom'

export default withRouter(function ({ /*apartment: { _id: aptId, title, price, sqm, bedrooms, bathrooms }*/ }) {
    return <section className="apartment">
        <img src="img/dummy.png" alt="apartment" />
        <h1 className="apartment__price">299,000€</h1>
        <h1 className="apartment__title">Nice apartment in Fake Street</h1>
        <span className="apartment__items">
            <p className="apartment__sqm">199m²</p>
            <p className="apartment__bedrooms">3 rooms</p>
            <p className="apartment__bathrooms">2 baths</p>
        </span>
    </section>
})