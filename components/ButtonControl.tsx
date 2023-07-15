import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ButtonControlProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
  action: string;
  disable?: boolean;
  SetScale: (scale: number) => void;
  SetCVPage: (cv: number) => void;
  Scale: number;
  CVPage: number;
}

const ButtonControl: React.FC<ButtonControlProps> = (props) => {
  const { text, action, disable, SetScale, SetCVPage, Scale, CVPage, ...rest } =
    props;

  return (
    <button
      className={`bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded 
          ${
            disable
              ? 'opacity-40'
              : 'hover:bg-gray-500 hover:border-transparent hover:text-white'
          }
        `}
      type='button'
      disabled={disable ?? false}
      onClick={() => {
        switch (action) {
          case 'plus_scale':
            window.innerWidth > 768
              ? SetScale(Scale + 0.1)
              : SetScale(Scale + 0.01);
            break;
          case 'minus_scale':
            window.innerWidth > 768
              ? SetScale(Scale - 0.1)
              : SetScale(Scale - 0.01);
            break;
          case 'prev_page':
            SetCVPage(CVPage - 1);
            break;
          case 'next_page':
            SetCVPage(CVPage + 1);
            break;
        }
      }}
      {...rest}
    >
      {text}
    </button>
  );
};

export default ButtonControl;
