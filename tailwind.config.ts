import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				cursive: ['cursive']
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
} as Config;
