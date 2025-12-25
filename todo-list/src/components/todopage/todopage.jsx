import React from "react";
import './todopage.css'
import calender from '../../assets/Vector.png'
import Dasborad from "../dasboard/dasborad";
const Todopage = () => {
    return (
        <>
            <center>
                <nav className="todo-nav">
                    <h1 className="todo-h1">TODO APP</h1>
                    <img src={calender} alt="" className="calender" />
                </nav>

                <div>
                    <Dasborad />
                </div>
            </center>
        </>
    )
}
export default Todopage;

