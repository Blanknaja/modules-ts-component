import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import babel from 'rollup-plugin-babel';
import {terser} from 'rollup-plugin-terser';
import autoprefixer from 'autoprefixer';
import json from '@rollup/plugin-json';
import image from '@rollup/plugin-image';

import pkg from "./package.json";


export default {
  input: "src/index.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true
    }
  ],
  external: ['styled-components'],
  globals: { 'styled-components': 'styled' },
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss()
  ]
};