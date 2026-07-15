import eslint from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "no-dupe-else-if": "off",
      "no-useless-escape": "off",
      "no-useless-assignment": "off",
      "preserve-caught-error/caught-error": "off",
      "preserve-caught-error": "off",
      "no-control-regex": "off",
      "no-prototype-builtins": "off",
      "@typescript-eslint/no-this-alias": "off",
      "prefer-const": "off",
      semi: "off",
      "@typescript-eslint/semi": "off",
    },
  },
  {
    ignores: ["dist/", "node_modules/", "coverage/"],
  },
);
