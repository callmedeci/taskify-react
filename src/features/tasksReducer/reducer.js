import toast from 'react-hot-toast';

export function reducer(state, action) {
  switch (action.type) {
    case 'tasks/add':
      if (!action.payload) return state;

      toast.remove();
      toast.success('Successfully created!');

      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case 'tasks/delete':
      if (!action.payload) return state;

      toast.remove();
      toast.success('Successfully deleted!');

      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case 'tasks/edit':
      if (!action.payload) return state;

      toast.remove();
      toast.success('Successfully edited!');

      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id !== action.payload.id
            ? task
            : {
                ...action.payload,
              },
        ),
      };

    default:
      throw new Error('Unknow action type');
  }
}
