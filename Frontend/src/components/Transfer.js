
import React from 'react'
import "../Style/Transfer.css";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from "axios";
const Transfer = ({ mainuser, setModalDisplay, modalDisplay }) => {
    const [user, setUser] = useState({ to: null, amount: "" });

    const navigate = useNavigate();
    let name;
    let value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }
    const [cus, setCus] = useState({
        loading: true,
        results: [],
        err: null,
    });
    const getCustomer = async () => {
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

    }
    useEffect(() => {
        getCustomer()
    }, [])

    const TransferData = async (e) => {
        e.preventDefault();
        const { from, to, amount } = user;

        await Axios.post('http://localhost:3001/transfers',
            {

                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },

                from: mainuser.name, to: to, amount: amount


            })
            .then((tsdata) => {
                if (tsdata.status === 500) {
                    window.alert('Trafer not successfull');
                }

                else if (amount === 0 || to === null || from === null) {
                    alert('Please fill the all data')

                }
                else if (from === to) {
                    alert('Receiver Name must be diffferent')

                }
                else {
                    window.alert("Transfer Successfull");

                }
                setModalDisplay(false)
            });


    }
    const onModalClose = () => {
        setUser({
            to: null,
            amount: 0,
        })
        setModalDisplay(false)
        navigate('/customers')
    }

    return (
        <div id="add" className={` transfer-form ${modalDisplay ? 'Show' : 'Hide'}`} >
            <div class="modal-dialog">
                <div class="modal-content">
                    <form  >
                        <div class="modal-header headadd">
                            <h4 class="modal-title"> Transfer</h4>
                            <button type="button" class="close btnx" data-dismiss="modal" aria-hidden="true" onClick={onModalClose} >&times;</button>
                        </div>
                        <hr />
                        <div class="modal-body " >
                            <div class="form-group bodyadd" sytle={{ alignItems: 'center' }}>
                                <p style={{ marginLeft: 50 }}>  {mainuser.name}</p>


                            </div>
                            <div class="form-group bodyadd" >
                                <p sytle={{ alignItems: 'center' }}> {mainuser.email}</p>


                            </div>
                            <div class="form-group bodyadd">
                                <h3>Balance   {mainuser.accountbalance}</h3>

                            </div>
                        </div>
                        <div>
                            <select class="form-group bodyadd" defaultValue='DEFAULT' id="to" name='to' onChange={handleInputs}>
                                <option value='DEFAULT' disabled>
                                    - Select a Receiver -
                                </option>
                                {cus.results.map(d => (
                                    <option id="cust_name" key={d._id} value={user.to}>
                                        {d.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <input class="form-group bodyadd" type="number" name="amount" id="amount" autoComplete="off"
                                placeholder="Enter Amount"
                                value={user.amount}
                                onChange={handleInputs} />
                        </div>
                        <button class="button" style={{ marginLeft: 150, width: 100, height: 50 }} type="submit" id="submit" onClick={TransferData} >Proceed</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Transfer;