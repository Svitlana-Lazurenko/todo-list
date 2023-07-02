import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload]
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
  }
})

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
export const getTodos = state => state.todos;