import { footer, navigation } from '../data/data';

const Footer = () => {
	return (
		<footer id='footer' className='bg-primary'>
			<div className='px-6 py-20 mx-auto overflow-hidden max-w-7xl sm:py-24 lg:px-8'>
				<nav className='-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12' aria-label='Footer'>
					{navigation.map((item) => (
						<div key={item.name} className='pb-6'>
							<a href={item.href} className='text-sm leading-6 text-gray-300 hover:text-newWhite'>
								{item.name}
							</a>
						</div>
					))}
				</nav>
				<p className='mt-10 text-xs leading-5 text-center text-newWhite'>&copy; {footer.copyright}</p>
			</div>
		</footer>
	);
};

export default Footer;
