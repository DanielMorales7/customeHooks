import { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [];

const init = () =>{
    return JSON.parse( localStorage.getItem('todos')) || [];
}

export const useTodos = () =>{

    const [todos, dispatch] = useReducer( todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    

    const handleMNewTodo = (todo) =>{
        const action = {
            type:'[TODO] Add Todo',
            payload: todo
        }

        dispatch(action);
    }

    const handleDelete = (id) =>{

        dispatch({
            type:'[TODO] Remove Todo',
            payload: id
        })
    }

    const handleToggle = (id) =>{
        
        dispatch({
            type: '[TODO] Complete Todo',
            payload: id
        })
        // console.log(`Hiciste Toggle al id ${id}`)
    }


    return{
        todos,
        todosCount: todos.length,
        pendingTodos: todos.filter( todo => !todo.done).length,
        handleMNewTodo,
        handleDelete,
        handleToggle
    }
    
}