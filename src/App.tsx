import { ChangeEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

export type TodoType = { id: string; name: string; isCompleted: boolean };

function App() {
  const [todoList, setTodoList] = useState<TodoType[]>(() => {
    const storedTodoList = localStorage.getItem("todoList");
    return storedTodoList ? JSON.parse(storedTodoList) : [];
  });
  const [job, setJob] = useState("");

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setJob(e.target.value);
    console.log(e.target.value);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  const handleClick = () => {
    if (job.trim() === "") return;
    const newTodo: TodoType = {
      id: uuidv4(),
      name: job,
      isCompleted: false,
    };
    setTodoList([newTodo, ...todoList]);
    setJob("");
  };
  const handleCompleted = (todoId: string) => {
    setTodoList((prev) => {
      return prev.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
    });
  };
  return (
    <>
      <h1 style={{ marginBottom: "20px" }}>My list to do</h1>
      <CreateTodo
        job={job}
        handleClick={handleClick}
        handleKeyPress={handleKeyPress}
        handleChange={handleChange}
      />
      <div>
        {/* {todoList.map((todo)=><Todo key={todo.id} name={todo.name}/>)} */}
        <TodoList todoList={todoList} handleCompleted={handleCompleted} />
      </div>
    </>
  );
}

export default App;
