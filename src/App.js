import "./App.css";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import CourseInput from "./components/CourseInput";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Complete exercises", id: "1" },
    { text: "Commit to github", id: "2" },
  ]);

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Please start adding!</p>
  );

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];

      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });

      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>

      <section id="goals">{content}</section>
    </div>
  );
};

export default App;
