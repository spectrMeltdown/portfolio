import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import prettierEslintReco from "eslint-plugin-prettier/recommended";
import prettierEslintConfig from "eslint-config-prettier/flat";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js, pluginReact }, //copied from eslint-react plugin
    languageOptions: {
      //copied from eslint-react plugin
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      // needed to suppress eslint warning
      react: {
        version: "detect",
      },
    },
  },
  js.configs.recommended, // from eslint
  tseslint.configs.strict, // for better type configuration, eslint typescript
  tseslint.configs.stylistic,
  pluginReact.configs.flat.recommended, // eslint-react
  pluginReact.configs.flat["jsx-runtime"], // add for newer versions
  prettierEslintReco, // prettier eslint formatting (any prettier should go last)
  prettierEslintConfig, // remove conflict between eslint and prettier's rules (should be very last)
]);
