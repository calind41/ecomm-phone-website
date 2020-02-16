import React from 'react';
import styled from 'styled-components';

export default function Title({ name, title }) {
    return (
        <TitleWrapper className='row'>
            <div className='col-10 mx-auto my-2 text-center text-title'>
                <h1 className='text-capitalize font-weight-bold'>
                    {name} <strong className='text-blue'>{title}</strong>
                </h1>
            </div>
        </TitleWrapper>
    )
}

const TitleWrapper = styled.div`
    div h1 strong {
        color: var(--purpleColor);
    }
    @media screen and (max-width: 388px) {
        position: relative;
        // left: 1rem;
        right: 3rem;
        bottom: 1rem;
    }
`;
