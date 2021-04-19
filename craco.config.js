module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.jsx',
  ],
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
};
