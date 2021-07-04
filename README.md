# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### Dynamic Require
A dynamic require (ie a require in a loop like .map) returns a sorta promise which doesn't resolve immediately
[Hence without the .default it is still a module and not the expected data, that is why we need the .default at the end]
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)


### Lesson goals - Component creation and testing

- Compose a React application with components.
- Learn how React components are basically just functions.
- Construct the elements of a webpage using JSX.
- Debug errors in React.

- Develop maintainable tests for a React component.
- Formulate snapshots to compare the DOM node structures.
- Query elements to verify visibility, content, and accessibility.
- Explain the testing principles of the React Testing Library.

- Use conditional rendering to display each page.
- Introduce the concept of React Hooks.
- Manage application state in React.

- Create forms in React.
- Develop a controlled component by using state.
- Demonstrate conditional rendering to produce a single-page application (SPA

- Apply the useState Hook to conditionally render.
- Manage the state of a modal.




### Packages Used 

- The React Testing Library, which provides functions that will help test React components, including the capacity to render components and query functions that can return DOM elements.

- The jest-dom package, which is a library that extends Jest with custom matchers to enable inspection of various parts of the DOM.

##### Single-page application
A single-page application, or SPA, is a web application or website that interacts with the web browser by dynamically rewriting the current webpage, in place of the default method of the browser loading entirely new pages. This approach allows for a more fluid UI because the page doesn't have to be reloaded each time. React allows for conditional rendering and can replace a portion of the webpage based on the user's selection.

##### Controlled Component
validation prior to submission is possible in a controlled component because the field data is contained in the state.

Component creation and testing