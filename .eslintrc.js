module.exports = {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
  rules: {
    "no-dupe-args": "error",
    "no-constant-binary-expression": "error",
    "no-duplicate-imports": "error",
    "no-self-assign": ["error", { props: true }],
    "no-self-compare": "error",
    "no-undef": "error",
    "no-unreachable": "error",
    "no-unused-vars": "error",
    "no-empty": "error",
    "no-empty-function": "error",
    "no-redeclare": "error",
    "no-var": "error",
    "prefer-const": "error",
    "require-await": "error",
  },
};
