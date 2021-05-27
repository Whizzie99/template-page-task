import styled from 'styled-components';
import Template from  '../Template/Template';

const TemplateList = () => {
    return (
        <section>
            <SearchResult>
                <TemplateCategory>all templates</TemplateCategory>
                <TemplateCount>2000 templates</TemplateCount>
            </SearchResult>
            <Wrapper>
                <Template/>
                <Template/>
                <Template/>
                <Template/>
                <Template/>
                <Template/>
            </Wrapper>
        </section>
    );
}
 
export default TemplateList;


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

const Wrapper = styled.div`
    @media (min-width: 1200px){
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-gap: 50px;
    }
`