import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Starlight Game Development Docs',
			social: {
				github: 'https://github.com/FifthCircleStudios/starlight',
			},
			sidebar: [
				{
					label: 'Main Docs',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'The Guidebook', slug: 'guides/docguide' },
						{ title: 'Introduction', slug: '/guides/introduction' },
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
