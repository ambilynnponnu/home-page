import React from 'react'
import NavbarComponent from '../componets/home/navbar.component'
import HomeComponent from '../componets/home/home.component'
import ProductsComponent from '../componets/home/Products.component'
import Bestsellercomponent from '../componets/home/bestseller.component'
import Bannercomponent from '../componets/home/banner.component'
import Footercomponent from '../componets/home/footer.component'
import Vegetablescomponent from '../componets/home/vegetables.component'
function HomePage() {
    return (
        <div>
            <NavbarComponent />
            <HomeComponent/>
            <ProductsComponent />
            <Bannercomponent />
            <Vegetablescomponent />
            <Bestsellercomponent />
            <Footercomponent />
        </div>
    )
}

export default HomePage
