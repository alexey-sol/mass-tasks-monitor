module.exports = {
    env: {
        browser: true,
        es2020: true
    },

    extends: [
        "plugin:react/recommended",
        "airbnb"
    ],

    parser: "@typescript-eslint/parser",

    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 11,
        sourceType: "module"
    },

    plugins: [
        "import",
        "react",
        "react-hooks",
        "@typescript-eslint"
    ],

    overrides: [
        {
            "files": [".eslintrc.js"],
            "rules": {
                "max-len": ["error", { "code": 120 }]
            }
        },
        {
            "files": ["src/types/*"],
            "rules": {
                "no-undef": 0
            }
        }
    ],

    settings: {
        "import/resolver": {
            alias: [
                ["components", "./src/components"],
                ["context", "./src/context"],
                ["pages", "./src/pages"],
                ["styles", "./src/styles"],
                ["types", "./src/types"],
                ["utils", "./src/utils"]
            ],
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
                moduleDirectory: ["node_modules", "src/"]
            }
        }
    },

    rules: {
        "arrow-body-style": 0,
        "arrow-parens": 0,
        "class-methods-use-this": 0,
        "comma-dangle": ["error", "never"],
        "consistent-return": 0,
        "function-paren-newline": 0,
        "generator-star-spacing": ["error", { "before": true, "after": true }],
        "import/extensions": 0,
        "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
        "import/prefer-default-export": 0,
        "import/order": 0,
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-noninteractive-element-interactions": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/label-has-for": [2, { "required": { "some": ["nesting", "id"] } }],
        "no-confusing-arrow": 0,
        "no-restricted-syntax": 0,
        "no-underscore-dangle": 0,
        "no-use-before-define": ["error", { "functions": false, "classes": true }],
        "quotes": [2, "double"],
        "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
        "max-len": ["error", { "code": 90 }],
        "no-console": 0,
        "no-else-return": 0,
        "no-unused-expressions": 0,
        "object-curly-spacing": [2, "always"],
        "operator-linebreak": 0,
        "quote-props": 0,
        "react/button-has-type": 0,
        "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
        "react/jsx-fragments": 0,
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-props-no-spreading": 0,
        "react/no-danger": 0,
        "react/static-property-placement": 0,
        "react-hooks/exhaustive-deps": "warn",
        "react-hooks/rules-of-hooks": "error",
        "semi": [2, "always", { "omitLastInOneLineBlock": true }],
        "space-before-function-paren": ["error", "always"],
        "@typescript-eslint/no-unused-vars": "error"
    }
};
