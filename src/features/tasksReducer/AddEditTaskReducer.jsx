import { useState } from 'react';

import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

function AddEditTaskReducer({ dispatch, onClose, taskToEdit = null }) {
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
      date: !isEditing ? new Date().toISOString() : taskToEdit.date,
    };

    if (!isEditing) dispatch({ type: 'tasks/add', payload: newTask });
    else dispatch({ type: 'tasks/edit', payload: newTask });

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

export default AddEditTaskReducer;
