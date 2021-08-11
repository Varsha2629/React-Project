import React from 'react';
 import styles from './Button.module.css';
// import styled from 'styled-components';

// const Button = styled.button`
    
//     font: inherit;
//     padding: 0.5rem 1.5rem;
//     border: 1px solid #8b005d;
//     color:white;
//     background: #8b005d;
//     margin-left: 10px;
//     cursor: pointer;

//     @media (min-width:768px){
//         width: auto;
//     }

//     &:focus {
//         outline:none;
//     }    
//     &:hover,
//     &:active {

//     }
// `;
const Button = props => {
    return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>{props.children}</button>
    );
};
export default Button;