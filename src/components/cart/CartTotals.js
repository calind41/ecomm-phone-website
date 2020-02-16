import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PayPalButton from './PayPalButton';
import styled from 'styled-components';

export default function CartTotals({ value, history }) {
    // const { cartSubTotal, cartTax, cartTotal, clearCart } = value; 
    const { clearCart } = value; 
    const cartSubTotal = JSON.parse(localStorage.getItem('subTotal'));
    const cartTax = JSON.parse(localStorage.getItem('tax'));
    const cartTotal = JSON.parse(localStorage.getItem('total'));
    return (
        <Fragment>
            <TotalsWrapper className='container'>
                <div className='row'>
                    <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right'>
                        <Link to='/'>
                            <ClearCartBtn 
                                onClick={() => clearCart()}
                                type='button' 
                                className='btn btn-outline-danger text-uppercase mb-3 px-5'
                            >
                                clear cart
                            </ClearCartBtn>
                        </Link>
                        <h5>
                            <span className='subtotal text-tile'>
                                subtotal: 
                            </span>
                            <strong>RON {cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className=' tax text-tile'>
                                tax: 
                            </span>
                            <strong>RON {cartTax}</strong>
                        </h5>
                        <h5>
                            <span className='total text-tile'>
                                total: 
                            </span>
                            <strong> RON {cartTotal}</strong>
                        </h5>
                        <PayPalButton total={cartTotal} clearCart={clearCart} history={history} />
                    </div>
                </div>
            </TotalsWrapper>
        </Fragment>
    )
}

const ClearCartBtn = styled.button`
    @media screen and (max-width: 576px) {
        position: relative;
        left: 3rem;
        left: 5rem;
        bottom: 0.4rem;
    }
`;

const TotalsWrapper = styled.div`
    
    @media screen and (max-width: 576px) {
        
        .subtotal, .tax, .total {
            position: relative;
            left: 3rem;
            font-size: 1.8rem;
        }
        h5 strong {
            position: relative;
            left: 3rem;
            font-size: 1.8rem;
        }
    }
`;
