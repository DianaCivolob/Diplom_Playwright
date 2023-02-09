import { expect, Page } from "@playwright/test";
import { memory_capacity } from "./Selectors";

export class Memory_Capacity {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async Memory_Capacity_Check(value: string) {
        const Memory_Capacity_Text = await this.page.locator(memory_capacity).innerText();
        expect(Memory_Capacity_Text).toEqual(value);
    }
    async Memory_Capacity_Negative(value: string) {
        const Memory_Capacity_Text = await this.page.locator(memory_capacity).innerText();
        expect(Memory_Capacity_Text).not.toEqual(value);
    }

    static async Memory_Capacity_Check(memory_capacity_EXPECT: string) {

    }
}