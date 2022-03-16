import CourseGoalItem from "./CourseGoalItem";
import "../UI/CourseGoalList.css";

const CourseGoalList = ({ items, onDeleteItem }) => {
  return (
    <ul className="goal-list">
      {items.map((item) => (
        <CourseGoalItem key={item.id} id={item.id} onDelete={onDeleteItem}>
          {item.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
