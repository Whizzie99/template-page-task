import styled from 'styled-components';
import SearchBar from '../SearchBar/SearchBar';
import SortFields from '../SortFields/SortFields';

const Nav = () => {
    return (
        <Wrapper>
            <SearchBar/>
            <SortFields/>
        </Wrapper>
    );
}
 
export default Nav;


const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`