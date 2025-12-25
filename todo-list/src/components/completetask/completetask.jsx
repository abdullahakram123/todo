import React from "react";
import './completetask.css'
import Dasborad from "../dasboard/dasborad";
import Completedbtn from '../../assets/addtaskbtn.png'
import Dascomp from "../dasboard-comp/dascomp";
import { useNavigate } from "react-router-dom";
const Completetask = () => {
    const navigate = useNavigate();
    const back = () => {
        navigate('/')
    }
    return (
        <>
            <center>
                <nav className="comptask-nav">
                    <button onClick={back} className="compbtn">
                        <img src={Completedbtn} alt="" />
                    </button>
                    <h1 className="comp-h1">Completed Task</h1>
                </nav>

                <div>
                    <Dascomp />
                </div>
            </center>
        </>
    )
}
export default Completetask;