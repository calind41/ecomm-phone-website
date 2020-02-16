import React from 'react';
import CartItem from './CartItem';
import styled from 'styled-components';

export default function CartList({ value, cart }) {
    // const { cart } = value;
    // console.log(value,cart);
    
    return (
        <CartListWrapper className='container-fluid'>
            {cart.map(item => {
                return <CartItem key={item.id} item={item} value={value} />
            })}
            
        </CartListWrapper>
    )
}

const CartListWrapper = styled.div`
    @media screen and (max-width: 388px) {
        width: 36.5rem;

    }
`;