import Button from './Button';

function DeleteConfirmation({ source, onClose, onDelete }) {
  return (
    <div className='flex flex-col p-2'>
      <h3 className='text-xl font-semibold'>
        Are you sure to delete {source}?
      </h3>

      <div className='mt-5 flex justify-between gap-5'>
        <Button onClick={onClose} size='large'>
          No
        </Button>
        <Button onClick={onDelete} size='large' variations='danger'>
          Yes
        </Button>
      </div>
    </div>
  );
}

export default DeleteConfirmation;
