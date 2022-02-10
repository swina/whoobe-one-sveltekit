import adapter from '@sveltejs/adapter-static';
import viteImagemin from 'vite-plugin-imagemin' 
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		vite: {
			plugins: [
				viteImagemin({
				  gifsicle: {
					optimizationLevel: 7,
					interlaced: false,
				  },
				  optipng: {
					optimizationLevel: 7,
				  },
				  mozjpeg: {
					quality: 20,
				  },
				  pngquant: {
					quality: [0.8, 0.9],
					speed: 4,
				  },
				  svgo: {
					plugins: [
					  {
						name: 'removeViewBox',
					  },
					  {
						name: 'removeEmptyAttrs',
						active: false,
					  },
					],
				  },
				}),
			  ],
		},
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
	}
};

export default config;
