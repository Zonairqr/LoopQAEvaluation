install node.js in your system

open project in vs code .

open vs code terminal .

run command "npx playwright install" once done.
run command "npm install" once done .

run command "npm run test" to run test in headless mode.

run command "npm run test-ui" to run test in UI mode -> after running this command a window will open click play button on that window to run all 6 test togather or you can open drowndown on window left side "Demo App Tests" arrow icon and select the test you want to run from there and then click play it will run a single test.


browser can be changed from playwrite.config.js page Projects array uncommit the browser you want and commit the browser you don't want make sure to commit and uncommit json format not a single line.

test can run in parallel or one by one by changing workers in playwrite.config.js page defineConfig export function , already written for both situation , if want to run test one by one then comment the current workers line and uncommit the line below
/* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined, //for parallel ,which by default 
/* uncomment below line to run single tests and comment above line to stop parallel test*/
/* workers: 1,  */ // for running tests one by one.


