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
    width: 20%;

    input{
        padding: 10px;
        flex: 0.9;
        border: 1px solid var(--light-grey);
        border-right: none;
        height: 30px;

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
        height: 30px;
    }
`