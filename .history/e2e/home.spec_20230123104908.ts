import { test, expect } from '@playwright/test';

var homePage = 'http://localhost:3000'
var aboutPage = 'http://localhost:about'
var gradesPage = 'http://localhost:grades'

test.beforeAll(async () => {
    console.log('Before tests');
})

test.afterAll(async () => {
    console.log('After tests')
})

test.describe('Head tag area', () => {
    test('Contains the Head tag and its content', async ({ page }) => {
        await page.goto(homePage);

        await expect(page).toHaveTitle("Example #1");
        
        const metaDescription = page.locator('meta[name="description"]');
        await expect(metaDescription).toHaveAttribute('content', 'Generated by create next app')

        const linkIcon = page.locator('link[rel="icon"]');
        await expect(linkIcon).toHaveAttribute('href','/favicon.ico')
    })
})


test.describe("Main content tests", () => {
    test('Should contain a heading welcome to the home page', async ({page}) => {
        await page.goto(homePage);

        await expect(page.locator('h1')).toContainText('Welcome to my home page');
    })

    test('Should contain a list to describe CRUD', async ({page}) => {
        await page.goto(homePage);
        await expect (page.locator('ul > li')).toContainText(['Create', 'Read', 'Update'])
    })

})
