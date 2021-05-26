import styled from 'styled-components';

const SortFields = () => {
    return (
        <Wrapper>
            <SortText>Sort By</SortText>
            <SortForm>
                <SortField>
                    <label htmlFor="catergory">Category</label>
                    <select name="category">
                        <option value="all">all</option>
                        <option value="education">education</option>
                        <option value="e-commerce">e-commerce</option>
                    </select>
                </SortField>

                <SortField>
                    <label htmlFor="order">Order</label>
                    <select name="order">
                        <option value="default">default</option>
                        <option value="ascending">ascending</option>
                        <option value="descending">descending</option>
                    </select>
                </SortField>

                <SortField>
                    <label htmlFor="date">Date</label>
                    <select name="date">
                        <option value="default">default</option>
                        <option value="ascending">ascending</option>
                        <option value="descending">descending</option>
                    </select>
                </SortField>
            </SortForm>
        </Wrapper>
    );
}
 
export default SortFields;


const Wrapper = styled.div`

`

const SortText = styled.span`
`

const SortForm = styled.form`
`

const SortField = styled.div`
`

