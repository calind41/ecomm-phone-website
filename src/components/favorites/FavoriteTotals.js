import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function FavoriteTotals({ value, history }) {
    const { clearFavorites } = value; 
    return (
        <Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right'>
                        <Link to='/'>
                            <button 
                                onClick={() => {
                                    clearFavorites()
                                    let favorites = JSON.parse(localStorage.getItem('fav'));
                                    favorites.map((fav) => localStorage.removeItem('in_cart'+fav.id));
                                }
                            }
                                type='button' 
                                className='btn btn-outline-danger text-uppercase mb-3 px-5'
                            >
                                clear favorites
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
