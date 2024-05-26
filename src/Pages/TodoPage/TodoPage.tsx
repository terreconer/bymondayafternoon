import { TodoForm } from "../../Organisms";

// import './styles/TodoPage.css';

const TodoPage = () => {
  return (
    <div className="todo-page">
      <div className="todo-page-wrapper">
        <div className="todo-form">
          <TodoForm />
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
