import astro from "eslint-plugin-astro";
import a11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  a11y.flatConfigs.recommended,
  reactHooks.configs["recommended-latest"],
  ...astro.configs.recommended,
];
