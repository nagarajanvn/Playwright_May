export class CartPage
{
    constructor(page)
    {
        this.page = page
        this.placebutton = page.getByRole('Button', {name: 'Place Order'})
    }

    async clickPlaceOrder()
    {
        await this.placebutton.click()
    }
}