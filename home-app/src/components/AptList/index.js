import React, { useState, useEffect } from 'react'
import { listApartments } from '../../logic'
import AptItem from '../AptItem'

export default function () {

    const [apartments, setApartments] = useState([])

    useEffect(() => {

        (async () => {
            const aptList = await listApartments()

            setApartments(aptList)
        })()
    })

    return <>
        {apartments.map(apartment => <section className="apartments" key={apartment.id}><AptItem apartment={apartment} /></section>)}
    </>
}