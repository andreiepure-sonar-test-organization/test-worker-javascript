import { Inventory } from "./inventory.js";

const inventory = new Inventory();
inventory.add("APPLE", 10);
inventory.remove("APPLE", 3);
console.log(`APPLE in stock: ${inventory.quantityOf("APPLE")}`);
