import antfu from "@antfu/eslint-config";
import eslintNextPlugin from "@next/eslint-plugin-next";

export default antfu({
  nextjs: true,
  typescript: true,

  plugins: {
    next: eslintNextPlugin,
  },

  extends: [
    "plugin:@next/next/core-web-vitals",
  ],

  stylistic: {
    indent: 2,
    quotes: "double",
    semi: true,
  },

  rules: {
    "perfectionist/sort-imports": ["error", { tsconfigRootDir: "." }],

    "no-console": "off",

    "unicorn/filename-case": ["error", {
      cases: {
        kebabCase: true,
        pascalCase: true,
      },
      ignore: ["README.md"],
    }],
    // strict safety rules
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-misused-promises": "error",

    // allow 'any' when needed
    "@typescript-eslint/no-explicit-any": "off",
  },
});
