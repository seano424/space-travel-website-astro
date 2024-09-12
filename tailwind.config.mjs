/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'


export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"theme-dark": 'hsl(230, 35%, 7%)',
				"theme-accent": 'hsl(231, 77%, 90%)',
				"theme-white": 'hsl(0, 0%, 100%)',
			},
			container: {
				center: true,
				padding: '2rem',
			},
			letterSpacing: {
				"1": '2.7px',
				"2": '4.72px',
			}
		},
		fontFamily: {
			"sans-cond": ['Barlow Condensed', ...defaultTheme.fontFamily.sans],
			sans: ['Barlow', ...defaultTheme.fontFamily.sans],
			serif: ['Bellefair', ...defaultTheme.fontFamily.serif],
		},
		fontSize: {
			'3xl': '9.375rem',
			'2xl': '6.25rem',
			'xl': '3.5rem',
			'lg': '2rem',
			'md': '1.75rem',
			'base': '1.25rem',
			'sm': '1rem',
			'2xs': '0.875rem',
		},

	},
	plugins: [],
}
