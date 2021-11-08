interface DropdownProps {
  paragraph: React.ReactNode;
  headerText: string;
  icon: string;
  top?: string;
  to: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  top,
  icon,
  headerText,
  paragraph,
  to,
}) => {
  return (
    <div className='dropdown'>
      <a
        href={to}
        target='_blank'
        className='flex content-center  hover:rounded-lg hover:shadow-lg'
      >
        <i className='text-indigo-500' data-feather={icon}></i>
      </a>

      <div
        className={`dropdown-content ${
          top ?? '-mt-10'
        } w-96 rounded-lg ml-10 z-50`}
      >
        <div className='px-6 text-sm py-3'>
          <h1 className='mb-2 text-lg'>{headerText}</h1>
          {paragraph}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
