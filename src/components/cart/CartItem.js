import React from 'react'
import styled from 'styled-components';

export default function CartItem({ item, value }) {
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItem } = value;
    return (
        <ItemWrapper className='row my-2 text-capitalize text-center'>
            <div className='col-10 mx-auto col-lg-2'>
                <img src={img} style={{ width: '5rem', height: '5rem' }} className='img-fluid' alt='product' />
            </div>
            <div className='product-text col-10 mx-auto col-lg-2'>
                <span className='d-lg-none'>product: </span>
                {title}
            </div>
            <div className='price col-10 mx-auto col-lg-2'>
                <span className='d-lg-none'>price: </span>
                {price}
            </div>
            <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
                <div className='d-flex justify-content-center'>
                    <div className='quantity-chng'>
                        <span onClick={ () => decrement(id) }className='desc-span btn btn-black mx-1'>
                            -
                        </span>
                        <span className='cnt btn btn-black mx-1'>{count}</span>
                        <span onClick={ () => increment(id) }className='inc-span btn btn-black mx-1'>
                            +
                        </span>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className='col-10 mx-auto col-lg-2'>
                <div onClick={() => removeItem(id)} className='cart-icon'><i className='fas fa-trash'></i></div>
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                <strong>item total: $ {total} </strong>
            </div>

        </ItemWrapper>
        
    )
}

const ItemWrapper = styled.div`
    @media screen and (max-width: 576px) {
        img  {
            display: inline-block;
            height: 12rem !important;
            width: 10rem !important;
        }
        .product-text {
            margin-top: 1rem;
            font-size: 1.4rem;
        }
        .price {
            font-size: 1.2rem;
        }
        .quantity-chng {
            width: 10rem;
        }
        .desc-span, .inc-span, .cnt {
            font-weight: bold;
        }
        i {
            font-size: 1.6rem;
            margin-top: 0.3rem;
            margin-bottom: 0.5rem;
        }
        strong {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            display: inline-block;
        }
    }
`;
