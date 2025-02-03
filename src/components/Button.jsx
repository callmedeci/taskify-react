function Button({
  variations = 'primary',
  size = 'medium',
  icon,
  onClick,
  onOpen,
  disabled,
  children,
}) {
  const globalStyles = `${size === 'large' ? 'flex-1 justify-center' : ''} flex cursor-pointer items-center gap-1 rounded bg-zinc-700 px-3 py-2 font-medium shadow transition-all duration-300 focus:outline-none`;

  const styles = {
    primary:
      'text-blue-300 hover:text-blue-500 focus:ring-2 focus:ring-blue-500',
    secondary:
      'text-yellow-300 hover:text-yellow-500 focus:ring-2 focus:ring-yellow-500',
    danger:
      'text-rose-500 hover:text-rose-700 focus:ring-2 focus:ring-rose-500',
  };

  return (
    <button
      disabled={disabled}
      onClick={onOpen || onClick}
      className={`${styles[variations]} ${globalStyles}`}
    >
      {icon && icon}
      <span>{children}</span>
    </button>
  );
}

export default Button;
