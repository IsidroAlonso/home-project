import React from 'react'

export default function ({ apartment: { _id: aptId, title, price, sqm, bedrooms, bathrooms } }) {
    return <section className="apartment">
        <img src="img/dummy.png" alt="apartment" />
        <h1 className="apartment__price">{title}</h1>
        <h1 className="apartment__title">{price}</h1>
        <span className="apartment__items">
            <p className="apartment__sqm">{sqm}m²</p>
            <p className="apartment__bedrooms">{bedrooms} rooms</p>
            <p className="apartment__bathrooms">{bathrooms} baths</p>
        </span>
    </section>
}