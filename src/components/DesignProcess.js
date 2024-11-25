import { designProcess } from '../data/data';

const DesignProcess = () => {
	return (
		<div id='designprocess' className='py-24 bg-primary sm:py-32'>
			<div className='px-6 mx-auto max-w-7xl lg:px-8'>
				<div className='max-w-2xl mx-auto lg:text-center'>
					<p className='mt-2 text-3xl font-bold tracking-tight text-newWhite sm:text-4xl'>{designProcess.title}</p>
					<p className='mt-6 text-lg leading-8 text-gray-300'>{designProcess.description}</p>
				</div>
				<div className='max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-none'>
					<ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
						{designProcess.assignments.map((process) => (
							<li key={process.name} className='col-span-1 divide-y divide-gray-200 rounded-lg shadow bg-newWhite'>
								<div className='flex flex-col items-center justify-around w-full h-full p-6 text-center'>
									<p className='font-bold'>{process.name}</p>
									<div className='flex flex-row flex-wrap justify-center mt-6'>
										{process.links.map((link, i) => (
											<a
												key={link.id}
												href={link.href}
												className={'group transition duration-300 hover:text-secondary ' + (i !== process.links.length - 1 && 'mr-3')}
												target='_blank'
												rel='noreferrer'
												download={link.name === 'Video' || link.name === 'PPTX'}
											>
												{link.name}
												<span className='block max-w-full transition-all duration-500 h-0.5 bg-gray-900 group-hover:bg-secondary'></span>
											</a>
										))}
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default DesignProcess;
