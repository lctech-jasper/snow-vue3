/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    static: { url: '/staticaa', static: true },
    src:  { url: '/dist' },
    public: { url: '/' },
  },
  alias: {
    'componsnts': './src/components',
    '@app': './src',
    '~': './src',
    '~/public': './public',
    '@pages': './src/pages'
  },
  plugins: [
    '@snowpack/plugin-postcss',
    '@snowpack/plugin-sass',
    // [
    //   '@snowpack/plugin-babel',
    //   {
    //     'input': ['.js', '.mjs', '.jsx', '.ts', '.tsx'], // (optional) specify files for Babel to transform
    //     transformOptions: {
    //       // babel transform options
    //     }
    //   }
    // ],
    '@snowpack/plugin-vue',
    '@snowpack/plugin-vue/plugin-tsx-jsx.js',
    '@snowpack/plugin-dotenv',
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
