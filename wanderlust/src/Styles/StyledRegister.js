import styled from 'styled-components';
import image from '../images/travel.jpg'

export const StyledRegister = styled.div`
    

width: 100vw;
    height: 100vh;
    background-image: url(${image}); 


.form-wrapper{
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
    padding: 5%;
}
    h1{
        padding: 10% 0 0 0;
        color: #333333;
    }

    form{
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: auto;
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