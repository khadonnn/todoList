import { TodoType } from "../App";
import Todo from "./Todo";
type Props = {
  todoList: TodoType[];
  handleCompleted: (todoId: string) => void;
};
const TodoList = ({ todoList, handleCompleted }: Props) => {
  return (
    <div>
      {todoList.map((todo) => (
        <Todo
          todoId={todo.id}
          key={todo.id}
          name={todo.name}
          isCompleted={todo.isCompleted}
          handleCompleted={handleCompleted}
        />
      ))}
    </div>
  );
};

export default TodoList;
