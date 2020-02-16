import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import { ProductConsumer } from '../context';
export default class Navbar extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    return (
                <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
                <div className='products'>
                <Link to='/'>
                <i className="fas fa-mobile-alt logo"></i>              
              </Link>
              <ul className='navbar-nav'>
                <li className='nav-item ml-5'>
                    <Link onClick={() =>  {value.setProducts();}} to='/' className='nav-link'>
                        products
                    </Link>
                </li>
              </ul>
                </div>
                <div>
                <Link to='/favorites'>
                    <ButtonContainer>
                        <span>
                            <i className="far fa-bookmark"></i>
                            <span>Favorites</span>
                        </span>
                    </ButtonContainer>
                </Link>
                <Link to='/cart' className='ml-auto'>
                    <ButtonContainer>
                        <span className='mr-2'>
                            <i className='fas fa-cart-plus'><span>my cart</span></i>
                        </span>
                    </ButtonContainer>
                </Link>

                </div>
            </NavWrapper>
                    )
                }}
            </ProductConsumer>
            
        )
    }
}

const NavWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    background: var(--purpleColor);
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
    .logo { font-size: 2.7rem; color: white;}
    .products {
        display: flex;
    }
    @media screen and (max-width: 482px) {
        width: 34rem;
    }
    @media screen and (max-width: 118px) {
        width: 30rem;
    }
`

