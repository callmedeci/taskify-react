function Select({ options, value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className='cursor-pointer rounded bg-zinc-700 px-3 py-2 font-medium text-blue-300 shadow transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none'
    >
      {options.map((option) => (
        <option value={option.value} key={option.label}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
