import { Button, TextField } from "@mui/material";
import { ChangeEvent } from "react";

type Props = {
  job: string;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
};

const CreateTodo = ({
  job,
  handleKeyPress,
  handleChange,
  handleClick,
}: Props) => {
  return (
    <div>
      <TextField
        label="Jobs..."
        id="outlined-size-small"
        size="small"
        sx={{
          height: "38px",
        }}
        value={job}
        onKeyDown={handleKeyPress}
        onChange={handleChange}
      />
      <Button onClick={handleClick} variant="contained" sx={{ height: "40px" }}>
        Add{" "}
      </Button>
    </div>
  );
};

export default CreateTodo;
