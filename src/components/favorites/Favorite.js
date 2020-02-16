import React, { Component, Fragment } from 'react';
import Title from '../Title';
import FavoriteColumn from './FavoriteColumn';
import EmptyFavorite from './EmptyFavorite';
import { ProductConsumer } from '../../context';
import FavoriteList from './FavoriteList';
import FavoriteTotals from './FavoriteTotals';
import styled from 'styled-components';

export default class Favorite extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {(value) => {
                        const favorites = JSON.parse(localStorage.getItem('fav'));
                        if (favorites && favorites.length > 0) {
                            return (
                                <FavoriteWrapper>
                                    <div className='titleWrapper'><Title name='your ' title='Favorites' /></div>
                                    <FavoriteColumn />
                                    <FavoriteList value={value} favorites={favorites} />
                                    <FavoriteTotals value={value} history={this.props.history}/>
                                </FavoriteWrapper>
                            );
                        } else {
                            return <EmptyFavorite />
                        }
                    }}
                </ProductConsumer>
                
            </section>
        )
    }
}


const FavoriteWrapper = styled.div`

    @media screen and (max-width: 388px) {
        width: 37rem;
        
        .titleWrapper {
            position: relative;
            top: 1rem;
            left: 3rem;
        }
    }
    

   
`;  