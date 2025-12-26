import React, { useEffect, useState } from "react";
import './addtodo.css'
import addbtn from '../../assets/addtaskbtn.png'
import {useNavigate } from "react-router-dom";
const Addtodo = () => {
    const navigate = useNavigate();
    const back = () => {
        console.log('back');
        navigate('/')
    };
    const [list ,SetList]=useState({
        Title:"",
        Detail:""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        SetList((prev) => ({
            ...prev,
            [name]: value
        }));
        console.log( name, value);
    };
    const submitDetails = async (event) => {
        event.preventDefault();
        console.log("Sending array of todos:", list);
        const response = await fetch("http://localhost:5000/dataget", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(list)
        });
        navigate("/")
        const result = await response.json()
        console.log(result);
    };
    return (
        <>
            <center>
                <nav className="addtodo-nav">
                    <button  type="button" onClick={back} className="addbtn">
                        <img src={addbtn} alt="" />
                    </button>
                    <h1 className="addtodo-h1">Add Task</h1>
                </nav>
                <form className="inputs" onSubmit={submitDetails}>
                    <div className="data-inputs">
                    <input type="text" name="Title" id="" onChange={handleChange} value={list.Title} placeholder="Title" className="title-input" />
                    <input type="text" name="Detail" id="" onChange={handleChange} value={list.Detail} placeholder="Detail" className="detail-input" />
                    </div>
                    <input
                        type="submit" value="ADD"
                        className="add-btn"
                    />
                </form>
            </center>
        </>
    )
}
export default Addtodo;