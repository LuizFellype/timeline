
## Timeline App
This repository contains a horizontal timeline application built with React. The timeline is designed to display a series of events over time, allowing users to see overlapping events and edit event names interactively.What I Like About My Implementation

Dynamic Layout: The implementation effectively handles overlapping events by assigning lanes to items, allowing for a clean and organized representation of the timeline.
User Interaction: The ability to edit event names directly within the timeline by clicking on event name to condionally render editable field enhances user experience and engagement. This feature allows for quick updates without navigating away from the timeline.

## What I Would Change If I Were Going to Do It Again

Performance Optimization: For larger datasets, the current implementation could be optimized further. For instance, using memoization techniques to avoid unnecessary re-renders when the timeline state updates; Use Lazy Loading for content not visible before scroll.
Enhanced Styling: While the current design is functional, I would invest more time in styling to improve visual appeal. Incorporating animations or transitions could enhance user interaction and make the timeline more engaging, really awesome and responsive.
Separation of concerns: I would refactor the code into small pieces to improve codebase maintanability.

## How I Made My Design Decisions

Inspiration from Existing Timelines horizontal lanes, like Calendar.
Use Tailwind to style it in a faster way 

## How I Would Test This If I Had More Time

- Unit Testing: I would implement unit tests for the core logic, especially for the assignLanes function, to ensure that it correctly assigns lanes based on the start and end dates of events.
- Integration Testing: I would conduct integration tests to verify that the components work together as expected, particularly focusing on the editing functionality and how it updates the timeline state.
- End-to-End Testing: Implementing end-to-end tests using a framework like Cypress would allow me to simulate user interactions and confirm that the application behaves correctly from the user's perspective, example, scrolling to see all the content.




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
