import styled from 'styled-components'

export const Button = styled.button`
background: none;
font-size: 16px;
margin: 5px;
color: white;
padding: 4px 8px;
border: 2px solid white;
border-radius: 3px;
display: block;
text-decoration: none;
font: inherit;
cursor: pointer;
box-shadow: 2px 2px 10px #aaaaaa;



:hover{
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    border: 3px solid #B8AAB9;
    color: #B8AAB9;
    transition: 200 ease-in-out;
  }
`