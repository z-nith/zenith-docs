import { configure } from "@storybook/react";
import { themes } from "@storybook/theming";

// Option defaults.
addParameters({
  options: {
    theme: themes.dark
  }
});

// automatically import all files ending in *.stories.js
configure(require.context("../src/stories", true, /\.stories\.js$/), module);
