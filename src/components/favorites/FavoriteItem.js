import React from 'react';
import { ButtonContainer } from '../Button';
import useForceUpdate from 'use-force-update';
import { render } from 'react-dom';
import styled from 'styled-components';


export default class FavoriteItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inCart: JSON.parse(localStorage.getItem('in_cart' + this.props.item.id)) === null ? false : true
        }
    }
   

    changeText = () => {
        localStorage.setItem('in_cart' + this.props.item.id,JSON.stringify(true)); 
        this.setState({inCart: true});  
    }

    render() { 
        const { id, title, img, price, inCart } = this.props.item;
        let addedToCart = false;
        const { removeItemFromFavorites, clearFavorites } = this.props.value;
    
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
                {/*  */}
                <div className='col-10 mx-auto col-lg-2'>
                    <div onClick={() => {
                        removeItemFromFavorites(id);
                        localStorage.removeItem('in_cart'+ id);
                    }
                    } 
                    className='cart-icon'
                    ><i className='fas fa-trash'></i></div>
                </div>
                <div className='add-btn col-10 mx-auto col-lg-2'>
                    <strong><ButtonContainer className='addToCartDiv' onClick={() => {
                        this.props.value.addToCart(id);
                        this.changeText();
                    }} >{this.state.inCart ? 'Added' : 'Add to cart'}</ButtonContainer></strong>
                </div>

            </ItemWrapper>
            
        )
    }
}


const ItemWrapper = styled.div`

    @media screen and (max-width: 576px) {
        img {
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
        i {
            font-size: 1.6rem;
            margin-top: 0.3rem;
            margin-bottom: 0.5rem;
        }
        .add-btn {
            position: relative;
            left: 0.4rem;
            margin-bottom: 1.4rem;
        }
        .add-btn strong button {
            width: 11rem;
        }
    }
    
`;