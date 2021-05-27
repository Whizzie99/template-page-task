import styled from 'styled-components';
import {ChevronDownIcon} from '@primer/octicons-react';

const SortFields = () => {
    return (
        <Wrapper>
            <SortText>Sort By</SortText>
            <SortForm>
                <SortField>
                    <select name="category">
                        <option value="all">all</option>
                        <option value="education">education</option>
                        <option value="e-commerce">e-commerce</option>
                    </select>
                    <span>Category</span>
                    <DownArrow>
                        <ChevronDownIcon/>
                    </DownArrow>
                </SortField>

                <SortField>
                    <select name="order">
                        <option value="default">default</option>
                        <option value="ascending">ascending</option>
                        <option value="descending">descending</option>
                    </select>
                    <span>Order</span>
                    <DownArrow>
                        <ChevronDownIcon/>
                    </DownArrow>
                </SortField>

                <SortField>
                    <select name="date">
                        <option value="default">default</option>
                        <option value="ascending">ascending</option>
                        <option value="descending">descending</option>
                    </select>
                    <span>Date</span>
                    <DownArrow>
                        <ChevronDownIcon/>
                    </DownArrow>
                </SortField>
            </SortForm>
        </Wrapper>
    );
}
 
export default SortFields;


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 20px 0;

    @media (min-width: 1200px){
        width: 40%;
        margin: 0;
    }
`

const SortText = styled.span`
    font-size: .8em;
    color: var(--dark-grey);
    text-transform: capitalize;
    margin-right: 10px;
    flex: 0.1;
    text-align: center;
    white-space: nowrap;


    &:after{
        content: ':'
    }

    @media (min-width: 1200px){
        margin: 0 10px;
    }
`

const SortForm = styled.form`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    flex: 0.9;
`

const SortField = styled.div`
    position: relative;
    
    select{
        border: 1px solid var(--light-grey);
        border-radius: 2px;
        width: 100%;
        text-transform: capitalize;
        padding: 8px;
        padding-left: 15px;
        -webkit-appearance:none;

        option{
            text-transform: capitalize;
        }
    }

    span{
        position: absolute;
        top: -7px;
        left: 15px;
        font-size: .7em;
        background-color: var(--white);
        color: var(--dark-grey);
        z-index: 1;
        text-transform: capitalize;
    }
`

const DownArrow = styled.div`
    position: absolute;
    top: 0;
    right: 5px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--dark-grey);
`

