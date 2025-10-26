import next from "eslint-config-next";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

export default [
  ...next,

  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
    },
    rules: {
      // Airbnb 스타일 React 규칙
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error",
      "react/jsx-key": "error",
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-no-undef": "error",
      "react/no-danger-with-children": "error",
      "react/no-deprecated": "error",
      "react/no-direct-mutation-state": "error",
      "react/no-find-dom-node": "error",
      "react/no-is-mounted": "error",
      "react/no-render-return-value": "error",
      "react/no-string-refs": "error",
      "react/no-unescaped-entities": "error",
      "react/no-unknown-property": "error",
      "react/no-unsafe": "error",
      "react/require-render-return": "error",

      // Airbnb 스타일 Import 규칙
      "import/no-unresolved": "error",
      "import/named": "error",
      "import/default": "error",
      "import/namespace": "error",
      "import/no-absolute-path": "error",
      "import/no-dynamic-require": "error",
      "import/no-webpack-loader-syntax": "error",
      "import/no-self-import": "error",
      "import/no-cycle": "error",
      "import/no-useless-path-segments": "error",
      "import/no-relative-parent-imports": "off",
      "import/export": "error",
      "import/no-named-as-default": "error",
      "import/no-named-as-default-member": "error",
      "import/no-deprecated": "error",
      "import/no-extraneous-dependencies": "error",
      "import/no-mutable-exports": "error",
      "import/no-unused-modules": "error",
      "import/unambiguous": "error",
      "import/no-commonjs": "error",
      "import/no-amd": "error",
      "import/no-nodejs-modules": "off",
      "import/first": "error",
      "import/exports-last": "off",
      "import/no-duplicates": "error",
      "import/no-namespace": "off",
      "import/extensions": "off",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "import/newline-after-import": "error",
      "import/no-unassigned-import": "error",
      "import/no-named-default": "error",
      "import/no-anonymous-default-export": "error",
      "import/group-exports": "error",
      "import/no-default-export": "off",

      // TypeScript 규칙
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-non-null-assertion": "off",

      // 일반 규칙
      "no-console": "warn",
      "prefer-const": "error",
      "no-var": "error",

      // Prettier 통합
      "prettier/prettier": "error",
    },
  },
  prettier,
];
