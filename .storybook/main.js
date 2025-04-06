/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test",
    "storybook-theme-switch-addon",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  tags: ["autodocs"],
  staticDirs: ["../public"],
};
export default config;
