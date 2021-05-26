import styled from 'styled-components';
import {InfoIcon} from '@primer/octicons-react';

const Info = () => {
    return (
        <Wrapper>
            <span>
                <InfoIcon/>
            </span>
            <p>Tada! Get started with a free template. Can’t find what you are looking for? Search from the 1000+ available templates</p>
        </Wrapper>
    );
}
 
export default Info;


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    background-color: var(--light-pink);

    span{
        display: flex;
        align-items: center;
        color: var(--orange);
        margin-right: 20px;
        height: 100%;
    }

`