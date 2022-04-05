import styled from 'styled-components'
import {Link as LinkScroll} from 'react-scroll'

export const Nav = styled.nav`
background-image: linear-gradient(to left, #080808,#222222,#080808);
position: fixed;
top: 0; 
display: flex;
justify-content: center;
align-items: center;
flex-wrap: nowrap; 
width: 100%; 
height: 80px;
text-align: center;
z-index: 998
`

export const NavBarContainer = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
flex-wrap: nowrap; 
width: 1300px;
height: 80px;
text-align: center;
padding: 0 25px;

@media screen and (max-width: 992px) {
    transition: 400ms all ease;
    width: 100%;
}
`

export const NavLogo = styled.div`
justify-content: flex-start;
color: white; 
line-height: 80px;
cursor: pointer;
display: flex;

:hover{
    color: #B8AAB9;
    transition: 200 ease-in-out;
}
`

export const NavMenu =styled.div`
justify-content: center;
line-height: 80px;
display: flex;

@media screen and (max-width: 992px) {
    display: none;
}

`

export const NavLink =styled(LinkScroll)`
text-decoration: none;
color: white;
display: flex;
cursor: pointer;
align-items: center;
padding: 0 30px;
height: 100%;
margin: 0 0;
// line-height: 80px;

& . active {
    border-bottom: 2px solid #B8AAB9;
    color: red;
}
:hover{
    color: #B8AAB9;
    transition: 200 ease-in-out;
}

`

export const ResumeWrapper = styled.div`
justify-content: flex-end;
line-height: 80px;
@media screen and (max-width: 992px) {
    display: none;
}
`

export const ResumeBtn = styled.button`
background: none;
padding: 4px 8px;
margin: 0 0;
color: white;
border: 2px solid white;
border-radius: 3px;
cursor: pointer;
:hover{
    border: 3px solid #B8AAB9;
}
`

export const NavIconBox = styled.div `
display: none;

@media screen and (max-width: 992px) {
    display: block;
    line-height: 80px; 
    position: absolute;
    top: 0;
    right: 0;
    color: white;
    padding-right: 30px;
    font-size: 30px;
    cursor: pointer
    :hover{
        color: #B8AAB9;
        transition: 200 ease-in-out;
    }
}`