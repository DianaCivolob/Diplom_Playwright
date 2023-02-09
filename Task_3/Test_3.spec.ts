import { test, expect } from '@playwright/test';
import { URL } from "./PageObject";
import { SIM_Card} from "./SIM_Card";
import { Memory_Capacity } from "./Memory_Capacity";
import { Price } from "./Price";
import { Search } from "./Search";
import { Stamp } from "./Stamp";
import {
    PRICE_EXPECT,
    STAMP_EXPECT,
    SIM_CARD_EXPECT,
    memory_capacity_EXPECT,
    SEARCH_EXPECT,
    SEARCH_INPUT_EXPECT
} from "./Positive";

test.describe("Positive tests", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://www.onliner.by/");
    });
    test("1. URL", async ({ page }) => {
        // @ts-ignore
        const url = new URL(page);
        await url.urlCheck(URL);
    });
    test("2. PriceCheck", async ({ page }) => {
        const price = new Price(page);
        await Price.PriceCheck(PRICE_EXPECT);
    });
    test("3. StampCheck", async ({ page }) => {
        const stamp = new Stamp(page);
        await Stamp.StampCheck(STAMP_EXPECT);
    });
    test("4. Memory_CapacityCheck", async ({ page }) => {
        const memory_capacity = new Memory_Capacity(page);
        await Memory_Capacity.Memory_Capacity_Check(memory_capacity_EXPECT);
    });
    test("5. SIM_CARD", async ({ page }) => {
        const Sim_card = new SIM_Card(page);
        await SIM_Card.SIM_Card_CHECK(SIM_CARD_EXPECT);
    });
    test("6. Search text check", async ({ page }) => {
        const search = new Search(page);
        await Search.searchText(SEARCH_EXPECT);
    });
    test("7. Search input check", async ({ page }) => {
        const search = new Search(page);
        await search.searchInputType(SEARCH_INPUT_EXPECT);
        await search.searchInputCheck();
    });
});