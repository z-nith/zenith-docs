![Zenith UI Logo](https://user-images.githubusercontent.com/16481834/70842373-745b9a80-1de8-11ea-8386-7c52a98a6c32.png)

A dark themed design system built in using various design philosophies and robust frontend technologies


# Motivation
This repository's purpose serves as a thought experiment of Brad Frost's [Atomic Design](http://atomicdesign.bradfrost.com/) principles in React. Rather than serving as an actual UI library (though there are plans to implement a standalone repo for such a purpose), the main goal of this project is engineer a scalable frontend application that adheres to the following principles:

1. Extensibility - The project should be able to be extended with minimal effort
2. Reusability (Modularity) - The project should consist of composite components in accordance with the Atomic Design philosophy.
3. Readability - The project structure should be easy to read relative to it's structure.

More importantly:
> To serve as a template for other client-side applications built in React

# Technologies used in this project
This project is built on a myriad of technologies, all of which allow for quick-start up and implementation

The following technologies are the main frameworks in building this project
1. [React](https://reactjs.org/) - Version `>16` is necessary to run this project at least
2. [Material-UI](https://material-ui.com/) - A themeable component library to serve as the scaffolding for this project. Even though most of these component adhere to Material-UI standards (for the most part atleast), the goal is to eventually strip the solution of the component library if necessary
3. [@material-ui/styles](https://www.npmjs.com/package/@material-ui/styles) - This is the main styling solution for the application. Although branded under Material-UI, the package is a standalone styling solution for any React application. This allows us to strip the project of Material UI components without hindering the project structure. 
4. [Next.js](https://nextjs.org/) - Enables the benefits of SSR (Server-Side-Rendering) for quick rendering times and easy deployments. 

These technologies are more for showcasing and test components in isolation
1. [Storybook](https://storybook.js.org/)
2. [@storybook/addon-docs](https://github.com/storybookjs/storybook/tree/master/addons#docspage)
3. [@storybook/addon-storysource](https://github.com/storybookjs/storybook/tree/master/addons/storysource)
4. [@storybook/addon-viewport](https://github.com/storybookjs/storybook/tree/master/addons/viewport)
5. [@storybook/addon-a11y](https://github.com/storybookjs/storybook/tree/master/addons/viewport)
6. [storybook-addon-responsive-views](https://github.com/vizeat/storybook-addon-responsive-views)

These technologies facilitate better client-side data validation of textfields and state
1. [yup](https://github.com/jquense/yup)
2. [formik](https://github.com/jaredpalmer/formik)


# Quick Start
You can view all components by running `Storybook` via `yarn storybook`

# Contributing
