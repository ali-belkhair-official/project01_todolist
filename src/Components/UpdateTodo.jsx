import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components';

const Container = styled.div`
background-color: #0198e3 ;
width: 80vh ;
border-radius: 8px ;
padding: 30px;
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
export default function UpdateTodo({ todolist }) {
    const navigate = useNavigate();
    const { id } = useParams(); 

    const [newV, setNewV] = useState();

    function modifier() {
        const oldV = todolist.find((td) => td.id == id ) 
        oldV.todo = newV 
        console.log(oldV.todo , newV)
        navigate(-1)
    }

    return (
        <Container>
            <h1>Modifier todo numéro {id} :</h1>
            <Input type='text' onChange={(e) => setNewV(e.target.value)} />

            <button onClick={()=>modifier()}> BEDEL SMIYA ✔</button>

        </Container>
    )
}
