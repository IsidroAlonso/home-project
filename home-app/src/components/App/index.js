import React from 'react'
import './index.sass'
import Header from '../Header'
import Filters from '../Filters'

export default function () {

    return <>
        <Header />
        <main>
            <Filters />
        </main>
    </>
}