// import Image from 'next/image';
import { useEffect } from 'react';
const feather = require('feather-icons');

interface CardImageProps {
  projectDescription: string;
  projectName: string;
  projectUrl?: string;
  imagePath: string;
  cardWidth?: string;
}

const CardImage: React.FC<CardImageProps> = ({
  projectName,
  projectDescription,
  imagePath,
  cardWidth,
}) => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <div
      className={`flex flex-col rounded-lg shadow-xl overflow-hidden bg-white dark:bg-gray-800 w-full md:${
        cardWidth ?? 'w-2/5'
      } p-1 m-2`}
    >
      {/* <div className='object-cover rounded-t-lg w-full overflow-hidden h-full md:h-56'>
        <Image
          src={imagePath}
          alt={projectDescription}
          className='object-left-top min-h-full'
        />
      </div> */}
      <img
        src={imagePath}
        alt={projectDescription}
        className='rounded-t-lg object-cover object-left-top w-full h-56'
      />
      <div className='flex justify-between'>
        <h1 className='p-3 text-lg text-gray-800 dark:text-gray-500'>
          {projectName}
        </h1>
      </div>
    </div>
  );
};

export default CardImage;
