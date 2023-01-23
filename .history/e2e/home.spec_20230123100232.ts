import { test, expect} from '@playwright/test';

var homePage = 'http//localhost:3000'
var aboutPage = 'http//localhost:about'
var gradesPage = 'http//localhost:grades'

test.beforeAll(async () => {
    console.log('Before tests');
})

test.afterAll(async () => {
    console.log('After tests')
})

