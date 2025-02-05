import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';

const toolKitStore = configureStore({
  reducer: {
    tasksReducer,
  },
});

export default toolKitStore;
