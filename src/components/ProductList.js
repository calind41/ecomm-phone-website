import React, { Component, Fragment } from 'react'
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';
import PhoneBrand from './PhoneBrand';
import styled from 'styled-components';

export default class ProductList extends Component {
    render() {

        return (
            <ProductListWrapper>
                <div>

               
                <ProductConsumer>
                    {(value) => { 
                        return <PhoneBrand 
                                    selectedBrand = {value.selectedBrand}
                                    sortAscending = {value.sortAscending} 
                                    sortDescending = {value.sortDescending}
                                    handleClick={value.handleClick} />
                    }}
                </ProductConsumer>
                </div>
                <div className='phones py-5'>
                    <div className='container'>
                        <Title name='our' title='products' />
                        <div className='row col-sm-12'>
                            <ProductConsumer>
                                {(value) => {

                               return value.products.map(product => {
                                   return <Product key={product.id} product={product} />
                               })
                            }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </ProductListWrapper>
        )
              
    }
}

const ProductListWrapper = styled.div`
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 576px ) {
        border: 2px solid red;
        .phones .container{
            // border: 2px solid purple;
            position: relative;
            left: 5rem;
        }
    }
    
`;