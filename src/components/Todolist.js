import React from 'react'
import { useSelector } from 'react-redux';
import Todo from './Todo';
const Todolist =() => {
    const list = useSelector(state => state.todos);
    return (
        <div>
            
        {
            list.map(el => <Todo key={el.id} el={el} />)
        }
        </div>
    )
}
export default Todolist;