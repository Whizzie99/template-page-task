import styled from 'styled-components';
import SearchBar from '../SearchBar/SearchBar';
import SortFields from '../SortFields/SortFields';
import Info from '../Info/Info';

const Nav = () => {
    return (
        <Wrapper>
            <SearchArea>
                <SearchBar/>
                <SortFields/>
            </SearchArea>
            <Info/>
        </Wrapper>
    );
}
 
export default Nav;



const Wrapper = styled.div`
`

const SearchArea = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    /* align-items: center; */
    padding: 20px 0;
    margin: 40px 0;

    @media (min-width: 1200px){
        flex-direction: row;
        justify-content: space-between;
    }
`