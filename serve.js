import { context } from "esbuild";
// import { minifyHTMLLiteralsPlugin } from "esbuild-plugin-minify-html-literals";
// import { litCssPlugin } from "esbuild-plugin-lit-css";
/**
 * @type import("esbuild").BuildOptions
 */
const appOptions = {
  bundle: true,
  minify: false,
  minifyWhitespace: true,
  minifySyntax: true,
  sourcemap: true,
  target: ["es2022"],
  platform: "browser",
  format: "esm",
  logLevel: "info",
  outdir: "docs",
  entryPoints: ["src/WcGantt.ts"],
  plugins: [
    // minifyHTMLLiteralsPlugin({
    //   minifyOptions: { keepClosingSlash: true },
    // }),
    // litCssPlugin(),
  ],
};

const serveOptions = {
  servedir: "docs",
  host: "localhost",
};
let buildCtx = await context(appOptions);
await buildCtx.rebuild();
// if (dev) {
//   await buildCtx.watch();
// }
let serveResult = await buildCtx.serve(serveOptions);
