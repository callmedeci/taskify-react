import { useEffect, useReducer } from 'react';

import Modal from '../components/Modal';

import { useSortValues } from '../hooks/useSortValues';

import { reducer } from '../features/tasksReducer/reducer';
import TaskOperations from '../features/tasks/TaskOperations';
import AddEditTask from '../features/tasksReducer/AddEditTask';
import Task from '../features/tasksReducer/Task';

const initialState = function () {
  const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks-redcuer')) || [],
  };

  return initialState;
};

function TasksReducerPage() {
  const [{ tasks }, dispatch] = useReducer(reducer, initialState());
  const [sortedTasks] = useSortValues(tasks);

  useEffect(
    function () {
      localStorage.setItem('tasks-redcuer', JSON.stringify(tasks));
    },
    [tasks],
  );

  return (
    <>
      <div className='flex justify-between'>
        <h1 className='text-3xl font-semibold text-zinc-100'>
          You have {tasks.length} tasks
        </h1>

        <Modal>
          <Modal.Open id='add'>
            <TaskOperations />
          </Modal.Open>

          <Modal.Window id='add'>
            <AddEditTask dispatch={dispatch} />
          </Modal.Window>
        </Modal>
      </div>

      {tasks.length !== 0 && (
        <div className='mt-8 flex flex-wrap gap-10'>
          {sortedTasks.map((task) => (
            <Task dispatch={dispatch} task={task} key={task.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default TasksReducerPage;
