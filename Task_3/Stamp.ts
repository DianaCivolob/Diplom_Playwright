import { expect, Page } from "@playwright/test";
import { STAMP } from "./Selectors"

export class Stamp {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async Stamp_CHECK(value: string) {
        const Stamp_TEXT = await this.page.locator(STAMP).innerText();
        expect(Stamp_TEXT).toContain(value);
    }
    async StampNegative(value: string) {
        const Stamp_TEXT = await this.page.locator(STAMP).innerText();
        expect(Stamp_TEXT).not.toContain(value);
    }

    static async StampCheck(STAMP_EXPECT: string) {

    }
}