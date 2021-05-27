import { SearchIcon } from '@primer/octicons-react';
import styled from 'styled-components';

const SearchBar = () => {
    return (
        <SearchWrapper>
            <input type="text" placeholder="Search Templates" />
            <span>
                <SearchIcon/>
            </span>
        </SearchWrapper>
    );
}

export default SearchBar;


const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 20px 0;

    input{
        padding: 8px;
        flex: 0.9;
        border: 1px solid var(--light-grey);
        border-right: none;
        /* height: 30px; */

        &::placeholder{
            color: var(--dark-grey);
        }
    }

    span{
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 0.1;
        color: var(--dark-grey);
        border: 1px solid var(--light-grey);
        border-left: none;
        padding: 8px;
    }

    @media (min-width: 1200px){
        width: 20%;
        margin: 0;
    }
`