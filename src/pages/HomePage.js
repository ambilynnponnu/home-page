import React from 'react'
import NavbarComponent from '../componets/home/navbar.component'
import HomeComponent from '../componets/home/home.component'
import ProductsComponent from '../componets/home/Products.component'
import Bestsellercomponent from '../componets/home/bestseller.component'
function HomePage() {
    return (
        <div>
            <NavbarComponent />
            <HomeComponent/>
            <ProductsComponent />
            <Bestsellercomponent />
        </div>
    )
}

export default HomePage
