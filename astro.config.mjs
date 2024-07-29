import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Starlight Game Development Docs',
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			social: {
				github: 'https://github.com/FifthCircleStudios/starlight',
			},
			sidebar: [
				{
					label: 'Main Docs',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'The Guidebook', slug: 'guides/docguide' },
						{ label: 'Introduction', slug: '/guides/introduction' },
						{ label: 'Game Overview', slug: '/guides/gameoverview' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
