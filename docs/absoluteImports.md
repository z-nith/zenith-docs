---
id: absoluteImports
title: Absolute Imports
---

When working with an `CRA` app (`create-react-app`) you might have come across what some refer to as **Relative Import Hell** (we first encountered the term through the [Absolute imports with Create React App - HackerNoon.com - Medium](https://medium.com/hackernoon/absolute-imports-with-create-react-app-4c6cfb66c35d)). If you are not familiar with the term, Relative Import hell occurs frequently in large ES6 projects (though the use of `require` will also result in the same effect) where your Javascript files might look like this:

```jsx
import React from 'react';
import ComponentOne from '../../../../ComponentOne/ComponentOne.js';
import ComponentTwo from '../../../ComponentTwo/ComponentTwo.js';
import ComponentThree from '../../../ComponentThree/ComponentThree.js';

const MyComponent = (props) => {
    return <div>... more code</div>;
};

export default MyComponent;
```

Not only is this import style annoying to deal with, it makes the code hard to follow and read. It would be so much more readable if we could achieve the following:

```jsx
import React from 'react';
import { ComponentOne, ComponentTwo, ComponentThree } from 'atoms';

const MyComponent = (props) => {
    return <div>... more code</div>;
};

export default MyComponent;
```

> ℹ️ Don’t worry about the `atoms` directory naming convention, we will be covering this in a later section.

## A solution

Zenith uses a mixed solution of tried and true approaches we found over the last few years. The solution takes advantage of two constructs:
_ Configuring `index.js` files for default imports
_ Configuring `create-react-app`’s `jsconfig.json` file

> 💡 If you are writing your react application in Typescript, you will simply replace the the `jsconfig.json` with a `tsconfig.json`.

> ℹ️ Be aware that this configuration is only available in `v3` or greater of `create-react-app`.

## Configuring the `jsconfig.json` file

At the root of the react project, we create an file named `jsconfig.json` with the following code:

```json
{
    "compilerOptions": {
        "baseUrl": "./"
    },
    "exclude": ["node_modules", ".next", ".storybook"]
}
```

Let’s breakdown the properties found in this file:

-   `compilerOptions` is a spec required by a `tsconfig.json`. Per the specification of [jsconfig.json Reference](https://code.visualstudio.com/docs/languages/jsconfig), `jsconfig.json` is a _child_ of `tsconfig.json` with `allowJS` set to true. Providing the `baseUrl` property specifies what root of our project is. This allow us to resolve relative imports in our project.
-   `exclude` the Visual Studio Code reference also recommends specifying which folders are not a part of your source code. Doing so allows for performance improvements, though not including one specifies the `node_modules` folder by default.

Because we are developing this project using Next Js, we require one additional step:

In the root of the react project, we create an file named `next.config.js` withe following code:

```js
module.exports = {
    webpack(config) {
        config.resolve.modules.push(__dirname);
        return config;
    },
};
```

This code modifies the custom `webpack` implementation for Next JS to work in tandem with our `jsconfig.json`.

Configuring the project in such a fashion gives the following result:

```jsx
import React from 'react';
import ComponentOne from 'atoms/ComponentOne';
import ComponentTwo from 'atoms/ComponentTwo';
import ComponentThree from 'atoms/ComponentThree';

const MyComponent = (props) => {
    return <div>... more code</div>;
};

export default MyComponent;
```

Now we know, you may be asking yourself:

> ❝ Well hold on there Zennie, those don’t look as clean as you said they’d be!

You are correct! Absolute imports are a great start for readability, but we can take the import style a step further!

## Configuring Export Files

Back in our `React Native` developer days, we often wondered how to clean up our project up a bit to avoid import statements such as:

```js
import ComponentOne from '../folder/ComponentOne/ComponentOne.js';
```

In our search for answers, we came across a gem in the comment section of Spencer Carli’s Medium post [found here](https://medium.com/p/9514dfadaa0/responses/show). In short, we learned that ES6 allows us to specify an `index.js` file in a given directory. This opens up the ability to `import` that module without specifying the extension!

Let’s take a look an example shall we?

Suppose we have written a simple `Button` component with the following folder structure:

```markdown
└── Button
├── index.js
├── styles.js
└── Button.js
```

Here:

-   `styles.js` contains our `JSS` styling (more on this topic later)
-   `Button.js` contains the `JSX` for our component itself
-   `index.js` has only one purpose: to import `Button` from `Button.js` and re-export it as follows:

```js
import Button from './Button';

export default Button;
```

Now we know, you may be asking yourself:

> ❝ Well hold on there Zennie, why on earth would we do that?

Remember that including an `index.js` in a directory allows us to import that component without specifying the extension? Combining this solution with our previous `jsconfig.json` file, our imports now look as follows:

```js
import Button from 'atoms/Button';
```

Pretty neat huh? 👍

But wait! We can take this _even further_.

If all of our components are in the `atoms` folder, we can also specify an `index.js` file in there too! The purpose of this file is to import all components in the `atoms` folder, and re-export them as follows:

```js
import Button from 'Button';
import AnotherComponent from 'AnotherComponent';
import YetAnotherComponent from 'YetAnotherComponent';

export { Button, AnotherComponent, YetAnotherComponent };
```

Now when we want to import any component from the `atoms` folder, all we have to do is the following 🎉:

```js
import { Button, AnotherComponent } from 'atoms';
```

## But why?

Although this solution is entirely optional, implementing a cleaner import statement solution improves the readability of your code, and also encourages better modularity and encapsulation of your code. Everything that is an `atom` is exported by the `atoms` folder, everything that is a `Button` is exported by the `Button` folder.

We understand that such an implementation does come with a fair amount of bloat for removing the `.js` extension off of a file. But as your project grows, the readability of your project should not suffer with it!

## References

-   [typescript with nextjs 9.0.5 & absolute imports using babel-plugin-module-resolver 3.2.0 breaks · Issue #535 · zeit/next-plugins · GitHub](https://github.com/zeit/next-plugins/issues/535)
-   [Absolute Imports with Create React App](https://medium.com/hackernoon/absolute-imports-with-create-react-app-4c6cfb66c35d)
-   [jsconfig.json Reference](https://code.visualstudio.com/docs/languages/jsconfig)
-   [Organizing a React Native Project - The React Native Log - Medium](https://medium.com/the-react-native-log/organizing-a-react-native-project-9514dfadaa0)
-   [Using index.js for Fun and Public Interfaces](https://alligator.io/react/index-js-public-interfaces/)
