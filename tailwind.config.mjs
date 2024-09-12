/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'


export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				dark: 'hsl(230, 35%, 7%)',
				accent: 'hsl(231, 77%, 90%)',
				white: 'hsl(0, 0%, 100%)',
			}
		},
		fontFamily: {
			"sans-cond": ['Barlow Condensed', ...defaultTheme.fontFamily.sans],
			sans: ['Barlow', ...defaultTheme.fontFamily.sans],
			serif: ['Bellefair', ...defaultTheme.fontFamily.serif],
		},
	},
	plugins: [],
}
