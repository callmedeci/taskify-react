import { useEffect, useReducer } from 'react';

import Modal from '../components/Modal';

import { useUrl } from '../hooks/useUrl';

import { reducer } from '../features/tasksReducer/reducer';
import TaskOperations from '../features/tasks/TaskOperations';
import TaskReducer from '../features/tasksReducer/TaskReducer';
import AddEditTaskReducer from '../features/tasksReducer/AddEditTaskReducer';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks-redcuer')) || [],
};

function TasksReducer() {
  const [{ tasks }, dispatch] = useReducer(reducer, initialState);

  const { readUrl } = useUrl('sortBy');
  const sortBy = readUrl || 'date-desc';
  const [filed, direction] = sortBy.split('-');
  const modifier = direction === 'asc' ? 1 : -1;

  const sortedTasks = tasks.sort(
    (a, b) => a[filed].localeCompare(b[filed]) * modifier,
  );

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
            <AddEditTaskReducer dispatch={dispatch} />
          </Modal.Window>
        </Modal>
      </div>

      {tasks.length !== 0 && (
        <div className='mt-8 flex flex-wrap gap-10'>
          {sortedTasks.map((task) => (
            <TaskReducer dispatch={dispatch} task={task} key={task.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default TasksReducer;
