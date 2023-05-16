import React from 'react'
import "../Style/Header.css";
import "../Style/Customers.css";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from "axios";
const Transaction = () => {
    const [transer, settranser] = useState({
        loading: true,
        results: [],
        err: null,
    });
    useEffect(() => {
        settranser({ ...transer, loading: true });
        Axios.get('http://localhost:3001/transactions')
            .then(resp => {
                console.log(resp);
                settranser({
                    ...transer,
                    results: resp.data,
                    loading: false,
                    err: null,
                });
            })
            .catch(err => {
                settranser({
                    ...transer,
                    loading: false,
                    err: 'something went wrong, please try again later ! ',
                });
            });
    }, [])

    const formatDate = date => {

        return new Date(date).toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' })
    }
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
                                <h2> Transactions</h2>
                            </div>
                            <div class="col-sm-6">

                            </div>
                        </div>
                    </div>
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>From</th>
                                <th>To</th>
                                <th> Amount</th>
                                <th> Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transer.results.map(d => (
                                <tr>
                                    <td>{d.from.name}</td>
                                    <td> {d.to.name}</td>
                                    <td> {d.amount}</td>
                                    <td>{formatDate(d.date)}</td>


                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>

        </>



    )
}

export default Transaction