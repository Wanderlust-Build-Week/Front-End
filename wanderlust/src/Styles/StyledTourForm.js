import styled from 'styled-components';
import image from '../images/tourform.jpg'

export const StyledTourForm = styled.div`
height: 100vh;
background-image: url(${image}); 

h1{
    color: white;
    padding: 3%;
}
.tour-form{
    padding: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;

}

form{
    display: flex;
    flex-direction: column;
    width: 40%;
    justify-content: center;
    margin: auto;

    input{
        margin: 2%;
        padding: 2%;
    }

    textarea{
        margin: 2%;
        padding: 2%;
    }

    select{
        margin: 2%;
        padding: 2%;
    }
   
    button {
        width: 150px;
        margin: 2%;
        color:black;
        background-color: white;
        border: 1px solid #e9ecef;


        &:hover {
            background-color: #3878b2;
            color: white;
            border: none;
        }
    }

    ::nth-child(3){
        height: 300px;
    }
}
`