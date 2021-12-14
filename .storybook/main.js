module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../projects/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "staticDirs": [
    { from: "../src/assets", to: "/" },
  ],
  "framework": "@storybook/angular",
  "core": {
    "builder": "webpack5"
  }
}
