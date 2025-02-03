function Overlay({ children }) {
  return (
    <div className='fixed top-0 left-0 flex h-full w-full items-center justify-center backdrop-blur-md'>
      {children}
    </div>
  );
}

export default Overlay;
