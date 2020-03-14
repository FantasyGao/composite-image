import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import clear from 'rollup-plugin-clear';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'composite-image.js',
      format: 'umd',
      name: pkg.packageName
    },
    {
      file: 'dist/bundle.js',
      format: 'cjs',
      sourcemap: true,
      name: pkg.packageName
    },
  ],
  plugins: [
    resolve({
      browser: true,
      extensions: [ '.ts', '.js', '.json', '.node' ],
    }),
    typescript({
      useTsconfigDeclarationDir: true,
      clean: true,
      abortOnError: true,
    }),
    babel({
      exclude: [/\/core-js\//],
      runtimeHelpers: true,
      sourceMap: true,
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts']
    }),
    commonjs(),
    clear({
      targets: ['./dist']
    }),
  ]
};