import React, { Dispatch, SetStateAction, useEffect } from 'react';

interface ModalProps {
  modal_id: string;
  open: boolean;
  header: string | React.ReactNode;
  footer: React.ReactNode;
  footer_left?: React.ReactNode;
  state: Dispatch<SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({
  children,
  modal_id,
  open,
  header,
  footer,
  footer_left,
  state,
}) => {
  const openModal = (key: string) => {
    let modal = document.getElementById(key) as HTMLDialogElement;
    let modal_body = document.querySelector(`#${modal_id}_body`);

    modal.showModal();
    document.body.classList.add('overflow-hidden');

    modal_body?.scrollTo({ top: 0 });
    modal.children[0].classList.remove('opacity-0');
    modal.children[0].classList.add('opacity-100');
  };

  const modalClose = (key: string) => {
    state(false);
    let modal = document.getElementById(key) as HTMLDialogElement;
    modal.children[0].classList.remove('opacity-100');
    modal.children[0].classList.add('opacity-0');

    setTimeout(function () {
      document.body.classList.remove('overflow-hidden');
      modal.close();
    }, 100);
  };

  useEffect(() => {
    open ? openModal(modal_id) : null;
  }, [open]);

  return (
    <dialog
      id={modal_id}
      className='bg-transparent z-0 md:relative md:w-screen md:h-screen overflow-hidden'
    >
      <div className='p-7 flex justify-center items-center fixed left-0 top-0 w-full h-full bg-gray-900 bg-opacity-50 z-50 transition-opacity duration-300 opacity-0'>
        <div className='bg-white flex rounded-lg w-full h-full mx-auto'>
          <div className='flex flex-col items-center h-full w-full content-between'>
            <div className='py-4 px-7 flex items-center w-full'>
              <div className='text-gray-900 font-semi-bold text-lg'>
                {header}
              </div>
              <svg
                onClick={() => {
                  modalClose(modal_id);
                }}
                className='ml-auto fill-current text-gray-700 w-5 h-5 cursor-pointer'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 18 18'
              >
                <path d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z' />
              </svg>
            </div>

            <div
              className='overflow-x-hidden overflow-y-auto w-full h-full flex justify-center'
              id={`${modal_id}_body`}
            >
              {children}
            </div>

            <div
              className={`py-4 px-7 flex ${
                footer_left ? 'justify-between' : 'justify-end'
              } items-center w-full`}
            >
              <div className='flex space-x-3'>{footer_left}</div>
              <div className='flex space-x-3'>
                {footer}
                <button
                  type='button'
                  onClick={() => {
                    modalClose(modal_id);
                  }}
                  className='bg-transparent hover:bg-gray-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded hidden md:flex'
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
