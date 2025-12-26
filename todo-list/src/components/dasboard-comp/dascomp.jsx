import React, { useEffect, useState } from "react";
import './dascomp.css'
const Dascomp = () => {
    const [completeTodos, setCompleteTodos] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/completed")
            .then(res => res.json())
            .then(result => {
                if (result.data) {
                    setCompleteTodos(result.data);
                }
            });
    }, []);
    return (
        <>
            <center className="dascomp-body">
                {completeTodos.map((items) => (
                    <div className="dascopm-list" key={items._id}>
                        <div className="dascopm-title">
                            <h5>{items.Title}</h5>
                            <h6>{items.Detail}</h6>
                        </div>
                    </div>
                ))}
            </center>
        </>
    )
}
export default Dascomp;