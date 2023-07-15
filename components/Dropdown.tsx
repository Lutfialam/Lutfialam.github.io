interface DropdownProps {
  paragraph: React.ReactNode;
  headerText: string;
  icon: string;
  top?: string;
  to: string;
}

const Dropdown: React.FC<DropdownProps> = (props) => {
  const { top, icon, headerText, paragraph, to } = props;

  return (
    <div className='dropdown'>
      <a
        href={to}
        target='_blank'
        rel='noreferrer'
        className='flex content-center  hover:rounded-lg hover:shadow-lg'
      >
        <i className='text-indigo-500' data-feather={icon}></i>
      </a>

      <div
        className={`dropdown-content ${
          top ?? '-mt-10'
        } w-96 rounded-lg ml-10 z-50 bg-white dark:bg-gray-800`}
      >
        <div className='px-6 text-sm py-3'>
          <h1 className='mb-2 text-lg font-bold text-gray-700 dark:text-gray-500'>
            {headerText}
          </h1>
          {paragraph}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
