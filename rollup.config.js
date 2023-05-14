import typescript from "rollup-plugin-typescript2";
import serve from "rollup-plugin-serve";
import pkg from "./package.json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import replace from "@rollup/plugin-replace";
import sass from "rollup-plugin-sass";
import image from "@rollup/plugin-image";
import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "src/index.tsx",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        exports: "named",
        sourcemap: true,
        strict: false,
        banner: `"use client"`,
      },
    ],
    plugins: [
      sass({ insert: true }),
      typescript({ objectHashIgnoreUnknownHack: true }),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "examples/App.js",
    output: [
      {
        file: "example-dist/bundle.js",
        format: "iife",
        sourcemap: true,
      },
    ],
    plugins: [
      image(),
      postcss({
        extract: true,
        extensions: [".css"],
      }),
      replace({
        preventAssignment: true,
        "process.env.NODE_ENV": JSON.stringify("development"),
      }),
      nodeResolve({
        extensions: [".js"],
      }),
      babel({
        babelrc: false,
        presets: [
          [
            "@babel/preset-react",
            {
              runtime: "automatic",
            },
          ],
        ],
      }),
      commonjs(),
      serve({
        open: true,
        verbose: true,
        contentBase: ["", "public"],
      }),
      livereload({ watch: "example-dist" }),
    ],
  },
];
