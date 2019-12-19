import React from 'react'

export default function () {

    let clickCounter = 0

    return <section className="search">
        <form>
            <input className="search__field" type="search" name="query" placeholder="Search your home" />
            <button className="search__button">🔍</button>
        </form>
        <button className="search__filters" onClick={event => {
            event.preventDefault()
            if (clickCounter % 2 == 1) {
                document.getElementsByClassName('hide')[0].style.display = 'none'
                clickCounter++
            } else {
                document.getElementsByClassName('hide')[0].style.display = 'block'
                clickCounter++
            }
        }}>Filters</button>
    </section>
}