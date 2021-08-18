import React, { useState } from 'react';
import MyGoalList from './components/MyGoals/MyGoalList/MyGoalList';
import MyInput from './components/MyGoals/MyInput/MyInput';
import './App.css';

const App = () => {
  const [MyGoals, setMyGoals] = useState([
    { text: 'Do all Tasks!', id: 'g1' },
    { text: 'Complete everyday Tasks!', id: 'g2' }
  ]);

  const addGoalHandler = enteredText => {

    setMyGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() })
      console.log({ updatedGoals });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setMyGoals(prevGoals => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;      
    })
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
