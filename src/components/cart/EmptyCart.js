import React from 'react';
import styled from 'styled-components';

export default function EmptyCart() {
    return (
        <EmptyCartWrapper className='container mt-5'>
            <div className='row'>
                <div className='col-10 mx-auto text-center text-title'>
                    <h1>your cart is currently empty</h1>
                </div>
            </div>
        </EmptyCartWrapper>
    )
}

const EmptyCartWrapper = styled.div`
    @media screen and (max-width: 388px) {
        width: 36rem;
        h1 {
            font-size: 1.6rem;
        }
    }
`;
