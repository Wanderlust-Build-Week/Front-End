import styled from 'styled-components';
import image from '../images/boat.jpg'

export const StyledLogin = styled.div`
    

width: 100vw;
    height: 100vh;
    background-image: url(${image}); 

    h1{
        color: white;
    }

    .login-wrapper{
    width: 50%;
   margin: auto;
   padding: 10%;
 
    }
    .loginForm{
        display: flex;
        flex-direction: column;
        justify-content: center;
        
    }

    input{
        margin: 2%;
        padding: 2%;
    }

    button{
        margin: 2%;
        width: 100px;
        color:black;
        background-color: white;

        &:hover {
            background-color: #3878b2;
            color: white;
    }
    
`