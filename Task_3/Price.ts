import { PRICE } from "./Selectors";
import { expect, Page } from '@playwright/test';

export class Price {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async PriceCheck(value: string) {
        const PriceText = await this.page.locator(PRICE).innerText();
        expect(PriceText).toEqual(value);
    }
    async PriceCheckNegative(value: string) {
        const PriceText = await this.page.locator(PRICE).innerText();
        expect(PriceText).not.toEqual(value);
    }

    static async PriceCheck(PRICE_EXPECT: string) {

    }
}