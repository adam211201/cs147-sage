import { ourTeam } from '../data/data';

const OurTeam = () => {
	return (
		<div id='ourteam' className='py-24 bg-newWhite sm:py-32'>
			<div className='grid px-6 mx-auto max-w-7xl gap-x-8 gap-y-20 lg:px-8 xl:grid-cols-3'>
				<div className='max-w-2xl'>
					<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>{ourTeam.title}</h2>
					<p className='mt-6 text-lg leading-8 text-gray-600'>{ourTeam.description}</p>
				</div>
				<ul className='grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2'>
					{ourTeam.team.map((person) => (
						<li key={person.name}>
							<div className='flex items-center gap-x-6'>
								<img className='w-20 h-20 rounded-full' src={person.imageUrl} alt={person.name} />
								<div>
									<a
										href={person.linkedin}
										className='inline-block text-lg font-semibold leading-7 tracking-tight text-gray-900 transition duration-300 group hover:text-secondary '
										target='_blank'
										rel='noreferrer'
									>
										{person.name}
										<span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-secondary'></span>
									</a>
									<p className='text-sm font-semibold leading-6 text-gray-600'>{person.role}</p>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default OurTeam;
