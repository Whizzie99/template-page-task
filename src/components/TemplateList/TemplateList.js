import styled from 'styled-components';

const TemplateList = () => {
    return (
        <Wrapper>
            <SearchResult>
                <TemplateCategory>all templates</TemplateCategory>
                <TemplateCount>2000 templates</TemplateCount>
            </SearchResult>
        </Wrapper>
    );
}
 
export default TemplateList;


const Wrapper = styled.div``

const SearchResult = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    margin: 20px 0;
`

const TemplateCategory = styled.p`
    text-transform: capitalize;
    
`

const TemplateCount = styled.p`
    text-transform: capitalize;
    font-size: .8em;
    color: var(--dark-grey);
`