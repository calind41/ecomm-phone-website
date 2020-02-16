import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import InfoTable from './InfoTable';
import styled from 'styled-components';

export default class Details extends Component {
    render() {
        
        return (
            <ProductConsumer>
                {(value) => {
                    // const { id, company, img, info, price, title, inCart } = value.detailProduct;
                    const { id, company, img, info, price, title, inCart } = JSON.parse(localStorage.getItem("detailProduct"));
                    
                    return (
                        <div className='container py-5'>
                            {/* title */}
                            <Title className='row'>
                                <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                                    <h1>{title}</h1>
                                </div>
                            </Title>
                            {/* end title */}
                            {/* product info */}
                            <div className='row'>
                                <ImageWrapper className='col-10 mx-auto col-md-6 my-3'>
                                    <img src={img} className='img-fluid' alt='product'/>
                                </ImageWrapper>
                                {/* product text */}
                                <ProductText className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                                    <h2>model: {title}</h2>
                                    <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                                        made by: <span className='text-uppercase'>{company}</span>
                                    </h4>
                                    <h4 className='text-blue'>
                                        <strong>price: <span>$</span>{price}</strong>
                                    </h4>
                        
                                    {/* display tables with characteristics of the phone  */}
                                    <Caracteristici><p>Caracteristici smartphone: </p></Caracteristici>
                                    <InfoTableWrapper>
                                        <InfoTable  name='General' tableType={info.General} titles={value.infoTitles} />
                                        <InfoTable  name='Display' tableType={info.Display} titles={value.infoTitles} />
                                        <InfoTable  name='Dimensiuni' tableType={info.Dimensiuni} titles={value.infoTitles} />
                                        <InfoTable  name='Memorie' tableType={info.Memorie} titles={value.infoTitles} />
                                        <InfoTable  name='Procesor' tableType={info.Procesor} titles={value.infoTitles} />
                                        <InfoTable  name='Functii' tableType={info.Functii} titles={value.infoTitles} />
                                        <InfoTable  name='Conectivitate' tableType={info.Conectivitate} titles={value.infoTitles} />
                                    <InfoTable name='Baterie' tableType={info.Baterie} titles={value.infoTitles} />

                                    </InfoTableWrapper>
                                    
                                       
                                    {/* buttons */}
                                    <DivWrapper>
                                        <Link to='/'><ButtonContainer>Back to products</ButtonContainer></Link>
                                        <ButtonContainer
                                        cart={true}
                                        disabled={inCart ? true : false}
                                        onClick={()=>{
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}
                                        >
                                            {inCart ? 'inCart' : 'add to cart'}
                                        </ButtonContainer>
                                    </DivWrapper>
                                </ProductText>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}



// Details.propTypes = {
//     detailProduct: PropTypes.shape({
//         id: PropTypes.number,
//         img: PropTypes.string,
//         title: PropTypes.string,
//         price: PropTypes.number,
//         inCart: PropTypes.bool
//     }).isRequired
// }
const Caracteristici = styled.div`
    position: relative;
    font-size: 2rem;
    top: 19rem !important;
    right: 35.5rem;
    @media screen and (max-width: 1700px) {
        right: 35.4rem;
        top: 23rem;
        font-size: 1.5rem;
        display: block;
    }
    @media screen and (max-width: 1608px) {
        right: 35.4rem;
        top: 23rem;
        font-size: 1.5rem;
        display: block;
    }
    @media (min-width: 1608px) and (max-width: 1609px) {
        right: 35.4rem;
        top: 23rem;
        font-size: 1.5rem;
        display: block;
    }
    @media (min-width: 1469px) and (max-width: 1470px)  {
        right: 35.4rem;
        top: 21rem;
        font-size: 1.5rem;
        display: block;
    }
    @media screen and (max-width: 1467px)  {
        top: 21rem;
        
    }
    @media screen and (max-width: 1463px)  {
        right: 35.4rem;
        top: 21rem;
        font-size: 1.5rem;
        display: block;
    }
    @media screen and (max-width: 1460px)  {
        right: 35.4rem;
        top: 18rem;
        font-size: 1.5rem;
        display: block;
    }
    @media screen and (max-width: 1426px)  {
        top: 19.5rem;
    
    }
    @media screen and (max-width: 1408px ) {
        right: 37.9rem;
        top: 16rem;
        font-size: 1.6rem;
        display: block;
    }
    @media (min-width: 1408px) and (max-width: 1409px) {
        right: 40rem;
        top: 21rem;
        font-size: 1.6rem;
        display: block;
    }
    @media screen and (max-width: 1407px) {
        top: 20rem;
    }
    @media screen and (max-width: 1260px) {
        right: 37rem;
        top: 18rem;
        font-size: 1.6rem;
        display: block;
    }
    // @media (min-width: 1260px) and (max-width: 1261px) {
    //     right: 37rem;
    //     top: 14rem;
    //     font-size: 1.6rem;
    //     display: block;
    // }
    @media screen and (max-width: 1200px ) {
        right: 30.5rem;
        top: 12rem;
        font-size: 1.6rem;
        display: block;
    }
    @media (min-width: 1200px) and (max-width: 1201px ) {
        right: 36.8rem;
        top: 18rem;
        font-size: 1.5rem;
        display: block;
    }
    @media screen and (max-width: 1199px ) {
        right: 31.8rem;
        top: 15.5rem;
        font-size: 1.5rem;
        display: block;
    }
    @media screen and (max-width: 992px ) {
        right: 23.7rem;
        top: 10rem;
        font-size: 1.3rem;
    }
    @media (min-width: 992px) and (max-width: 993px ) {
        right: 28.7rem;
        top: 12rem;
        font-size: 1.3rem;
    }
    @media screen and (max-width: 768px ) {
        right: 0rem;
        top: 5rem;
        font-size: 1.2rem;
    }
    @media (min-width: 768px) and (max-width: 769px) {
        right: 22rem;
        top: 14rem;
        font-size: 1.2rem;
    }
    @media screen and (max-width: 576px ) {
        position: absolute;
        right: 9rem;
        width: 20rem;
        height: 10rem;
        font-size: 1.4rem;
        p {
            position: absolute;
            bottom: 11rem;
            width: 30rem;
        }
    }
`;
const Title = styled.div`
    div {
        position: relative;
        bottom: 3rem;
    }
    div h1 {
        font-size: 1.8rem;
    }
   
    @media screen and (max-width: 1608px) {
        div h1 {
            font-size: 2.9rem;
        }
    }
    @media screen and (max-width: 1408px ) {
        div h1 {
            font-size: 2.9rem;
        }
    }
    @media screen and (max-width: 1200px ) {
        div h1 {
            font-size: 2.6rem;
        }
    }
    @media (min-width: 1200px) and (max-width: 1201px ) {
        div h1 {
            font-size: 2.5rem;
        }
    }
    @media screen and (max-width: 992px ) {
        div h1 {
            font-size: 2.3rem;
        }
    }
    @media screen and (max-width: 768px ) {
        div h1 {
            font-size: 1.8rem;
        }
    }
    @media screen and (max-width: 576px ) {
        div h1 {
            font-size: 1.4rem;
        }
        div {
            position: relative;
            right: 0.1rem;
            border: 2px solid green;
        }
    }
`;

const ProductText = styled.div`
    position: relative;
    bottom: 5rem; 


   @media screen and (max-width: 1608px) {
    height: 14rem;
    bottom: 6rem;
    
    h2 {
        position: relative;
        right: 1rem;
        font-size: 2.3rem;
    }
    h4:first-of-type {
        position: relative;
        right: 1rem;
        font-size: 1.7rem;
    }
    h4:nth-of-type(2) {
        position: relative;
        right: 1rem;
        font-size: 1.7rem;
    }
   }
    
    @media screen and (max-width: 1408px ) {
        height: 14rem;
        bottom: 6rem;
        
        h2 {
            position: relative;
            right: 4rem;
            font-size: 2.2rem;
        }
        h4:first-of-type {
            position: relative;
            right: 4rem;
            font-size: 1.6rem;
        }
        h4:nth-of-type(2) {
            position: relative;
            right: 4rem;
            font-size: 1.6rem;
        }
    }
    @media screen and (max-width: 1200px ) {
        height: 14rem;
        bottom: 6rem;
        left: 1rem;
        h2 {
            font-size: 2.1rem;
        }
        h4:first-of-type {
            font-size: 1.6rem;
        }
        h4:nth-of-type(2) {
            font-size: 1.5rem;
        }
    }
    @media (min-width: 1200px) and (max-width: 1201px ) {
        height: 14rem;
        bottom: 6rem;
        h2 {
            position: relative;
            right: 5rem;
            font-size: 2.1rem;
        }
        h4:first-of-type {
            position: relative;
            right: 5rem;
            font-size: 1.6rem;
        }
        h4:nth-of-type(2) {
            position: relative;
            right: 5rem;
            font-size: 1.5rem;
        }
    }
    @media screen and (max-width: 992px ) {
        height: 14rem;
        bottom: 7rem;
        left: 1rem;
        h2 {
            font-size: 1.9rem;
        }
        h4:first-of-type {
            font-size: 1.4rem;
        }
        h4:nth-of-type(2) {
            font-size: 1.3rem;
        }
    }
    @media screen and (max-width: 987px) {
        height: 14rem;
        bottom: 7rem;
        left: 1rem;
        h2 {
            position: relative;
            right: 0;
            font-size: 1.9rem;
        }
        h4:first-of-type {
            position: relative;
            right: 0;
            font-size: 1.4rem;
        }
        h4:nth-of-type(2) {
            position: relative;
            right: 0;
            font-size: 1.3rem;
        }
    }
    @media screen and (max-width: 768px ) {
        height: 10rem;
        bottom: 7rem;
        left: 1rem;
        h2 {
            font-size: 1.6rem;
        }
        h4:first-of-type {
            font-size: 1.3rem;
        }
        h4:nth-of-type(2) {
            font-size: 1.2rem;
        }
    }
    @media (min-width: 768px) and (max-width: 769px) {
        height: 10rem;
        bottom: 7rem;
        left: 2rem;
        h2 {
            font-size: 1.5rem;
        }
        h4:first-of-type {
            font-size: 1.3rem;
        }
        h4:nth-of-type(2) {
            font-size: 1.2rem;
        }
    }
    @media screen and (max-width: 576px ) {
        height: 9rem;
        bottom: 7rem;
        h2 {
            width: 32rem;
            font-size: 1.4rem;
            position: relative;
            right: 2rem;
        }
        h4:first-of-type {
            position: relative;
            right: 2rem;
            font-size: 1.2rem;
        }
        h4:nth-of-type(2) {
            position: relative;
            right: 2rem;
            font-size: 1rem;
        }
    }
   
`;
const ImageWrapper = styled.div`
    height: 59vh;
    overflow: hidden;
    position: relative;
    bottom: 5rem;
    img {
        object-fit: contain;
        max-width: 100%;
        max-height: 100%;
    }

    @media screen and (max-width: 1408px ) {
        bottom: 6rem;
        right: 4.2rem;
        height: 65vh;
        img {
            display: block;
            width: 70rem;
            height: 150vh;
        }
    }
    @media screen and (max-width: 1200px ) {
        bottom: 6rem;
        right: 1.8rem;
        img {
            display: block;
            width: 55rem;
            height: 150vh;
        }
    }
    @media (min-width: 1200px) and (max-width: 1201px ) {
        bottom: 6rem;
        right: 4.1rem;
        height: 65vh;
        img {
            display: block;
            width: 50rem;
            height: 150vh;
        }
    }
    @media screen and (max-width: 992px ) {
        bottom: 7rem;
        right: 0rem;
        img {
            display: block;
            width: 41rem;
            height: 130vh;
        }
    }
    @media screen and (max-width: 768px ) {
        bottom: 7rem;
        left: 2.5rem;
        img {
            display: block;
            width: 21rem;
            height: 30rem;
        }
    }
    @media screen and (max-width: 576px ) {
        left: 5rem;
        bottom: 6rem;
        img {
            display: block;
            width: 17rem;
            object-fit: cover;
            height: 27rem;
        }
    }
 

`;

const InfoTableWrapper = styled.div`

    position: relative;
    top: 43vh;
    right: 35.5rem;
    width: 79rem;
    display: grid;
    grid-template-columns: auto auto;


    .buttons {
        position: absolute;
        bottom: 100rem;
    }

    @media screen and (max-width: 1608px) {
        width: 72rem;
        right: 35.6rem;
        top: 42vh;
    }
    @media screen and (max-width: 1460px) {
        width: 77rem;
        right: 35.6rem;
        top: 40rem;

    }    
    @media screen and (max-width: 1408px ) {
        width: 78rem;
        right: 38rem;
        top: 44vh;
    }
    @media (min-width: 1408px) and (max-width: 1409px) {
        width: 77rem;
        right: 40rem;
        top: 42vh;
    }
    @media screen and (max-width: 1260px) {
        width: 72rem;
        right: 37rem;
        top: 43vh;
    }
    @media screen and (max-width: 1200px ) {
        width: 62rem;
        right: 30.5rem;
        top: 31vh;
    }
    @media (min-width: 1200px) and (max-width: 1201px ) {
        width: 68rem;
        right: 36.5rem;
        top: 39vh;
    }
    @media screen and (max-width: 1199px ) {
        width: 68rem;
        right: 31.8rem;
        top: 43vh;
    }
    @media screen and (max-width: 992px ) {
        width: 49rem;
        right: 23.7rem;
        top: 43vh;
    }
    @media(min-width: 992px ) and (max-width: 993px) {
        width: 54rem;
        right: 28.7rem;
        top: 43vh;
    }
    @media screen and (max-width: 768px ) {
        width: 32rem;
        right: 0rem;
        top: 43vh;
    }
    @media (min-width: 768px) and (max-width: 769px) {
        width: 40rem;
        right: 22rem;
        top: 43vh;
    }
    @media screen and (max-width: 576px ) {
        width: 31rem;
        right: 2rem;
        top: 28vh;
    }
   
`;

const DivWrapper = styled.div`
    position: absolute;
    bottom: 83rem;

    @media screen and (max-width: 1608px) {
        top: 15rem;
        right: 5.3rem;
        width: 30rem;
        height: 3rem;
    }
    @media screen and (max-width: 1460px) {
        top: 15rem;
        right: 5.3rem;
        width: 30rem;
        height: 3rem;
    }

    @media screen and (max-width: 1408px) {
        top: 15rem;
        right: 8.2rem;
        width: 30rem;
        height: 3rem;
    }
    @media screen and (max-width: 1260px) {
        top: 15rem;
        right: 8.2rem;
        width: 30rem;
        height: 3rem;
    }
    
    @media screen and (max-width: 1200px ) {
        top: 15rem;
        right: -1rem;
        width: 30rem;
        height: 3rem;
    }
    @media (min-width: 1200px) and (max-width: 1201px ) {
        top: 11rem;
        right: 9.3rem;
        width: 30rem;
        height: 3rem;
    }
    @media screen and (max-width: 1199px ) {
        top: 13rem;
        right: 3rem;
        width: 30rem;
        height: 3rem;
    }
    @media screen and (max-width: 992px ) {
        top: 14.5rem;
        right: 1.4rem;
        width: 20rem;
        height: 3rem;
    }
    @media (min-width: 992px ) and (max-width: 993px) {
        top: 14rem;
        right: 8.9rem;
        width: 20rem;
        height: 3rem;
    }
    @media screen and (max-width: 768px ) {
        top: 10rem;
        right: 7rem;
        width: 20rem;
        height: 3rem;
    }
    @media (min-width: 768px) and (max-width: 769px) {
        top: 10.4rem;
        right: 1.4rem;
        width: 20rem;
        height: 3rem;
    }
    @media screen and (max-width: 576px ) {
        top: 10rem;
        right: 4rem;
        height: 3rem;
    }
 
  
    
`;