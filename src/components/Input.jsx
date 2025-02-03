function Input({ ...props }) {
  return (
    <input
      className='rounded bg-zinc-700 px-3 py-2 text-blue-300 shadow transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none'
      {...props}
    />
  );
}

export default Input;
