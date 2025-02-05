import { useState } from 'react';

import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from './tasksSlice';

//Redux-ToolKit (RTK)
function AddEditTask({ onClose, taskToEdit = null }) {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(taskToEdit?.title || '');
  const [status, setStatus] = useState(taskToEdit?.status || 'not-completed');

  const isEditing = taskToEdit !== null;

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !status) return;

    if (!isEditing) dispatch(addTask(title, status));
    else
      dispatch(
        editTask({
          title,
          status,
          id: taskToEdit.id,
        }),
      );

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
