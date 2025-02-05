import { useState } from 'react';

import { useTasks } from './TasksContext';

import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

//ContextAPI + Reducer Hook
function AddEditTask({ onClose, taskToEdit = null }) {
  const { addTask, editTask } = useTasks();

  const [title, setTitle] = useState(taskToEdit?.title || '');
  const [status, setStatus] = useState(taskToEdit?.status || 'not-completed');

  const isEditing = taskToEdit !== null;

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !status) return;

    const newTask = {
      title,
      status,
      id: !isEditing ? Date.now() : taskToEdit.id,
      created_at: !isEditing ? new Date().toISOString() : taskToEdit.date,
    };

    if (!isEditing) addTask(newTask);
    else editTask(newTask);

    onClose();
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col gap-4'>
      <h1 className='text-3xl font-semibold'>
        {isEditing ? 'Edit  Task' : 'Add new Task'}
      </h1>
      <div className='flex gap-2'>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type='text'
        />
        <Select
          value={status}
          onChange={setStatus}
          options={[
            { label: 'Not completed', value: 'not-completed' },
            { label: 'Completed', value: 'completed' },
          ]}
        />
      </div>

      <Button size='large'>{isEditing ? 'Edit  Task' : 'Add new Task'}</Button>
    </form>
  );
}

export default AddEditTask;
