import { test, expect } from '@playwright/test';

// Utility function to login
async function login(page) {
  await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/'); // your app URL
  await page.fill('input[id="username"]', 'admin'); // field selector and username
  await page.fill('input[id="password"]', 'password123'); //  field selector and password
  await page.click('button:has-text("Sign in")'); //selector for login button
}

// Utility function to navigate to a section from side bar
async function navigateToSection(page, section) {
  await page.click(`button:has-text("${section}")`);
}

// Utility function to verify task and tags
async function verifyTask(page,column,taskName,tags)  {

  // selecting heading in column
  const columnSelector = `h2:has-text("${column}")`;
  const taskContainerSelector = `${columnSelector} >> xpath=../..`;
  const taskSelector = `${taskContainerSelector} >> h3:has-text("${taskName}")`;

  // verifying Heading in column.
  const task = await page.locator(taskSelector);
  await expect(task).toBeVisible();


  //extracting tags from array and verifying them in column.
  for (let index = 0; index < tags.length; index++) {
    const tag = tags[index];
    const tagElement = await page.getByText(tag).first();
    await expect(tagElement).toBeVisible();
  }
}

// Test cases
test.describe('Demo App Tests', () => {
  //login before every test
  test.beforeEach(async ({ page }) => {
    await login(page);
  });

  test('Verify "Implement user authentication" is in "To Do" column with correct tags', async ({ page }) => {
    //navigating to Web Application tab
    await navigateToSection(page, 'Web Application');
    //verify column , heading and tags 
    await verifyTask(page, 'To Do', 'Implement user authentication', ['Feature','High Priority']);
  });

  test('Verify "Fix navigation bug" is in "To Do" column with correct tags', async ({ page }) => {
    //navigating to Web Application tab
    await navigateToSection(page, 'Web Application');
    //verify column , heading and tags 
    await verifyTask(page, 'To Do', 'Fix navigation bug', ['Bug']);
  });

  test('Verify "Design system updates" is in "In Progress" column with correct tags', async ({ page }) => {
    //navigating to Web Application tab
    await navigateToSection(page, 'Web Application');
    //verify column , heading and tags 
    await verifyTask(page, 'In Progress', 'Design system updates', ['Design']);
  });

  test('Verify "Push notification system" is in the "To Do" column with correct tags', async ({ page }) => {
    //navigating to Mobile Application tab
    await navigateToSection(page, 'Mobile Application');
    //verify column , heading and tags 
    await verifyTask(page, 'To Do', 'Push notification system', ['Feature']);
  });

  test('Verify "Offline mode" is in the "In Progress" column with correct tags', async ({ page }) => {
    //navigating to Mobile Application tab
    await navigateToSection(page, 'Mobile Application');
    //verify column , heading and tags 
    await verifyTask(page, 'In Progress', 'Offline mode', ['Feature','High Priority']);
  });

  test('Verify "App icon design" is in the "Done" column with correct tags', async ({ page }) => {
    //navigating to Mobile Application tab
    await navigateToSection(page, 'Mobile Application');
    //verify column , heading and tags 
    await verifyTask(page, 'Done', 'App icon design', ['Design']);
  });


  
});
