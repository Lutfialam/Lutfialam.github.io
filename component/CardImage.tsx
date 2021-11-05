const CardImage: React.FC<{
    projectDescription: string,
    projectName: string,
    projectUrl: string,
    imagePath: string,
    cardWidth?: string
}> = ({ projectName, projectDescription, projectUrl, imagePath, cardWidth }) => {
    
    return(
        <div className={`flex flex-col rounded-lg shadow-xl overflow-hidden bg-white w-full md:${cardWidth ?? 'w-2/5'} p-1 m-2`}>
            {/* <div className="relative w-full h-56">
                <Image src={imagePath} loader={myLoader} className="rounded-t-lg object-cover object-left-top" alt={projectDescription} layout="fill" />
            </div> */}
            <img src={imagePath} alt={projectDescription} className="rounded-t-lg object-cover object-left-top w-full h-56"/>
            <div className="flex justify-between">
                <h1 className="p-3 text-lg text-gray-800">{projectName}</h1>
                {/* <Link href={projectUrl}>
                    <a>
                        <h1 className="p-3 text-lg flex text-indigo-600">
                            Detail 
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                            </svg>
                        </h1>
                    </a>
                </Link> */}
            </div>
        </div>
    )
}

export default CardImage;