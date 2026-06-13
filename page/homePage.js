exports.hompage =
class homepage
{
    constructor(page)
    {
        this.page=page
    }

    async openProduct(producName)
    {
        await this.page.getByRole('link', {name : producName}).click()
    }
}