import { Disclosure, Transition } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import { faqs } from '../data/data';

const FAQs = () => {
	return (
		<div id='faqs' className='bg-newWhite'>
			<div className='px-6 py-24 mx-auto max-w-7xl sm:py-32 lg:px-8 lg:py-40'>
				<div className='max-w-4xl mx-auto divide-y divide-gray-900/10'>
					<h2 className='text-2xl font-bold leading-10 tracking-tight text-gray-900'>{faqs.title}</h2>
					<dl className='mt-10 space-y-6 divide-y divide-gray-900/10'>
						{faqs.questions.map((faq) => (
							<Disclosure as='div' key={faq.question} className='pt-6'>
								{({ open }) => (
									<>
										<dt>
											<Disclosure.Button className='flex items-start justify-between w-full text-left text-gray-900'>
												<span className='text-base font-semibold leading-7'>{faq.question}</span>
												<span className='flex items-center ml-6 h-7'>
													{open ? <MinusSmallIcon className='w-6 h-6' aria-hidden='true' /> : <PlusSmallIcon className='w-6 h-6' aria-hidden='true' />}
												</span>
											</Disclosure.Button>
										</dt>
										<Transition
											enter='transition duration-100 ease-out'
											enterFrom='transform scale-95 opacity-0'
											enterTo='transform scale-100 opacity-100'
											leave='transition duration-75 ease-out'
											leaveFrom='transform scale-100 opacity-100'
											leaveTo='transform scale-95 opacity-0'
										>
											<Disclosure.Panel as='dd' className='pr-12 mt-2'>
												<p className='text-base leading-7 text-gray-600'>{faq.answer}</p>
											</Disclosure.Panel>
										</Transition>
									</>
								)}
							</Disclosure>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
};

export default FAQs;
