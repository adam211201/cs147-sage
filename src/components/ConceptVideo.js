import { conceptVideo } from '../data/data';

const ConceptVideo = () => {
	return (
		<div id='conceptvideo' className='py-24 bg-primary sm:py-32'>
			<div className='px-6 mx-auto max-w-7xl lg:px-8'>
				<div className='max-w-2xl mx-auto lg:text-center'>
					<p className='mt-2 text-3xl font-bold tracking-tight text-newWhite sm:text-4xl'>{conceptVideo.title}</p>
					<p className='mt-6 text-lg leading-8 text-gray-300'>{conceptVideo.description}</p>
				</div>
				<div className='flex justify-center max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-none'>
					<iframe
						width='711'
						height='400'
						src='https://www.youtube.com/embed/TUanJR0KmYA?si=arPSHL5gF1Z_HQZi&rel=0'
						title='Sage Concept Video'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
						allowFullScreen
					></iframe>
				</div>
				<div className='flex justify-center max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-none'>
					<iframe
						width='711'
						height='400'
						src='https://www.youtube.com/embed/mawVyo7etUw?si=wa8grpLPEPooOzf8&rel=0'
						title='Sage Demo Video'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
						allowFullScreen
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default ConceptVideo;
