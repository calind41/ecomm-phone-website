import React from 'react';
import { ButtonContainer } from '../Button';
import useForceUpdate from 'use-force-update';
import { render } from 'react-dom';

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
            <div className='row my-2 text-capitalize text-center'>
                <div className='col-10 mx-auto col-lg-2'>
                    <img src={img} style={{ width: '5rem', height: '5rem' }} className='img-fluid' alt='product' />
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <span className='d-lg-none'>product: </span>
                    {title}
                </div>
                <div className='col-10 mx-auto col-lg-2'>
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
                <div className='col-10 mx-auto col-lg-2'>
                    <strong><ButtonContainer className='addToCartDiv' onClick={() => {
                        this.props.value.addToCart(id);
                        this.changeText();
                    }} >{this.state.inCart ? 'Added' : 'Add to cart'}</ButtonContainer></strong>
                </div>

            </div>
            
        )
    }
}
