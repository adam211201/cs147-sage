import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment, useState } from 'react';
import { heroSection, navigation } from '../data/data';

import HeroSectionImage from '../assets/images/hero-section.png';
import HomePageImage from '../assets/images/home-page.png';
import LogoGreen from '../assets/images/logo-green.png';
import LogoWhite from '../assets/images/logo-white.png';

const HeroSection = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<div id='home' className='bg-newWhite'>
			<header className='absolute inset-x-0 top-0 z-50'>
				<nav className='flex items-center justify-between p-6 lg:px-8' aria-label='Global'>
					<div className='flex lg:flex-1'>
						<a href='#home' className='-m-1.5 p-1.5'>
							<span className='sr-only'>Sage</span>
							<img className='w-auto h-12' src={LogoWhite} alt='Sage Logo' />
						</a>
					</div>
					<div className='flex lg:hidden'>
						<button
							type='button'
							className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white'
							onClick={() => setMobileMenuOpen(true)}
						>
							<span className='sr-only'>Open main menu</span>
							<Bars3Icon className='w-6 h-6' aria-hidden='true' />
						</button>
					</div>
					<div className='hidden lg:flex lg:flex-2 lg:gap-x-12 lg:justify-end'>
						{navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className='inline-block text-sm font-semibold leading-6 text-white transition duration-300 group hover:text-secondary'
							>
								{item.name}
								<span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-secondary'></span>
							</a>
						))}
					</div>
				</nav>
				<Transition show={mobileMenuOpen} as={Fragment}>
					<Dialog as='div' className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
						<div className='fixed inset-0 z-50' />
						<Transition.Child
							as={Fragment}
							enter='transition duration-100 ease-out'
							enterFrom='transform scale-95 opacity-0'
							enterTo='transform scale-100 opacity-100'
							leave='transition duration-75 ease-out'
							leaveFrom='transform scale-100 opacity-100'
							leaveTo='transform scale-95 opacity-0'
						>
							<Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-newWhite sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
								<div className='flex items-center justify-between'>
									<a href='#home' className='-m-1.5 p-1.5'>
										<span className='sr-only'>Sage</span>
										<img className='w-auto h-12' src={LogoGreen} alt='Sage Logo' />
									</a>
									<button type='button' className='-m-2.5 rounded-md p-2.5 text-gray-700' onClick={() => setMobileMenuOpen(false)}>
										<span className='sr-only'>Close menu</span>
										<XMarkIcon className='w-6 h-6' aria-hidden='true' />
									</button>
								</div>
								<div className='flow-root mt-6'>
									<div className='-my-6 divide-y divide-gray-500/10'>
										<div className='py-6 space-y-2'>
											{navigation.map((item) => (
												<a
													key={item.name}
													href={item.href}
													onClick={() => setMobileMenuOpen(false)}
													className='block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 transition duration-300 rounded-lg hover:text-newWhite hover:bg-primary'
												>
													{item.name}
												</a>
											))}
										</div>
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</Dialog>
				</Transition>
			</header>
			<div className='relative isolate pt-14'>
				<img src={HeroSectionImage} alt='Gardening' className='absolute inset-0 object-cover w-full h-full -z-10' />
				<div className='px-6 py-24 mx-auto max-w-7xl sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40'>
					<div className='max-w-2xl mx-auto lg:mx-0 lg:flex-auto'>
						<h1 className='max-w-lg mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl'>{heroSection.title}</h1>
						<p className='mt-6 text-lg leading-8 text-gray-300'>{heroSection.description}</p>
						<div className='flex items-center mt-10 gap-x-6'>
							<a
								href='exp://u.expo.dev/update/3cee663c-ae3e-49c7-ac80-94bb9bec6cff'
								target='_blank'
								rel='noreferrer'
								className='rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-newWhite shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
							>
								Download Sage
							</a>
							<a href='#conceptvideo' className='inline-block text-sm font-semibold leading-6 text-white transition duration-300 group hover:text-secondary'>
								Learn more <span aria-hidden='true'>→</span>
								<span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-secondary'></span>
							</a>
						</div>
					</div>
					<div className='mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow'>
						<svg viewBox='0 0 366 729' role='img' className='mx-auto w-[22.875rem] max-w-full drop-shadow-xl'>
							<title>App Screenshot</title>
							<defs>
								<clipPath id='2ade4387-9c63-4fc4-b754-10e687a0d332'>
									<rect width={316} height={672} rx={36} />
								</clipPath>
							</defs>
							<path
								fill='#4B5563'
								d='M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z'
							/>
							<path
								fill='#343E4E'
								d='M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z'
							/>
							<foreignObject width={316} height={672} transform='translate(24 24)' clipPath='url(#2ade4387-9c63-4fc4-b754-10e687a0d332)'>
								<img src={HomePageImage} style={{ width: '100%', height: '100%' }} alt='Sage' />
							</foreignObject>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
