import React from 'react'

const Header = () => {
    return (
        <header>
        <nav class="fixed-top mt-2 ms-4">
            <ul class="nav">
                <li class="nav-item btn btn-danger mx-1">Home</li>
                <li class="nav-item btn btn-danger mx-1">About me</li>
                <li class="nav-item btn btn-danger mx-1">Star wars</li>
                <li class="nav-item btn btn-danger mx-1">Contact</li>
            </ul>
        </nav>
        <h1 class="text-center py-4">Luke Skywalker</h1>
    </header>
    )
}

export default Header;