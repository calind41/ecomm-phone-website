import React, { Component } from 'react';
import { infoTitles, storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();


class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        favorites: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        selectedBrand: '',
        infoTitles: infoTitles,
    }
    componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach((item) => {
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem];
        });
        this.setState(() => {
            return {products: tempProducts,selectedBrand: ''};
        })
    }

    getItem = (id) => {
        const product = this.state.products.find(item =>
            item.id === id);
        return product;
    }

    handleDetail = (id) => {
        const product = this.getItem(id);
        localStorage.setItem('detailProduct',JSON.stringify(product));
        this.setState(() => {
            return {detailProduct: product};
        });
    }
    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return { products: tempProducts, cart: [...this.state.cart,product] }
        },() => {
            let tempP = JSON.parse(localStorage.getItem('cart'));
            tempP = tempP ? tempP : [];
            console.log('tempP is ');
            console.log(tempP);
            let isCopy;
            if (tempP.length === 0) {
                tempP.push(product);
                console.log('  tempP len is 0');
            }
            else {
                isCopy = tempP.filter((item) => item.id === id);
                console.log('is copy is ' + isCopy);
            if (isCopy.length === 0)
                tempP.push(product);
            }
            localStorage.setItem('cart',JSON.stringify(tempP));
            this.addTotals();
        })
    }
    addToFavorites = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inFavorites = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(() => {
            return { products: tempProducts, favorites: [...this.state.favorites,product] }
        },() => {
            // this.addTotals();
            localStorage.setItem('fav',JSON.stringify([...this.state.favorites]));
        })

        console.log('called adToFavorites')
    }

    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return{modalProduct: product,modalOpen: true }
        })
    }
    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false };
        });
    }
    increment = id => {
        // let tempCart = [...this.state.cart];
        let tempCart = JSON.parse(localStorage.getItem('cart'));
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        
        this.setState(() => {
            return {
                cart: [...tempCart]
            }
        },() => {
           
            localStorage.setItem('cart',JSON.stringify(this.state.cart));
            this.addTotals();
            this.setState(this.state);

        });
    }
    decrement = id => {
        // let tempCart = [...this.state.cart];
        let tempCart  = JSON.parse(localStorage.getItem('cart'));
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;
        if (product.count  === 0) {
            this.removeItem(id);
        } else {
            product.total = product.count * product.price;
            this.setState(() => {
                return {
                    cart: [...tempCart]
                }
            },() => {
                localStorage.setItem('cart',JSON.stringify(this.state.cart));
                this.addTotals();
                this.setState(this.state);
            });
        }
    }
    removeItem = id => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id);
        const index  = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            }
        },() => {
            localStorage.setItem('cart',JSON.stringify(this.state.cart));
            this.addTotals();

        })
    }
    removeItemFromFavorites = id => {
        let tempProducts = [...this.state.products];
        // let tempFavorites = [...this.state.favorites];
        let tempFavorites = JSON.parse(localStorage.getItem('fav'));

        tempFavorites = tempFavorites.filter(item => item.id !== id);
        const index  = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inFavorites = false;
        removedProduct.count = 0;
        removedProduct.total = 0;
       
        this.setState(() => {
            return {
                favorites: [...tempFavorites],
                products: [...tempProducts]
            }
        },() => {
            localStorage.setItem('fav',JSON.stringify([...tempFavorites]));
            this.setState(this.state);
        });
    }
    clearCart = id => {
        this.setState(() => {
            return { cart: [] };
        },() => {
            localStorage.removeItem('cart');
            this.setProducts();
            this.addTotals();
        });
    }
    clearFavorites = id => {
        this.setState(() => {
            return { favorites: [] };
        },() => {
            this.setProducts();
             localStorage.removeItem('fav');
        });
    }
    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        });

    }
    sortAscending = () => {
        this.setState(() =>{
            return this.state.products.sort((a,b) => a.price - b.price);
        });
    }

    sortDescending = () => {
        this.setState(() =>{
            return this.state.products.sort((a,b) => b.price - a.price);
        });
    }
    handleClick = (e,brandName) => {
        let target = e.target;
        let liElements = document.querySelectorAll('li');
        liElements.forEach((item) => {
            if (item.classList.contains('selected'))
                item.classList.remove('selected');
        });
        target.classList.add('selected');


        let tempProducts = [];
        storeProducts.forEach((item) => {
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem];
        });
        this.setState(() => {
            return {products: tempProducts};
        },() => {
            this.setState(() => {
                // filter by brandName
                let productsOfBrandName = this.state.products.filter((product) => product.company === brandName);
                return {products: productsOfBrandName,selectedBrand: brandName};
            })
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                setProducts: this.setProducts,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                addToFavorites: this.addToFavorites,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                removeItemFromFavorites: this.removeItemFromFavorites,
                clearCart: this.clearCart,
                clearFavorites: this.clearFavorites,
                handleClick: this.handleClick,
                sortAscending: this.sortAscending,
                sortDescending: this.sortDescending,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
