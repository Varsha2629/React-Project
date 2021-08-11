import React from 'react';
import Button from '../../UI/Button/Button';
const MyGoalItem = (props) =>{
    const deleteHandler = ()=> {
        props.onDelete(props.id);        
    };
    return(
        <li className="goal-item">{props.children}
         <Button onClick={deleteHandler}>Delete</Button>
        </li>
       
    ); 
};

export default MyGoalItem;