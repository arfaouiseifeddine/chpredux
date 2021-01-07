import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { completeTodo, deleteTodo, editTodo } from '../redux/actions/todoActions';

const Todo = ({el}) =>  {
    const [editText,setEdittext]= useState(el.text);
    const dispatch = useDispatch()
    const editt=()=>{
        dispatch(editTodo({index:el.id ,editText:editText}))
    }
    const deletee =()=>{
        dispatch(deleteTodo(el.id))
    }
    const complete = () =>{
        dispatch(completeTodo(el.id))
    }
    
    
    return (
        <>
        {
            el.editt?(
                <div>
                    <input type="text" value ={editText} onChange={(e)=> setEdittext(e.target.value)}/>
                    <button>Cancel</button>
                    <button onClick={editt}>Save</button>
                </div>
            ) : (
                <div>
        
                <p style={el.complete? {textDecoration:"Line-through"}: {textDecoration:"none"}}>{el.text}</p>
                <button onClick={deletee} >delete</button>
                <button onClick ={complete}>{el.complete? "undo" : "complet"}</button>
                <button onClick={el.editt}>edit</button>
            
    </div>        
            )
        }
        </>
        
    )
}
export default Todo;