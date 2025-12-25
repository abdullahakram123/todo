import React, { useState } from "react";
import './edittodo.css'
import addbtn from '../../assets/addtaskbtn.png'
import { useNavigate, useParams } from "react-router-dom";
const Edittodo = () => {
    const navigate = useNavigate();
    const back = () => {
        console.log('back');
        navigate('/')
    }
    const { id } = useParams();
    console.log("EDIT ID:", id);
    const [addupdate, setAddupdate] = useState('')
    const [detailupdate, setDetailupdate] = useState('')
    const taskupdate = (event) => {
        setAddupdate(event.target.value)
        console.log('this is the updated value', event.target.value);
    };
    const delupdate = (event) => {
        setDetailupdate(event.target.value)
        console.log('this this the detail updated value', event.target.value);
    };
    const clear = () => {
        setAddupdate('')
        setDetailupdate('')
    };
    const Updatetodo = async (e) => {
        e.preventDefault();
        const res = await fetch(`http://localhost:5000/update/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                Title: addupdate,
                Detail: detailupdate,
            }),

        });
        const data = await res.json();
        console.log("updated data", data);
        navigate('/');
    }
    return (
        <>
            <center>
                <nav className="edittodo-nav">
                    <button onClick={back} className="editbtn">
                        <img src={addbtn} alt="" />
                    </button>
                    <h1 className="edittodo-h1">Edit Task</h1>
                </nav>
                <form className="inputs" onSubmit={Updatetodo}>
                    <input type="text" name="" id="" onChange={taskupdate} value={addupdate} placeholder="Title" className="title-input" />
                    <input type="text" name="" id="" onChange={delupdate} value={detailupdate} placeholder="Detail" className="detail-input" />
                    <div className="btns">
                        <input className="update" type="submit" value="Update" />
                        <input className="cancel" type="button" value="Cancel" onClick={clear} />
                    </div>
                </form>
            </center>
        </>
    )
}
export default Edittodo;