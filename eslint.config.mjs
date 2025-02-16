import globals from "globals";
import pluginJs from "@eslint/js";
import importPlugin from "eslint-plugin-import";

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        languageOptions: {
            globals: globals.browser,
        },
        plugins: {
            "import": importPlugin,
        },
        rules: {
            'no-trailing-spaces': 'error',
            "arrow-body-style": ["error", "as-needed"],
            'guard-for-in': 'error',
            semi: ['error', 'always'],
            'no-extra-semi': 'error',
            'max-len': ['error', { code: 120, }],
            'padded-blocks': ['error', 'never'],
            'no-unused-expressions': 'error',
            "no-restricted-globals": ["error", "event", "fdescribe", "confirm"],
            indent: ["error", 4],
            "one-var-declaration-per-line": ["error", "always"],
            "comma-dangle": ["error", {
                arrays: "never",
                objects: "always",
                imports: "always-multiline",
                exports: "never",
                functions: "never",
            }],
            "consistent-return": "error",
            "import/prefer-default-export": "error",
            "space-before-function-paren": ['error', { anonymous: "always", named: "never", }],
            "no-unneeded-ternary": "error",
            "quote-props": ["error", "as-needed", { keywords: true, unnecessary: true, }],
            "object-curly-spacing": ["error", "always"],
            "no-continue": "error",
            "space-infix-ops": ["error", { int32Hint: false, }],
            "no-shadow": "error",
            "no-duplicate-imports": "error",
            "object-curly-newline": ["error", { consistent: true, }],
            "import/no-cycle": [2, { maxDepth: 1, }],
        },
    },
    pluginJs.configs.recommended
];