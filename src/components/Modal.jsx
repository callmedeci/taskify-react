import { cloneElement, createContext, useContext, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/16/solid';
import { createPortal } from 'react-dom';

import Overlay from './Overlay';
import { useOutSideClick } from '../hooks/useOutSideClick';
import useKey from '../hooks/useKey';
import useShortcutHandler from '../hooks/useShortcutHandler';

const ModalContext = createContext();

function CloseButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      type='button'
      className='absolute top-1 right-1 size-7 cursor-pointer text-rose-600'
    >
      <XMarkIcon />
    </button>
  );
}

function Modal({ children }) {
  const [modalId, setModalId] = useState('');

  const open = setModalId;
  const close = () => setModalId('');

  return (
    <ModalContext.Provider
      value={{
        open,
        close,
        modalId,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function useModal() {
  const state = useContext(ModalContext);

  return state;
}

function Open({ children, id }) {
  const { open } = useModal();

  return cloneElement(children, { onOpen: () => open(id) });
}

function Window({ children, id }) {
  const { modalId, close, open } = useModal();

  const ref = useOutSideClick(close);

  useKey(close, 'Escape');
  useShortcutHandler([78, 84], () => open('add'));

  if (modalId !== id) return null;

  return createPortal(
    <Overlay>
      <div
        ref={ref}
        className='relative flex h-fit w-fit rounded bg-zinc-800 p-5 text-zinc-200 shadow'
      >
        <CloseButton onClick={close} />

        {cloneElement(children, { onClose: close })}
      </div>
    </Overlay>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
