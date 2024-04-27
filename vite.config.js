import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
	base: './',
	build: {
		rollupOptions: {
			input: {
				main: resolve('./', 'index.html'),
				faqAccordion: resolve('./projects/faq-accordion', 'index.html'),
				interactiveRating: resolve(
					'./projects/interactive-rating-component',
					'index.html'
				),
				productReview: resolve(
					'./projects/product-preview-card-component',
					'index.html'
				),
				recipePage: resolve('./projects/recipe-page', 'index.html'),
				resultSummary: resolve(
					'./projects/results-summary-component',
					'index.html'
				),
				socialLinks: resolve('./projects/social-links-profile', 'index.html'),
			},
		},
	},
});
