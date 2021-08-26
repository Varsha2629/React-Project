import React, { useEffect, useState } from 'react';
import MyGoalList from './components/MyGoals/MyGoalList/MyGoalList';
import MyInput from './components/MyGoals/MyInput/MyInput';
import './App.css';

const App = () => {
  const [MyGoals, setMyGoals] = useState([]);
  

  useEffect(() => {
  fetch("http://localhost:8000/goals")

      .then((res) => res.json())
      .then(res => setMyGoals(res.items));
    
  }, [MyGoals]);


  const addGoalHandler = (enteredText) => {
    fetch("http://localhost:8000/goals", {

      method:'POST',

      body: JSON.stringify({
        text: enteredText,
        id: Math.random().toString()
      }),
      headers:{
        "Content-type": "application/json; charset=UTF-8"
      }

    })
    .then(res=>res.json())
    .then(res=> setMyGoals(res.items));
   
      // req, res ne set karavano 6e.
    // setMyGoals(prevGoals => {
    //   const updatedGoals = [...prevGoals];
    //   updatedGoals.unshift({ text: enteredText, id: Math.random().toString() })
    //   console.log({ updatedGoals });
    //   return updatedGoals;
    // });
   
  };

  const deleteItemHandler = (goalId) => {

    fetch("http://localhost:8000/goals",{
      method:'DELETE',

      body: JSON.stringify({
        id: goalId
      }),
      headers:{
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(res=>res.json())
    .then(res=> setMyGoals(res.items))
    
   


    // setMyGoals(prevGoals => {
    //   const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId); 
    //   console.log(updatedGoals)
    //   return updatedGoals; 
    // })
  }
  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (MyGoals.length > 0) {
    content = (
      <MyGoalList items={MyGoals} onDeleteItem={deleteItemHandler} />
    ); 
  }


  return (
    <div>
      <section id="goal-form">
        <MyInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
      </section>

    </div>
  );
};

export default App;
