import React, { Component, Fragment } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';
import styled from 'styled-components';

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {(value) => {
                        const cart = JSON.parse(localStorage.getItem('cart'));
                        if (cart && cart.length > 0) {
                            return (
                                <CartWrapper>
                                    <div className='title-wrapper'><Title name='your ' title='cart' /></div>
                                    <CartColumns />
                                    <CartList value={value } cart={cart} />
                                    <CartTotals value={value} history={this.props.history}/>
                                </CartWrapper>
                            );
                        } else {
                            return <EmptyCart />
                        }
                    }}
                </ProductConsumer>
                
            </section>
        )
    }
}


const CartWrapper = styled.div`
    @media screen and (max-width: 576px) {
        .title-wrapper {
            position: relative;
            left: 10rem;
            top: 2rem;
        }
    }
`;
