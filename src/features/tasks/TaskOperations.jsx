import SortBy from '../../components/SortBy';
import Button from '../../components/Button';

function TaskOperations({ onOpen }) {
  return (
    <div className='flex gap-2'>
      <SortBy
        options={[
          { label: 'Sort by date (earlier first)', value: 'created_at-asc' },
          { label: 'Sort by date (recent first)', value: 'created_at-desc' },
          { label: 'Sort by title (A-Z)', value: 'title-asc' },
          { label: 'Sort by title (Z-A)', value: 'title-desc' },
          { label: 'Sort by Status (A-Z)', value: 'status-asc' },
          { label: 'Sort by Status (Z-A)', value: 'status-desc' },
        ]}
      />
      <Button onClick={onOpen}>Add a new Task</Button>
    </div>
  );
}

export default TaskOperations;
