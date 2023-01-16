## This demo shows a basic implementation of useOtp custom hook, it has the following functionality:

- Set and get OTP channel (mobile, email)
- Set and get OTP value (one time password sent to the selected channel)
- Set and get Proceed without OTP verification option
- A flag to identify verification status
- A flag to identify weather OTP sent or not so that we can display the verification page
- A flag to identify weather we are interacting with the backend or not (can be used to show a loader or disable buttons)
- A function to send OTP to the backend
- A function to resend OTP to the backend
- A function to verify the entered OTP through the backend
- A function to change OTP channel if we are in the verification page
- A function to reset the OTP hook (needed if we would like to reset the UI)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
It will open [http://localhost:3000](http://localhost:3000) automatically in the browser to see your app.

All changes will be injected automatically without reloading the page.<br>

You will see in the console the following:

- All redux store related changes
- Any of the following errors:
  1. Linting errors.
  2. Code format errors (because of [prettier](https://prettier.io/))

### `yarn build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `yarn build:serve`

Serves the app on `http://localhost:8080/` from the `dist` folder to check the production version.

**_Note:_** Use this script only if you ran the build script `yarn build`.

### `yarn analyze-bundle`

It allows you to analyze the bundle size.

### `yarn test`

It runs all test files.

### `yarn test:watch`

- It runs all unit test files in `/src` directory using watch mode.
- Will run all your tests once then again on every change of your source code

### `yarn test:coverage`

It runs test coverage.

### `yarn test:clear`

Clears test cache.

### `yarn generate` **_component_** || **_container_** || **_page_** || **_hook_** || **_service_**

- It creates a boilerplate for component, container, page, custom hook or service.
