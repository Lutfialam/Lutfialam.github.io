interface CardImageProps {
  projectDescription: string;
  projectName: string;
  projectUrl: string;
  imagePath: string;
  cardWidth?: string;
}

const CardImage: React.FC<CardImageProps> = ({
  projectName,
  projectDescription,
  imagePath,
  cardWidth,
}) => {
  return (
    <div
      className={`flex flex-col rounded-lg shadow-xl overflow-hidden bg-white w-full md:${
        cardWidth ?? 'w-2/5'
      } p-1 m-2`}
    >
      <img
        src={imagePath}
        alt={projectDescription}
        className='rounded-t-lg object-cover object-left-top w-full h-56'
      />
      <div className='flex justify-between'>
        <h1 className='p-3 text-lg text-gray-800'>{projectName}</h1>
      </div>
    </div>
  );
};

export default CardImage;
