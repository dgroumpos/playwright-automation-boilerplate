import { test, expect, TestInfo } from "@playwright/test";

test("Live coding", async ({ page }, testInfo: TestInfo) => {
  const isMobile = testInfo.project.name.toLowerCase().includes("mobile");

  //Navigate to page and validate
  await page.goto("/");
  await expect(page).toHaveTitle("Example");
});
