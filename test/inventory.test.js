import assert from "node:assert/strict";
import { test } from "node:test";

import { Inventory } from "../src/inventory.js";

test("adds and removes stock", () => {
  const inventory = new Inventory();
  inventory.add("APPLE", 10);

  assert.equal(inventory.remove("APPLE", 4), true);
  assert.equal(inventory.quantityOf("APPLE"), 6);
});

test("refuses to remove more than available", () => {
  const inventory = new Inventory();
  inventory.add("APPLE", 1);

  assert.equal(inventory.remove("APPLE", 2), false);
});
