/** @type { import('@storybook/vue3').Preview } */

import "@/css/main.css";
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    stylesheets: {
      themes: [
        {
          id: "primary-theme",
          title: "Primary theme",
          url: "./css/theme1.css",
        },
      ],
    },
  },
};

export default preview;
