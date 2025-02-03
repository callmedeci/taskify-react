import { useState } from 'react';

import { XMarkIcon } from '@heroicons/react/16/solid';

import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

function AddEditTask({ onAdd, onEdit, onClose, taskToEdit = null }) {
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

    if (!isEditing) onAdd(newTask);
    else onEdit(newTask);

    onClose();
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className='relative flex h-fit w-fit flex-col gap-4 rounded bg-zinc-800 p-5 shadow'
    >
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

      <button
        onClick={onClose}
        type='button'
        className='absolute right-2 size-7 cursor-pointer text-rose-600'
      >
        <XMarkIcon />
      </button>
    </form>
  );
}

export default AddEditTask;
