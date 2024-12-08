/** @type {import('stylelint').Config} */
export default {
  extends: "stylelint-config-recommended",
  rules: {
    "selector-class-pattern": null,
    "media-query-no-invalid": null,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["use", "mixin", "include", "forward", "import"],
      },
    ],
  },
};
