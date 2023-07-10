import resolve from '@rollup/plugin-node-resolve'
import scss from 'rollup-plugin-scss';
import copy from 'rollup-plugin-copy'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default [
  {
    input: 'src/index.css.js',
    external: ['react', 'prop-types', 'formik',],
    plugins: [
      copy({
        targets: [
          {
            src: 'assets/fonts/*', dest: 'fonts',
          },
        ]
      }),
      scss({
        output: 'css/casanova-ui.css',
        failOnError: true,
      }),
      resolve(),
      //commonjs(),
      //postcss({
        //modules: true,
        //extract: true
      //})
    ],
    output: [
      {
        file: 'css/index.css.js',
        format: 'es',
        sourcemap: true,
      }
    ],
    watch: {
      chokidar: {
        include: 'src/**/*.scss',
        usePolling: true
      }
    },
  }
];

