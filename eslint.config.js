import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import litPlugin from "eslint-plugin-lit";
import globals from "globals";
import parser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  { rules: tsPlugin.configs.recommended.rules },
  { rules: litPlugin.configs.recommended.rules },
  {
    files: ["src/**/*.js", "src/**/*.ts"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        project: true,
      },
    },
    plugins: { "@typescript-eslint": tsPlugin, lit: litPlugin },
    rules: {
      "lit/no-legacy-template-syntax": "error",
      "lit/no-template-arrow": "warn",
    },
  },
];
