import React from 'react'
import "../Style/Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header   >
            <div class="inner-width">
                <h2 class="logo">The Sparks Bank</h2>
                <i class="menu-toggle-btn fas fa-bars"></i>
                <nav class="navigation-menu">
                    <Link to="/home">Home</Link>
                    <Link to="/customers"> Customers </Link>
                    <Link to="/trans"> Transactions</Link>
                </nav>
            </div>

            <img id="bank" src={require('../assets/img.jpg')}></img>
            <p class="centered"><b>Banking System </b><br /><br /><br />you can transfer or recieve any amount of money safely over the world</p>
        </header>

    )
}

export default Header