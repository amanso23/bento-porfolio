/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor: {
				'primary': '#141414',
				'secondary': '#1D1D1D',
				'tertiary': '#a09c9f',
				'accent-1': '#4355FB'
			},
			borderColor: {
				'primary': '#232323'
			},
			colors: {
				'secondary': '#B3B3B3',
			},
			maxWidth: {
				'8xl': '1380px'
			},
			borderRadius: {
				'5xl': '2.5rem'
			},
			fontSize: {
				'xxs': '0.625rem'
			},
			stroke: {
				'secondary': '#B3B3B3'
			}
		},
	},
	plugins: [],
}
