module.exports = {
  root: true,
  env: { browser: true, es2022: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    // The project is plain JS without PropTypes; component props are documented
    // with JSDoc instead.
    "react/prop-types": "off",
  },
  overrides: [
    {
      // React Three Fiber elements take three.js constructor args and material
      // properties (args, roughness, position…), which aren't DOM attributes.
      files: ["src/components/canvas/**/*.jsx"],
      rules: { "react/no-unknown-property": "off" },
    },
  ],
};
