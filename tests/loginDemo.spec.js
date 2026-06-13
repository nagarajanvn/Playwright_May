import {test, expect} from '@playwright/test'
import { login } from '../page/login'
import { hompage } from '../page/homePage'
import { ProductPage } from '../page/ProductPage'
import { CartPage } from '../page/CartPage'
import { PlaceOrder } from '../page/PlaceOrder'

test('Login to Demo Blaze', async ({page})=>
{
    const loginpages = new login(page)
    await loginpages.goto()
    await loginpages.loginpage('Nagarajanvn', 'password12345')
})

test('Invalid Credentials', async ({page})=>
{
    const loginpages = new login(page)
    await loginpages.goto()
    await loginpages.loginpage('Nagarajanvn', 'password123')
})

test('click on Product', async ({page})=>
{
    const loginHome = new login(page)
    const homepagemethod = new hompage(page)
    const productpagemethod = new ProductPage(page)
    const cartpagemethod = new CartPage(page)
    const placeordermethod = new PlaceOrder(page)
    await loginHome.goto()
    await loginHome.loginpage('Nagarajanvn', 'Password12345')
    await homepagemethod.openProduct('Iphone 6 32gb')
    await productpagemethod.addtocartandaccept()
    await loginHome.gotoCart()
    await cartpagemethod.clickPlaceOrder()
    await placeordermethod.fillOrderDetails(
        {
            name: 'Nagarajan',
            country: 'India',
            city:'Bangalore',
            card:'8098800966',
            month:'06',
            year:'2030'
        }
    )
    await placeordermethod.purchasebutton()

})