import styled from 'styled-components';

export const StyledNav = styled.div`
    


    .NavBar {
        display: flex;
        background-color: rgba(255, 255, 255, 0.6);
        height: 80px;
        position: fixed;
    }
    .logo{
        width: 30%;
    }
    img{
        width:30 %;
    }

    .menu-list-wrapper{
        display: flex;
    align-items: center;
        width: 80%;
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

    }
`