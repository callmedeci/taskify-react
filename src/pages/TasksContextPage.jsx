import Modal from '../components/Modal';

import { useSortValues } from '../hooks/useSortValues';

import { useTasks } from '../features/tasksContext/TasksContext';
import TaskOperations from '../features/tasks/TaskOperations';
import Task from '../features/tasksContext/Task';
import AddEditTask from '../features/tasksContext/AddEditTask';

function TasksContextPage() {
  const { tasks } = useTasks();
  const [sortedTasks] = useSortValues(tasks);

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
            <AddEditTask />
          </Modal.Window>
        </Modal>
      </div>

      {tasks.length !== 0 && (
        <div className='mt-8 flex flex-wrap gap-10'>
          {sortedTasks.map((task) => (
            <Task task={task} key={task.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default TasksContextPage;
