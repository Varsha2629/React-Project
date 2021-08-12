import React from 'react';

const MyGoalItem = (props) =>{
    const deleteHandler = ()=> {
        props.onDelete(props.id);        
    };
    return(
        <li className="goal-item">{props.children}
         <button className="btn" onClick={deleteHandler}>Delete</button>
        </li>
       
    ); 
};

export default MyGoalItem;