import { expect, Page } from "@playwright/test";
import { SIM_CARD } from "./Selectors"

export class SIM_Card {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async SIM_Card_CHECK(value: string) {
        const SIM_Card_TEXT = await this.page.locator(SIM_CARD).innerText();
        expect(SIM_Card_TEXT).toContain(value);
    }
    async currencyCheckNegative(value: string) {
        const SIM_Card_TEXT = await this.page.locator(SIM_CARD).innerText();
        expect(SIM_Card_TEXT).not.toContain(value);
    }

    static async SIM_Card_CHECK(SIM_CARD_EXPECT: string) {

    }
}