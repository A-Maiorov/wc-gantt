import { build } from "esbuild";
import { minifyHTMLLiteralsPlugin } from "esbuild-plugin-minify-html-literals";
import { litCssPlugin } from "esbuild-plugin-lit-css";

/**
 * @type import("esbuild").BuildOptions
 */
const appOptions = {
  bundle: true,
  minify: true,
  minifyWhitespace: true,
  minifySyntax: true,
  sourcemap: true,
  target: ["es2020", "chrome89", "firefox90", "safari14"],
  platform: "browser",
  format: "esm",
  logLevel: "info",
  outdir: "dist",
  entryPoints: ["src/WcGantt.ts"],
  plugins: [minifyHTMLLiteralsPlugin(), litCssPlugin()],
};
await build(appOptions);
