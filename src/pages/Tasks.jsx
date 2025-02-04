import { useState } from 'react';

import Overlay from '../components/Overlay';

import { useLocalStorage } from '../hooks/useLocalStorage';
import Task from '../features/tasks/Task';
import TaskOperations from '../features/tasks/TaskOperations';
import AddEditTask from '../features/tasks/AddEditTask';
import { useSortValues } from '../hooks/useSortValues';

function Tasks() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [sortedTasks] = useSortValues(tasks);

  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((open) => !open);
  }

  function handleAdd(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleDelete(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleEdit(editedTask) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id !== editedTask.id
          ? task
          : {
              ...editedTask,
            },
      ),
    );
  }

  return (
    <>
      <div className='flex justify-between'>
        <h1 className='text-3xl font-semibold text-zinc-100'>
          You have {tasks.length} tasks
        </h1>

        <TaskOperations onOpen={handleToggle} />

        {isOpen && (
          <Overlay>
            <AddEditTask onAdd={handleAdd} onClose={handleToggle} />
          </Overlay>
        )}
      </div>

      {tasks.length !== 0 && (
        <div className='mt-8 flex flex-wrap gap-10'>
          {sortedTasks.map((task) => (
            <Task
              key={task.id}
              onDelete={handleDelete}
              onEdit={handleEdit}
              task={task}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Tasks;
