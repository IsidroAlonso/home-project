import React from 'react'

export default function () {

    return <section className="search">
        <form>
            <input className="search__field" type="search" name="query" placeholder="Search your home" />
            <button className="search__button">🔍</button>
        </form>
        <button className="search__filters">Filters</button>
    </section>
}