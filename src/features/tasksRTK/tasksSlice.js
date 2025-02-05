import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

//Redux-ToolKit (RTK)
const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks-redux/toolKit')) || [],
};

const tasksSlice = createSlice({
  name: 'tasks',

  initialState,

  reducers: {
    addTask: {
      prepare(title, status) {
        return {
          payload: {
            title,
            status,
            id: Date.now(),
            created_at: new Date().toISOString(),
          },
        };
      },

      reducer(state, action) {
        toast.remove();
        toast.success('Successfully created!');

        state.tasks = [
          ...state.tasks,
          {
            title: action.payload.title,
            status: action.payload.status,
            id: action.payload.id,
            date: action.payload.date,
          },
        ];

        localStorage.setItem(
          'tasks-redux/toolKit',
          JSON.stringify(state.tasks),
        );
      },
    },

    editTask(state, action) {
      toast.remove();
      toast.success('Successfully edited!');

      state.tasks = state.tasks.map((task) =>
        task.id !== action.payload.id
          ? task
          : {
              ...task,
              ...action.payload,
            },
      );

      localStorage.setItem('tasks-redux/toolKit', JSON.stringify(state.tasks));
    },

    deleteTask(state, action) {
      toast.remove();
      toast.success('Successfully deleted!');

      state.tasks = state.tasks.filter((task) => task.id !== action.payload);

      localStorage.setItem('tasks-redux/toolKit', JSON.stringify(state.tasks));
    },
  },
});

export const { deleteTask, editTask, addTask } = tasksSlice.actions;

export const getTasks = (store) => store.tasksReducer.tasks;

export default tasksSlice.reducer;
