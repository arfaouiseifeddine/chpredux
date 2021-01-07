import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions/todoActions'

const Addtodo =() => {
    const [text,setText]=useState("")
    
    const dispatch = useDispatch();
    const add =()=>{
        dispatch(addTodo({id: Math.random(),isComplete:false,text:text}))
        setText("")
    }

    return (
        <div>
            <input type="text" value={text} onChange ={(e) => setText(e.target.value)} />
            <button onClick ={add} >Add</button>
        </div>
    )
}
export default Addtodo;