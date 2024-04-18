import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import del from 'rollup-plugin-delete'

export default [
  {
    input: './src/index.ts',
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        entryFileNames: '[name].cjs.js'
      },
      {
        dir: 'dist',
        format: 'esm',
        entryFileNames: '[name].esm.js'
      }
    ],
    plugins: [
      del({ targets: ['dist/*'] }),
      resolve(),
      commonjs(),
      typescript({ module: 'ESNext' }),
      terser({
        format: {
          comments: false //去掉打包后的注释
        }
      })
    ]
  }
]
