import styled from 'styled-components';

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.3rem;
    background: var(--purpleColor);
    border: none;
    color:  var(--mainWhite);
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 280ms ease-in-out;
    &:hover {
        background: ${props => props.cart ? 'var(--mainYellow)' : 'var(--purpleColor)'};
        color: ${props => props.cart ? 'var(--mainWhite)' : 'var(--greenColor)'};
        // color: var(--greenColor);
    }
    &:focus {
        outline: none;
    }

    span span {
        margin-left: 5px;
        font-family: 'Lato', sans-serif;
    }

    }
`