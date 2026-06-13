export class PlaceOrder
{
    constructor(page)
    {
        this.page = page
        this.name = page.locator('#name')
        this.country = page.locator('#country')
        this.city = page.locator('#city')
        this.creditCard = page.locator('#card')
        this.month = page.locator('#month')
        this.year = page.locator('#year')
        this.purchase = page.getByRole('button', {name: 'Purchase'})
    }

    async fillOrderDetails({name, country, city, card, month, year})
    {
        await this.name.fill(name)
        await this.country.fill(country)
        await this.city.fill(city)
        await this.creditCard.fill(card)
        await this.month.fill(month)
        await this.year.fill(year)
    }

    async purchasebutton()
    {
        await this.purchase.click();
    }
}