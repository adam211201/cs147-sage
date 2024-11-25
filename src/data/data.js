import { v4 as uuidv4 } from 'uuid';

// assignment 1
import assignment1PDF from '../assets/documents/assignment1/pdf.pdf';
import assignment1PPTX from '../assets/documents/assignment1/pptx.pptx';

// assignment 2
import assignment2PDF from '../assets/documents/assignment2/pdf.pdf';
import assignment2PPTX from '../assets/documents/assignment2/pptx.pptx';

// assignment 4
import assignment4PDF from '../assets/documents/assignment4/pdf.pdf';
import assignment4PPTX from '../assets/documents/assignment4/pptx.pptx';
import assignment4Video from '../assets/videos/concept-video.mp4';

// assignment 5
import assignment5PDF from '../assets/documents/assignment5/pdf.pdf';
import assignment5PPTX from '../assets/documents/assignment5/pptx.pptx';
import assignment5SR from '../assets/documents/assignment5/sketching-report.pdf';

// assignment 6
import assignment6PDF from '../assets/documents/assignment6/pdf.pdf';
import assignment6PPTX from '../assets/documents/assignment6/pptx.pptx';
import assignment6R from '../assets/documents/assignment6/readme.pdf';

// assignment 8
import assignment8PDF from '../assets/documents/assignment8/pdf.pdf';
import assignment8PPTX from '../assets/documents/assignment8/pptx.pptx';
import assignment8R from '../assets/documents/assignment8/readme.pdf';

// assignment 9
import assignment9Doc from '../assets/documents/assignment9/report.docx';
import assignment9R from '../assets/documents/assignment9/report.pdf';

// assignment 10
import assignment10PSF from '../assets/documents/assignment10/pitchslide.fig';
import assignment10PS from '../assets/documents/assignment10/pitchslide.pdf';
import assignment10PF from '../assets/documents/assignment10/poster.fig';
import assignment10P from '../assets/documents/assignment10/poster.pdf';
import assignment10S from '../assets/documents/assignment10/script.pdf';
import assignment10Video from '../assets/videos/demo-video.mp4';

// assignment 11
import assignment11PDF from '../assets/documents/assignment11/pdf.pdf';
import assignment11Doc from '../assets/documents/assignment11/report.docx';

import adam from '../assets/images/cropped/adam-cropped.png';
import amy from '../assets/images/cropped/amy-cropped.png';
import brendan from '../assets/images/cropped/brendan-cropped.png';
import ethan from '../assets/images/cropped/ethan-cropped.png';

import qrCode from '../assets/images/qrcode-demo.png';

/* HeroSection and Footer */

const heroSection = {
	title: 'Garden Together.',
	description: 'Where gardening blooms into lasting friendships and vibrant living.',
};

const navigation = [
	{ name: 'Home', href: '#home' },
	{ name: 'Concept Video', href: '#conceptvideo' },
	{ name: 'Our Team', href: '#ourteam' },
	{ name: 'Design Process', href: '#designprocess' },
	{ name: 'FAQs', href: '#faqs' },
];

/* Concept Video */

const conceptVideo = {
	title: "Contextualizing the User's Perspective",
	description: (
		<span>
			Sage is an innovative app designed to revolutionize community gardening for retirees, offering features for easy organization, scheduling, and
			communication within local gardening groups. It not only simplifies participation in gardening activities but also enhances the experience by enabling
			users to invite new members and check in on fellow garden enthusiasts.
			<br></br>
			<br></br>
			More than just a tool for gardening, Sage is a platform that cultivates a thriving community, intertwining the joys of gardening with the growth of
			lasting friendships and communal engagement.
		</span>
	),
};

/* Our Team */

const ourTeam = {
	title: 'Meet The Team',
	description: 'Get to know the passionate individuals who are at the forefront of pushing community-based gardening into the future.',
	team: [
		{
			name: 'Adam B',
			role: 'User Researcher, Mobile Developer',
			imageUrl: adam,
			linkedin: 'https://www.linkedin.com/in/adamjbarry/',
		},
		{
			name: 'Ethan H',
			role: 'User Researcher',
			imageUrl: ethan,
			linkedin: 'https://www.linkedin.com/in/ethan-hellman-1804b0179/',
		},
		{
			name: 'Brendan M',
			role: 'User Researcher, Mobile Developer, UX Designer',
			imageUrl: brendan,
			linkedin: 'https://www.linkedin.com/in/blam0407/',
		},
		{
			name: 'Amy C',
			role: 'User Researcher, UX Designer',
			imageUrl: amy,
			linkedin: 'https://www.linkedin.com/in/chang-amy/',
		},
	],
};

/* Design Process */

const designProcess = {
	title: 'The Design Process',
	description: 'Dive into our design journey, where soil, seeds, and dedication transform ideas into active and fulfilling experiences.',
	assignments: [
		{
			name: 'A1: Needfinding',
			links: [
				{
					id: uuidv4(),
					name: 'PDF',
					href: assignment1PDF,
				},
				{
					id: uuidv4(),
					name: 'PPTX',
					href: assignment1PPTX,
				},
			],
		},
		{
			name: 'A2: Point of View & Experience Prototypes',
			links: [
				{
					id: uuidv4(),
					name: 'PDF',
					href: assignment2PDF,
				},
				{
					id: uuidv4(),
					name: 'PPTX',
					href: assignment2PPTX,
				},
			],
		},
		{
			name: 'A4: Concept Video',
			links: [
				{
					id: uuidv4(),
					name: 'PDF',
					href: assignment4PDF,
				},
				{
					id: uuidv4(),
					name: 'PPTX',
					href: assignment4PPTX,
				},
				{
					id: uuidv4(),
					name: 'YouTube',
					href: 'https://youtu.be/TUanJR0KmYA?si=bPKL9wT8Lbu2P8Wj',
				},
				{
					id: uuidv4(),
					name: 'Video',
					href: assignment4Video,
				},
			],
		},
		{
			name: 'A5: Lo-fi Prototyping',
			links: [
				{
					id: uuidv4(),
					name: 'PDF',
					href: assignment5PDF,
				},
				{
					id: uuidv4(),
					name: 'PPTX',
					href: assignment5PPTX,
				},
				{
					id: uuidv4(),
					name: 'Sketching Report',
					href: assignment5SR,
				},
			],
		},
		{
			name: 'A6: Medium-fi Prototyping',
			links: [
				{
					id: uuidv4(),
					name: 'PDF',
					href: assignment6PDF,
				},
				{
					id: uuidv4(),
					name: 'PPTX',
					href: assignment6PPTX,
				},
				{
					id: uuidv4(),
					name: 'Prototype',
					href: 'https://www.figma.com/proto/EAXKGLaIHmshBPmMbQyaFT/Med-Fi-Prototype-V2?page-id=0%3A1&type=design&node-id=645-3202&viewport=725%2C-1766%2C0.11&t=7zDNFQxWw11ZYqgl-1&scaling=contain&starting-point-node-id=645%3A3202&show-proto-sidebar=1',
				},
				{
					id: uuidv4(),
					name: 'Readme',
					href: assignment6R,
				},
			],
		},
		{
			name: 'A8: High-fi Prototyping',
			links: [
				{
					id: uuidv4(),
					name: 'PDF',
					href: assignment8PDF,
				},
				{
					id: uuidv4(),
					name: 'PPTX',
					href: assignment8PPTX,
				},
				{
					id: uuidv4(),
					name: 'Prototype',
					href: 'exp://u.expo.dev/update/3cee663c-ae3e-49c7-ac80-94bb9bec6cff',
				},
				{
					id: uuidv4(),
					name: 'Readme',
					href: assignment8R,
				},
			],
		},
		{
			name: 'A9: Heuristic Evaluation Synthesis',
			links: [
				{
					id: uuidv4(),
					name: 'PDF',
					href: assignment9R,
				},
				{
					id: uuidv4(),
					name: 'Document',
					href: assignment9Doc,
				},
			],
		},
		{
			name: 'A10: Poster, Pitch, & Demo Video',
			links: [
				{
					id: uuidv4(),
					name: 'Slide',
					href: assignment10PS,
				},
				{
					id: uuidv4(),
					name: 'Slide Source',
					href: assignment10PSF,
				},
				{
					id: uuidv4(),
					name: 'Poster',
					href: assignment10P,
				},
				{
					id: uuidv4(),
					name: 'Poster Source',
					href: assignment10PF,
				},
				{
					id: uuidv4(),
					name: 'Script',
					href: assignment10S,
				},
				{
					id: uuidv4(),
					name: 'YouTube',
					href: 'https://youtu.be/mawVyo7etUw?si=wa8grpLPEPooOzf8',
				},
				{
					id: uuidv4(),
					name: 'Video',
					href: assignment10Video,
				},
			],
		},
		{
			name: 'A11: Final Report',
			links: [
				{
					id: uuidv4(),
					name: 'PDF',
					href: assignment11PDF,
				},
				{
					id: uuidv4(),
					name: 'Document',
					href: assignment11Doc,
				},
			],
		},
	],
};

/* FAQs */

const faqs = {
	title: 'Frequently Asked Questions',
	questions: [
		{
			question: 'What is Sage?',
			answer: (
				<span>
					Sage is more than just an app; it's a movement to redefine community gardening for the elderly. Acting as a virtual hub, it empowers garden
					enthusiasts to organize, schedule, and participate in local gardening groups with ease. Sage enables users to select garden locations, facilitate
					group communication, and manage event attendance, seamlessly blending practical gardening tasks with the art of community building.
					<br></br>
					<br></br>
					At its heart, Sage is about nurturing people as much as plants. It's a platform dedicated to enriching the lives of the elderly, providing not just a
					space for gardening, but a realm for fostering deep connections, encouraging physical activity, and instilling a sense of fulfillment. Through
					features like inviting new members and facilitating regular check-ins, Sage fosters a nurturing environment where every member feels valued and
					connected, cultivating a thriving community where gardening becomes a conduit for health, happiness, and belonging.
				</span>
			),
		},
		{
			question: 'How do I get started with the Sage?',
			answer: (
				<span>
					Getting started with Sage is simple! Download the app from your device's app store, sign up or log in, and you're good to go. The app is available on
					both iOS and Android platforms.
					<br></br>
					<br></br>
					<img src={qrCode} className='w-48 h-48' alt='QR Code Demo' />
				</span>
			),
		},
		{
			question: 'Is the app free to use?',
			answer: 'Yes, the app is completely free to use.',
		},
	],
};

/* Footer */

const footer = {
	copyright: '2023 Sage, Inc. All rights reserved.',
};

export { conceptVideo, designProcess, faqs, footer, heroSection, navigation, ourTeam };
