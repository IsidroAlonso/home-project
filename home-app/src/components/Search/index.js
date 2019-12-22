import React, { useState } from 'react'
import { searchApartment } from '../../logic'
import Filters from '../Filters'
import AptItem from '../AptItem'
import Feedback from '../Feedback'

export default function () {

    const [apartments, setApartments] = useState([])

    const [error, setError] = useState()

    async function handleSearch(query) {
        try {

            const apartments = await searchApartment(query)

            setApartments(apartments)
        } catch (error) {
                setError(error.message)
                setTimeout(function(){ window.location.reload() }, 1000)
        }
    }

    let clickCounter = 0

    return <><section className="search">
        <form onSubmit={event => {
            event.preventDefault()

            document.getElementsByClassName('apartmentsall')[0].style.display = 'none'

            const query = event.target.query.value

            handleSearch(query)
        }}>
            <input className="search__field" type="search" name="query" placeholder="Search your home" />
            <button className="search__button">🔍</button>
        </form>
        <button className="search__filters" onClick={event => {
            event.preventDefault()
            if (clickCounter % 2 === 1) {
                document.getElementsByClassName('hide')[0].style.display = 'none'
                clickCounter++
            } else {
                document.getElementsByClassName('hide')[0].style.display = 'block'
                clickCounter++
            }
        }}>Filters</button>
    </section>
        <Filters />
        {error && <Feedback message={error} />}
        {apartments.map(apartment => <section className="apartments" key={apartment.id}><AptItem apartment={apartment} /></section>)}
    </>
}