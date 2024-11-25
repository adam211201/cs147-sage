/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				newWhite: {
					DEFAULT: '#FFFCF4',
				},
				primary: {
					DEFAULT: '#1C3A32',
				},
				secondary: {
					DEFAULT: '#BDDF50',
				},
			},
		},
	},
	plugins: [],
};
