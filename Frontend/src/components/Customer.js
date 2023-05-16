import React from 'react'
import "../Style/Header.css";
import "../Style/Customers.css";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from "axios";
import Transfer from './Transfer';
const Customers = () => {
    const [cus, setCus] = useState({
        loading: true,
        results: [],
        err: null,
    });
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [modalDisplay, setModalDisplay] = useState(false);
    const [btn, btnClick] = useState(false);

    useEffect(() => {
        setCus({ ...cus, loading: true });
        Axios.get('http://localhost:3001/customers')
            .then(resp => {
                console.log(resp);
                setCus({
                    ...cus,
                    results: resp.data,
                    loading: false,
                    err: null,
                });
            })
            .catch(err => {
                setCus({
                    ...cus,
                    loading: false,
                    err: 'something went wrong, please try again later ! ',
                });
            });
    }, [])
    return (
        <>
            <header class="container" >
                <div class="head">
                    <div class="inner-width">
                        <h2 class="logoc">The Sparks Bank</h2>
                        <i class="menu-toggle-btn fas fa-bars"></i>
                        <nav class="navigation-menuc">
                            <Link to="/home">Home</Link>
                            <Link to="/customers"> Customers </Link>
                            <Link to="/trans"> Transactions</Link>
                        </nav>
                    </div>
                </div>
            </header>

            <div  >
                <div class="table-wrappers ">
                    <div class="table-title">
                        <div class="row">
                            <div class="col-sm-6">
                                <h2> Customers</h2>
                            </div>
                            <div class="col-sm-6">

                            </div>
                        </div>
                    </div>
                    <table class="table table-striped table-hover">
                        <thead>

                            <tr>

                                <th>Name</th>
                                <th>Email</th>
                                <th>Account Balance</th>


                                <th>Transfer Money</th>
                            </tr>

                        </thead>
                        <tbody>
                            {cus.results.map(d => (
                                <tr>
                                    <td>{d.name}</td>
                                    <td> {d.email}</td>
                                    <td> {d.accountbalance}</td>


                                    <td>
                                        <button class="button" key={d.name} onClick={() => {
                                            setModalDisplay(true)
                                            setUser(d)
                                            btnClick(true)
                                        }}>Transfer</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
            {btn ? (
                <Transfer
                    mainuser={user}
                    setModalDisplay={setModalDisplay}
                    modalDisplay={modalDisplay}
                />) : ("")}
        </>



    )
}

export default Customers