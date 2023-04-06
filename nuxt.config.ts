// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  components: {
    dirs: ['~/components'],
  },
  css: [
    '~/assets/styles/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  vite: {
    plugins: [svgLoader()],
  },
});
