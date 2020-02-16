import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';


export default class Product extends Component {
    render() {
        const { id, title, img, price, inCart, inFavorites } = this.props.product;
        
        return (
            <ProductWrapper className='col-9 mx-auto col-sm-8 col-md-7 col-lg-5 col-xl-3 my-3'>
                <div className='card'>
                    <ProductConsumer>
                        {(value) => (
                            <div onClick={e => value.handleDetail(id)} className='img-container p-5'>
                                <Link to='/details'>
                                    <img src={img} alt='product' className='card-img-top' />
                                </Link>
                                <button onClick= {() => {
                                    value.addToFavorites(id);
                                }}
                                    className='fav-btn' 
                                    disabled={ inFavorites ? true : false}
                                >
                                   <i className="far fa-bookmark"></i>
                                </button>
                                <button onClick={() => {
                                    value.addToCart(id);
                                    value.openModal(id); 
                                    }} 
                                    className='cart-btn' 
                                    disabled={inCart ? true : false}
                                >
                                    {inCart ? (<p className='text-capitalize mb-0' disabled>{' '}in Cart</p> ) : (<i className='fas fa-cart-plus'/>)}
                                </button>
                                
                            </div>
                        )}
                        
                    </ProductConsumer>
                    
                    {/* card footer */}
                    <div className='card-footer d-flex justify-content-between'>
                        <p className='align-self-center mb-0'>
                            {title}
                        </p>
                        <h5 className='text-blue font-italic mb-0'>
                            <span className='mr-1'>$</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}

const ProductWrapper = styled.div`
    .card {
        border-color: transparent;
        transition: all 110ms linear;
    }
    .card-footer {
        height: 5rem;
        background: transparent;
        border-top: transparent;
        transition: all 210ms linear;
    }
    &:hover {
        .card {
            border: 0.04rem solid rgba(0,0,0,0.2);
            box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
        }
        .card-footer {
            background: rgba(247,247,247);
        }
    }
    .img-container {
        position: relative;
        overflow: hidden;
        height: 34vh;
    }
    .card-img-top {
        display: block;
        transition: all 410ms linear;
        object-fit: contain;
        max-width: 100%;
        max-height: 100%;
    }
    .img-container:hover .card-img-top {
        transform: scale(1.2);
    }
    .cart-btn {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0.2rem 0.4rem;
        background: var(--purpleColor);
        border: none;
        color: var(--mainWhite);
        font-size: 1.4rem;
        border-radius: 0.5rem 0 0 0;
        transform: translate(100%, 100%);
        transition: all 210ms linear;
    }
    .img-container:hover .cart-btn {
        transform: translate(0, 0);
    }

    .cart-btn:hover {
        color: var(--greenColor);
        cursor: pointer;
    }

    .fav-btn {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0.2rem 0.7rem;
        background: var(--purpleColor);
        border: none;
        color: var(--mainWhite);
        font-size: 1.4rem;
        border-radius: 0.5rem 0 0 0;
        transform: translate(100%, 100%);
        transition: all 210ms linear;
        z-index: 100000;
    }
    .img-container:hover .fav-btn {
        transform: translate(0, -2.55rem);
    }
    .fav-btn:hover {
        color: var(--mainBlue);
        cursor: pointer;
    }

    @media screen and (max-width: 576px) {
        // border: 2px solid blue;
        position: relative;
        left: 2rem;
        width: 25rem;
    }


    
`;

