import { expect } from "@playwright/test";

export class ProductPage
{
    constructor(page)
    {
        this.page = page
        this.addtocart = page.getByRole('link', {name : 'Add to cart'})
    }

    async addtocartandaccept()
    {
        // create a vaiable to wait until dialog is display
        const dialogpromise = this.page.waitForEvent('dialog')
        
        // click on add to cart
        await this.addtocart.click()

        // verify the message contain product added and click on accept 
        const dialog = await dialogpromise;
        await expect(dialog.message()).toContain('Product added.')
        await dialog.accept();
    }
}