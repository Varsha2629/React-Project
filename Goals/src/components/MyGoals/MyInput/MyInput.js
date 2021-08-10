import React,{ useState } from 'react';
import Button from '../../UI/Button/Button';
import  './MyInput.css';
const MyInput = (props) => {
    const [enteredValue, setEnteredValue] = useState('');

    const goalInputChangeHandler = event =>{
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        props.onAddGoal(enteredValue);
    };


    return (
        <form onSubmit={formSubmitHandler}>
            {/* <div className={`form-control ${!isValid ? 'invalid': ''}`}> */}

           <div className="form-control">     
                <label>My Goals</label>
                <input type="text"  onChange={goalInputChangeHandler} />
             </div> 
                <Button type="submit">ADD Goal</Button>
        </form>
    );
};

export default MyInput;