/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor: {
				'primary': '#141414',
				'secondary': '#1D1D1D',
				'accent-1': '#4355FB'
			},
			borderColor: {
				'primary': '#232323'
			},
			colors: {
				'secondary': '#B3B3B3',
			},
			maxWidth: {
				'8xl': '1280px'
			},
			borderRadius: {
				'5xl': '2.5rem'
			},
		},
	},
	plugins: [],
}
