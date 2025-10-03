import React from 'react'
import "./Home.css"
import Card from '../Card/Card'

function Home({ selectedCategory = 'trending' }){
    return(
        <div id='homr'>
            <Card selectedCategory={selectedCategory}/>
        </div>
    )
}

export default Home
