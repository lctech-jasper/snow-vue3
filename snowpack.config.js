/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    static: { url: '/staticaa', static: true },
    src:  { url: '/dist' },
    public: { url: '/' },
  },
  alias: {
    'components': './src/components',
    '@app': './src',
    '~': './src',
    '~/public': './public',
    '@pages': './src/pages'
  },
  plugins: [
    // @snowpack/plugin-webpack use for esbuild not yet production-ready
    // https://www.snowpack.dev/guides/optimize-and-bundle#option-1%3A-built-in-optimizations
    // ["@snowpack/plugin-webpack"],
    '@snowpack/plugin-postcss',
    '@snowpack/plugin-sass',
    '@snowpack/plugin-vue',
    '@snowpack/plugin-vue/plugin-tsx-jsx.js',
    '@snowpack/plugin-dotenv',
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    manifest: true,
    // bundle: true,
    // minify: true,
    // target: 'es2020',
    // sourcemap: false,
    // splitting: true,
    // treeshake: true,
  },
  packageOptions: {
    /* ... */
    rollup: {
      plugins: []
    }
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
