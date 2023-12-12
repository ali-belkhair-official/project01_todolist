import React from 'react'
import styled from 'styled-components'

const NotFound = styled.h1`
color: red;
background-color: #5c0000;
font-family: cursive;
font-size: 20vh ;
font-weight: 600;
border: dashed red  2px;
border-radius: 10px ;
`

export default function NotFounde() {
  return (
    <div>
        <NotFound>
            Not Found this page
             <br />
            Ereure 404
        </NotFound>
    </div>
  )
}
