import { build } from "esbuild";
import { minifyHTMLLiteralsPlugin } from "esbuild-plugin-minify-html-literals";
import { litCssPlugin } from "esbuild-plugin-lit-css";

/**
 * @type import("esbuild").BuildOptions
 */
const opts = {
  bundle: true,
  minify: true,
  minifyWhitespace: true,
  minifySyntax: true,
  sourcemap: false,
  target: ["es2022"],
  platform: "browser",
  format: "esm",
  logLevel: "info",
  outdir: "dist",
  entryPoints: ["src/WcGantt.ts"],
  plugins: [
    minifyHTMLLiteralsPlugin({
      minifyOptions: { keepClosingSlash: true },
    }),
    litCssPlugin(),
  ],
};
await build(opts);
