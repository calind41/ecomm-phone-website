import React, { Component, Fragment } from 'react';
import Title from '../Title';
import FavoriteColumn from './FavoriteColumn';
import EmptyFavorite from './EmptyFavorite';
import { ProductConsumer } from '../../context';
import FavoriteList from './FavoriteList';
import FavoriteTotals from './FavoriteTotals';

export default class Favorite extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {(value) => {
                        const favorites = JSON.parse(localStorage.getItem('fav'));
                        if (favorites && favorites.length > 0) {
                            return (
                                <Fragment>
                                    <Title name='your ' title='cart' />
                                    <FavoriteColumn />
                                    <FavoriteList value={value} favorites={favorites} />
                                    <FavoriteTotals value={value} history={this.props.history}/>
                                </Fragment>
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
