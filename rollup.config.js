import pkg from './package.json';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import rollupJson from 'rollup-plugin-json';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify-es';

export default {
  input: 'src/index.js',
  output: [{
    name: pkg.name,
    file: pkg.main,
    format: 'cjs',
    exports: 'named'
  }, {
    file: pkg.module,
    format: 'es'
  }],
  plugins: [
    uglify(),
    babel(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    resolve({
      browser: true
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    rollupJson()
  ]
};