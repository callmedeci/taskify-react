import {
  CalendarDaysIcon,
  CheckIcon,
  TrashIcon,
  XMarkIcon,
  PencilSquareIcon,
} from '@heroicons/react/16/solid';

import { format } from 'date-fns';

import Button from '../../components/Button';
import Modal from '../../components/Modal';
import DeleteConfirmation from '../../components/DeleteConfirmation';

import { useTasks } from './TasksContext';
import AddEditTask from './AddEditTask';

//ContextAPI + Reducer Hook
function Task({ task }) {
  const { deleteTask } = useTasks();

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
        <Modal>
          <Modal.Open id='delete'>
            <Button variations='danger' icon={<TrashIcon className='size-5' />}>
              Delete
            </Button>
          </Modal.Open>

          <Modal.Window id='delete'>
            <DeleteConfirmation
              source={task.title}
              onDelete={() => deleteTask(task.id)}
            />
          </Modal.Window>
        </Modal>

        <Modal>
          <Modal.Open id='edit'>
            <Button
              variations='secondary'
              icon={<PencilSquareIcon className='size-5' />}
            >
              Edit
            </Button>
          </Modal.Open>

          <Modal.Window id='edit'>
            <AddEditTask taskToEdit={task} />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
}

export default Task;
