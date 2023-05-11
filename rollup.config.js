import typescript from "rollup-plugin-typescript2";
import serve from 'rollup-plugin-serve'
import pkg from "./package.json";

export default {
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
    typescript({ objectHashIgnoreUnknownHack: true }),
    serve({
      open: true,
      contentBase: ['dist', 'examples'],
    })
  ],
  external: ["react", "react-dom"],
};