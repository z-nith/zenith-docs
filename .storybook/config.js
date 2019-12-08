import { configure, addParameters } from "@storybook/react";
import zenithUI from './theme';


// Option defaults.
addParameters({
  options: {
    theme: zenithUI
  }
});

// automatically import all files ending in *.stories.js
configure(require.context("../src/stories", true, /\.stories\.js$/), module);
