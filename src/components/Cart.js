import React, { Component } from 'react'
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';

export default class Cart extends Component {
    render() {
        return (
            <CartContainer>
                <h3>Cart is under development back online on 25/06/20</h3>
            </CartContainer>
        )
    }
}


const CartContainer = styled.div`
position:fixed;
text-transform: capitalize;
top:4rem;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background: var(--mainWhite);
}
`;