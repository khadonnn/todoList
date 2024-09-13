import { Button } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
const Icon = ({
  isCompleted,
  handleCompleted,
  todoId,
}: {
  isCompleted: boolean;
  handleCompleted: (todoId: string) => void;
  todoId: string;
}) => {
  return (
    <div onClick={() => handleCompleted(todoId)}>
      {isCompleted ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
    </div>
  );
};
const Todo = ({
  todoId,
  name,
  isCompleted,
  handleCompleted,
}: {
  todoId: string;
  name: string;
  isCompleted: boolean;
  handleCompleted: (todoId: string) => void;
}) => {
  return (
    <Button
      style={{
        justifyContent: "space-between",
        textDecoration: isCompleted ? "line-through" : "none",
      }}
      fullWidth={true}
      endIcon={
        <Icon
          todoId={todoId}
          isCompleted={isCompleted}
          handleCompleted={handleCompleted}
        />
      }
    >
      {name}
    </Button>
  );
};

export default Todo;
