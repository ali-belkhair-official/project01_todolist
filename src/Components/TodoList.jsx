import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div`
background-color: #0198e3 ;
width: 80vh ;
border-radius: 8px ;
padding: 20px;
`

const Input = styled.input`
    border: none ;
    border-radius: 5px ;
    width:300px ;
    height: 30px;
    background-color: #7bcdf6;
    margin : 0px 5px  ;
    color: white;
    font-size: large;
    font-weight: 600;
`
const Todo = styled.div`
background-color: #035050;
max-width: 350px;
font-size: large;
font-family: sans-serif ;
font-weight: 700;
display: flex;
align-items: center;
justify-content: space-around;
margin:10px 10px;
padding: 12px;
border-radius: 4px;
&:hover{
border-radius: 5px;
background-color: #007474;
}
`

export default function TodoList( { todolist , setTodolist } ) {
    // const [listDo, setListDo] = useState([...todolist])
    const [newTodo, setNewTodo] = useState();

    function ajouter() {
        newTodo != null ? setTodolist([...todolist, { id: todolist.length + 1, todo: newTodo }]) : false;
    }
    const supprimer = (ids) => {

        setTodolist(todolist.filter(td => td.id !== ids));

    }
    return (
        <Container>

            <h1>TodoList</h1>

            <form onSubmit={(e) => e.preventDefault()} >
                <div>
                    <Input type="text" onChange={(e) => setNewTodo(e.target.value)} />
                    <button onClick={() => ajouter()} > ➕ </button>
                </div>
                <div>
                    {
                        todolist.map((td, index) => {
                            return (
                                <Todo key={index}>
                                    {td.id}: {td.todo}
                                    <div>
                                        <button onClick={(e) => supprimer(td.id)}> ❌ </button>
                                        <Link to={`/update/${td.id}`} >
                                            <button> 🔄 </button>
                                        </Link>
                                    </div>
                                </Todo>
                            )
                        })
                    }
                </div>
            </form>

        </Container>
    )
}
