import { expect, Page } from "@playwright/test";

export class URLmodule {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async urlCheck(value: string) {
        const CURRENT_URL = this.page.url();
        expect(CURRENT_URL).toContain(value);
    }
    async urlNeg(value: string) {
        const CURRENT_URL = this.page.url();
        expect(CURRENT_URL).not.toContain(value);
    }
}