import globals from "globals";
import importPlugin from "eslint-plugin-import";
import typescriptEslint from "typescript-eslint";

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: "latest",
      sourceType: "module",
    },

    plugins: {
      import: importPlugin,
    },
    rules: {
      "sort-imports": [
        "error",
        {
          ignoreCase: false,
          ignoreDeclarationSort: false,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
          allowSeparatedGroups: false,
        },
      ],
    },
  },
  {
    ignores: ["node_modules", "build"],
  },
  ...typescriptEslint.configs.recommended,
];
