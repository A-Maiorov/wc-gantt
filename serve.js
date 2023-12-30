import { build, context } from "esbuild";

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
  outdir: "docs",
  entryPoints: ["src/WcGantt.ts"],
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
