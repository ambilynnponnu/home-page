import React from 'react'
import NavbarComponent from '../componets/home/navbar.component'
import HomeComponent from '../componets/home/home.component'
import Todo from '../componets/home/Todo.component'
function HomePage() {
    return (
        <div>
            <NavbarComponent />
            <HomeComponent/>
            {/* <Todo/> */}
        </div>
    )
}

export default HomePage
