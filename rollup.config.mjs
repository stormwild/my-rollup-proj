import json from '@rollup/plugin-json'

// rollup.config.mjs
export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs',
  },
  plugins: [json()],
}
