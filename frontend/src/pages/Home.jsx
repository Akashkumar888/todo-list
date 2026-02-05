
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

const Home = () => {
  return (
    <div className="container">
      <h1>To Do List</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default Home;
