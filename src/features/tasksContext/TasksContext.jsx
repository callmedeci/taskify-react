import { createContext, useContext, useEffect, useReducer } from 'react';
import { reducer } from '../tasksReducer/reducer';

const TasksContext = createContext();

const initialState = () => {
  return {
    tasks: JSON.parse(localStorage.getItem('tasks-context')) || [],
  };
};

function TasksProvider({ children }) {
  const [{ tasks }, dispatch] = useReducer(reducer, initialState());

  useEffect(
    function () {
      localStorage.setItem('tasks-context', JSON.stringify(tasks));
    },
    [tasks],
  );

  function addTask(newTask) {
    dispatch({ type: 'tasks/add', payload: newTask });
  }

  function deleteTask(id) {
    dispatch({ type: 'tasks/delete', payload: id });
  }

  function editTask(editedTask) {
    dispatch({ type: 'tasks/edit', payload: editedTask });
  }

  return (
    <TasksContext.Provider value={{ tasks, addTask, deleteTask, editTask }}>
      {children}
    </TasksContext.Provider>
  );
}

export const useTasks = function () {
  const context = useContext(TasksContext);

  if (!context) throw new Error('Hook used outside the TasksProvider!');

  return context;
};

export default TasksProvider;
