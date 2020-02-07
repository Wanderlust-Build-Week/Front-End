import styled from 'styled-components';

export const StyledSearchBar = styled.div`
    text-align: center;

    .searchWrapper{
        width: 80%;
         border: 1px solid #e9ecef;
    }

        input{
           
        }
        input::placeholder {
            color: grey;
            font-size: 1.5em;
            padding: 1%;
        }

        button {background: white;
            border: none;
            padding: 10px 20px;
            color: gray;
            height: 50px;
            border-bottom-right-radius: 10px;
            border-top-right-radius: 10px;
        }}


        .search-form{
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: center;
    position: absolute;
        left: 30%;
        top: 50%;

}

button{
    height: 50px;
    width: 50px;
    background-color: #333333;
    color: white;
    border: none;
}

    .search-bar{
        z-index: 2;
        border: none;
        margin-top: 20px;
        width: 80%;
        height: 50px;
        border: none
        padding: 10px;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
       
    }
    input.searchBar{
        width: 80%;
        height: 50px;
        padding: 2%;
    }
    
    
    input.searchBar::placeholder{
        
        font-size: 1.3rem;
    }
    `;