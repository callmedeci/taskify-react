import { useState } from 'react';
import { format } from 'date-fns';
import {
  CalendarDaysIcon,
  CheckIcon,
  TrashIcon,
  XMarkIcon,
  PencilSquareIcon,
} from '@heroicons/react/16/solid';

import AddEditTask from './AddEditTask';

import Overlay from '../../components/Overlay';
import Button from '../../components/Button';

//useState + useEffect hook
function Task({ task, onDelete, onEdit }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((open) => !open);
  }

  return (
    <div className='flex h-full w-fit max-w-[30%] flex-col gap-2 rounded bg-zinc-700/70 p-5 shadow'>
      <div className='flex items-center gap-5 text-sm font-medium text-zinc-400'>
        <p>{task.title.length} characters</p>
        <time className='flex items-center gap-1'>
          <CalendarDaysIcon className='size-6' />
          <span>{format(task.created_at, 'MMM dd yyyy')}</span>
        </time>
      </div>
      <h4 className='text-lg'>{task.title}</h4>
      <span className='flex items-center gap-1'>
        {task.status === 'not-completed' && (
          <XMarkIcon className='size-6 text-rose-600' />
        )}
        {task.status === 'completed' && (
          <CheckIcon className='size-6 text-blue-600' />
        )}
        <p className='text-sm font-medium text-zinc-300 capitalize'>
          {task.status.replaceAll('-', ' ')}
        </p>
      </span>

      <div className='flex justify-between'>
        <Button
          onClick={() => onDelete(task.id)}
          variations='danger'
          icon={<TrashIcon className='size-5' />}
        >
          Delete
        </Button>
        <Button
          onClick={handleToggle}
          variations='secondary'
          icon={<PencilSquareIcon className='size-5' />}
        >
          Edit
        </Button>
      </div>

      {isOpen && (
        <Overlay>
          <AddEditTask
            onEdit={onEdit}
            taskToEdit={task}
            onClose={handleToggle}
          />
        </Overlay>
      )}
    </div>
  );
}

export default Task;
