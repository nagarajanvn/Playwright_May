import {test, expect} from '@playwright/test'

test('Test1', {tag:'@sanity'}, async({page})=>
{
    console.log("Test Method 1")
})

test('Test2', {tag:'@smoke'}, async({page})=>
{
    console.log("Test method 2")
})

test('Test3 @repeatMe', async({page})=>

{
    console.log('Test Method 3')
})