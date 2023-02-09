import { expect, Page } from "@playwright/test";
import { SEARCH, SEARCH_TEXT, CATALOG } from "./Selectors";

export class Search {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async searchText(value: string) {
        const searchText = await this.page.locator(SEARCH).getAttribute(SEARCH_TEXT);
        expect(searchText).toContain(value);
    }
    async searchTextNeg(value: string) {
        const searchText = await this.page.locator(SEARCH).getAttribute(SEARCH_TEXT);
        expect(searchText).not.toContain(value);
    }
    async searchInputType(value: string) {
        await this.page.type(SEARCH, value);
    }
    async searchInputCheck() {
        await this.page.isVisible(CATALOG);
    }
    async searchInputCheckNeg() {
        await this.page.isHidden(CATALOG);
    }

    static async searchText(SEARCH_EXPECT: string) {

    }
}