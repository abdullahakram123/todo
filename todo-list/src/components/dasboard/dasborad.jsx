import React, { useEffect, useState } from "react";
import './dasborad.css'
import pen from '../../assets/pen.png'
import bin from '../../assets/bin.png'
import tick from '../../assets/tick.png'
import plus from '../../assets/plus.png'
import all from '../../assets/all.png'
import comp from '../../assets/comp.png'
import {useNavigate } from "react-router-dom";
const Dasborad = () => {
    const navigate = useNavigate();
    const Add = () => {
        navigate('/addtodo')
    };
    const Edit = (id) => {
        navigate(`/edit/${id}`);
    };
    const Complete = () => {
        navigate('/completetask')
    };
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/dashboard")
            .then(res => res.json())
            .then(result => {
                setTodos(result.data);
            })
    }, []);
    console.log(todos);
    // DELETE
    const deleteTodo = async (id) => {
        await fetch(`http://localhost:5000/delete/${id}`, {
            method: "DELETE",
        });
        setTodos(prevTodos =>
            prevTodos.filter(todo => todo._id !== id)
        );
    };
    // COMPLETE
    const completeTodos = async (id) => {
        console.log('Completing task ID:', id);
        const response = await fetch(`http://localhost:5000/complete-task/${id}`);
        if (response.ok) {
            const result = await response.json();
            console.log('Task completed:', result);
            setTodos(prevTodos => prevTodos.filter(todo => todo._id !== id));
            alert("Task Marked As Completed")
        } else {
            alert('Error completing task');
        }
    }
    return (
        <>
            <center className="das-body">
                {todos.map((items) => (
                    <ul className="das-list" key={items._id}>
                        <li className="title">
                            <h5>{items.Title}</h5>
                            <h6>{items.Detail}</h6>
                        </li>
                        <li className="das-buttons">
                            <button type="button" onClick={()=>Edit(items._id)} className="pen">
                                <img src={pen} alt="" />
                            </button>
                            <button type="button" className="bin" onClick={() => deleteTodo(items._id)}>
                                <img src={bin} alt="" />
                            </button>
                            <button className="tick" onClick={() => completeTodos(items._id)}>
                                <img src={tick} alt="" />
                            </button>
                        </li>
                    </ul>
                ))}
                <button type="button" className="plus" onClick={Add}>
                    <img src={plus} alt="" />
                </button>
                <div className="das-footer">
                    <div className="all">
                        <img src={all} alt="" />
                        <h6>All</h6>
                    </div>
                    <button onClick={Complete} className="comp">
                        <img src={comp} alt="" />
                        <h6>Completed</h6>
                    </button>
                </div>
            </center>
        </>
    )
}
export default Dasborad;