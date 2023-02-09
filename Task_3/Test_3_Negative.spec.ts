import { test } from '@playwright/test';
import { URL_NEGATIVE } from "./PageObject";
import { SIM_Card} from "./SIM_Card";
import { Memory_Capacity } from "./Memory_Capacity";
import { Price } from "./Price";
import { Search } from "./Search";
import { Stamp } from "./Stamp";
import {
    PRICE_EXPECT_NEGATIVE,
    STAMP_EXPECT_NEGATIVE,
    SIM_CARD_EXPECT_NEGATIVE,
    memory_capacity_EXPECT_NEGATIVE,
    SEARCH_NEGATIVE,
    SEARCH_INPUT_NEGATIVE
} from "./Negative";

test.describe("Negative tests", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://www.kufar.by/");
    });
    test("1. URL", async ({ page }) => {
        // @ts-ignore
        const url = new URL_NEGATIVE(page);
        await url.urlCheck(URL_NEGATIVE);
    });
    test("2. PriceCheck", async ({ page }) => {
        const price = new Price(page);
        await Price.PriceCheck(PRICE_EXPECT_NEGATIVE);
    });
    test("3. StampCheck", async ({ page }) => {
        const stamp = new Stamp(page);
        await Stamp.StampCheck(STAMP_EXPECT_NEGATIVE);
    });
    test("4. Memory_CapacityCheck", async ({ page }) => {
        const memory_capacity = new Memory_Capacity(page);
        await Memory_Capacity.Memory_Capacity_Check(memory_capacity_EXPECT_NEGATIVE);
    });
    test("5. SIM_CARD", async ({ page }) => {
        const Sim_card = new SIM_Card(page);
        await SIM_Card.SIM_Card_CHECK(SIM_CARD_EXPECT_NEGATIVE);
    });
    test("6. Search text check", async ({ page }) => {
        const search = new Search(page);
        await Search.searchText(SEARCH_NEGATIVE);
    });
    test("7. Search input check", async ({ page }) => {
        const search = new Search(page);
        await search.searchInputType(SEARCH_INPUT_NEGATIVE);
        await search.searchInputCheck();
    });
});