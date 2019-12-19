import React from 'react'
import './index.sass'
import Header from '../Header'
import Filters from '../Filters'
import AptList from '../AptList'

export default function () {

    return <>
        <Header />
        <main>
            <Filters />
            <AptList />
        </main>
    </>
}