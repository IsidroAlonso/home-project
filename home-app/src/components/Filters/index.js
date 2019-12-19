import React from 'react'

export default function () {

    return <span className="hide"><section className="filters">
        <h1 className="filters__title">Price</h1>
        <span className="price">
            <input className="price__field" type="number" name="price" min="1000" max="999900" step="100" placeholder="Min price" />
            -
            <input className="price__field" type="number" name="price" min="1000" max="999900" step="100" placeholder="Max price" />
        </span>
        <h1 className="filters__title">Size</h1>
        <span className="size">
            <input className="size__field" type="number" name="size" min="10" max="999" placeholder="Min size" />
            -
            <input className="size__field" type="number" name="size" min="10" max="999" placeholder="Max size" />
        </span>
        <h1 className="filters__title">Rooms</h1>
        <span className="rooms">
            1+ <input className="rooms__range" type="range" min="1" max="5" name="rooms" value="1" /> 5+
        </span>
        <button className="filters__button">Watch apartments</button>
    </section></span>
}