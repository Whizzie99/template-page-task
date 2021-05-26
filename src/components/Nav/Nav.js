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
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    margin: 40px 0;
`