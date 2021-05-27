import { useEffect } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Template = () => {

    const getTemplateDescription = useRef(null);

    useEffect(() => {
        // let templateDescription = getTemplateDescription.current.innerHTML;
        

        // console.log(templateDescription);

        //     if (getTemplateDescription){
        //     let templateDescription = getTemplateDescription.current.innerHTML;
        //     const textLength = 60;

        //     if (templateDescription.length > textLength){
        //         templateDescription = templateDescription.substring(0, textLength),
        //         templateDescription.replace(/\w+$/, '');

        //         templateDescription += '...';

        //         // jobDescription.innerHTML = trunc;
        //     }
        // }

    })

    return (
        <TemplateCard>
            <Title>Alumni Membership Form Template</Title>
            <Description ref={getTemplateDescription}>
                Engage your alumni network better with this alumni registration form template. Embed this in your website ...
            </Description>
            <Button>
                <Link to="#">use template</Link>
            </Button>
        </TemplateCard>
    );
}
 
export default Template;

const TemplateCard = styled.div`
    box-shadow: var(--box-shadow);
    border-radius: 2px;
`

const Title = styled.h1`
    font-weight: bold;
    text-transform: capitalize;
    color: var(--black-1);
    padding: 20px;
    margin: 15px 0;

    @media (min-width: 1200px){
        padding: 10px 20px;
    }
`

const Description = styled.p`
    font-family: var(--font-stack-2);
    color: var(--neutral-2);
    padding: 0 20px;
    margin: 15px 0;
    margin-bottom: 30px;
`

const Button = styled.div`
    width: 100%;
    padding: 15px;
    background-color: var(--neutral-7);

    a{
        text-decoration: none;
        color: var(--green);
    }
`