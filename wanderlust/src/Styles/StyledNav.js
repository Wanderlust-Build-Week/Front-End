import styled from 'styled-components';

export const StyledNav = styled.div`
    
    width: 100%;

    .NavBar {
        display: flex;
        background-color: rgba(255, 255, 255, 0.6);
        height: 80px;
        position: fixed;
        width: 100%;
    }
    .logo{
        width: 30%;
    }
    img{
        width: 34%;
        margin: 1%;
    }

    .menu-list-wrapper{
        display: flex;
    align-items: center;
        width: 80%;
        margin-top: 15px;
    }
    .menu-items{
        display: flex;
        justify-content: space-evenly;
        align-content: center;
        width: 100%;
        list-style-type: none;
        

        
    }

    .menu-link{
        text-decoration: none;
        color: #333333;

        &:hover {
            
            color: #3878b2;
            
        }
    }
`


