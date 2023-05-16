import React from 'react'
import Header from './Header';
import { Link } from 'react-router-dom';
import "../Style/Home.css";
const Home = () => {
    return (
        <>
            <Header />
            <h1 class="name">Our Services</h1>
            <Link to='/customers'>
                <div class="card"  >
                    <img src={require('../assets/cutomers.png')}></img>
                    <h2>View Customers</h2>
                </div>
            </Link>
            <Link to='/customers'>
                <div class="card2">
                    <img src={require('../assets/tranfer.png')}></img>
                    <h2>Transfer Money</h2>
                </div>
            </Link>
            <Link to='/trans'>
                <div class="card3">
                    <img src={require('../assets/transHistory.png')}></img>
                    <h2>view Transactions</h2>
                </div>
            </Link>
        </>
    )
}

export default Home