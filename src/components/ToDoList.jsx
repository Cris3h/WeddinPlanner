import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

function ToDoList() {
  return (
    <Stack
      component="form"
      //   sx={{
      //     width: "25ch",
      //   }}
      spacing={2}
      noValidate
      autoComplete="off"
      fullwidth='true'
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="new task"
        variant="filled"
        size="small"
      />
      <Button
        type="submit"
        fullwidth='true'
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >add</Button>
    </Stack>
  );
}

export default ToDoList;
