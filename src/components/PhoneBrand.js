import React, { Component } from 'react';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class PhoneBrand extends Component {
    render() {
        return (
            <DivWrapper>
                <div className='list'>
                    <ul>
                        <li><span>Producator</span></li>
                        <li className={this.props.selectedBrand === 'Asus' ? 'selected' : ''} onClick={e => this.props.handleClick(e,'Asus')}><i className="fas fa-mobile-alt"></i>Asus</li>
                        <li className={this.props.selectedBrand === 'Huawei' ? 'selected' : ''} onClick={e => this.props.handleClick(e,'Huawei')}><i className="fas fa-mobile-alt"></i>Huawei</li>
                        <li className={this.props.selectedBrand === 'Apple' ? 'selected' : ''} onClick={e => this.props.handleClick(e,'Apple')}><i className="fas fa-mobile-alt"></i>Apple</li>
                        <li className={this.props.selectedBrand === 'Samsung' ? 'selected' : ''} onClick={e => this.props.handleClick(e,'Samsung')}><i className="fas fa-mobile-alt"></i>Samsung</li>
                        <li className={this.props.selectedBrand === 'Xiaomi' ? 'selected' : ''} onClick={e => this.props.handleClick(e,'Xiaomi')}><i className="fas fa-mobile-alt"></i>Xiaomi</li>
                    </ul>
                </div>
                
                <div className='sort-btns'>
                    <button onClick={() => {
                        this.props.sortAscending();
                    }} className='asc'>
                         <i className="fas fa-sort-up"></i><span>price ascending</span>
                    </button>
                    <button onClick={() => {
                        this.props.sortDescending();
                    }} className='desc'>
                    <i className="fas fa-sort-down"></i><span>price descending</span>
                    </button>
                </div>
            </DivWrapper>
        )
    }
}

const DivWrapper = styled.div`
    display: flex;
    flex-direction : column;
    justify-content: space-around;
    
    // border: 2px solid red;
    height: 50vh;
    width: 10rem;
    cursor: pointer;
    position: absolute;
    top: 12.7rem;
    left: 1rem;
    background-color: white;
    
    -webkit-box-shadow: 0px 6px 5px 0px rgba(222,222,222,1);
    -moz-box-shadow: 0px 6px 5px 0px rgba(222,222,222,1);
    box-shadow: 0px 6px 5px 0px rgba(222,222,222,1);

    .list {
        height: 18rem;
    }
    ul {
        margin-top: 3.5rem;
        margin-left: -1rem;
        height: 59%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        list-style-type: none;
        font-family: sans-serif;
        font-weight: 410;
        font-size: 1.1rem;
    }
    ul li:first-child span {
        font-weight: bold;
        font-size: 1.23rem;
        position: absolute;
        top: 1.6rem;
    }
    ul li {transition: font-weight 140ms ease-out;}
    ul li i {margin-right: 0.5rem;}
    ul li:hover i{color:green;}
    ul li:hover {
        font-weight: bold;
    }

    .selected {
        font-weight: bold;
        background-color: #eee;
        border-bottom: 1px solid black;
        border-top: 1px solid black;
    }

    .sort-btns {
        position: relative;
        bottom: 3rem;
        display: flex;
        flex-direction: column;
        // border: 2px solid red;
        
    }

    .asc, .desc {
        display: flex;
        border: none;
        width: 95%;
        margin: 5px;
        height: 2rem;
        background-color: white;
    }
    .asc:hover, .desc:hover {
        background-color: #eee;
    }
    .asc:focus, .desc:focus {
        outline: none;
        border: none;
        background-color: #eee;
    }
    .asc i, .desc i {
        position: relative;
        top: 0.3rem;
        margin-right: 4px;
        font-size: 1.2rem;
        color: var(--purpleColor);
    }
    .asc i {
        top: 0.5rem;
    }
    .desc i {
        top: 0.05rem;
    }
    @media screen and (max-width: 388px) {
        // border: 2px solid red;
        width: 12rem;
        ul li:first-child span {
            font-weight: bold;
            font-size: 1.23rem;
            position: absolute;
            top: 0.8rem;
        }
       .sort-btns {
            position: relative;
            left: 0.75rem;
            bottom: 2.5rem;
            display: flex;
            flex-direction: column;
            height: 4.5rem;  
            width: 11rem;      
       }
       .desc {
           position: relative;
           bottom: 0.8rem;
       }
    }
`;
