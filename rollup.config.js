import typescriptPlugin from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: {
    file: pkg.main,
    format: 'cjs',
    sourcemap: true
  },
  plugins: [
    typescriptPlugin({ typescript: require('typescript') }),
  ]
};