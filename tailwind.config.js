const { colors: defaultColors } = require('tailwindcss/defaultTheme');

const colors = {
	...defaultColors,
	...{
		primary: '#0E100F',
		secondary: '#959CAD',
		tertiary: '#F6F6F6',
		slate: '#C8C8C8',
	},
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				roobert: ['var(--font-roobert)'],
				dmsans: ['var(--font-dmsans)'],
			},
			colors: colors,
			backgroundImage: {
				'gradient-primary': 'radial-gradient(125.65% 165.15% at 0% 0%, #A0FF97 29%, #B0FC50 100%)',
				'gradient-hero':
					'radial-gradient(150.99% 66.12% at 75.78% 3.55%, #FFDECD 0%, #FFF5E8 45%, #FFFFFF 100%)',
			},
			borderWidth: {
				3: '3px',
			},
		},
	},
	plugins: ['prettier-plugin-tailwindcss'],
};

