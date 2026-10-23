export class Inventory {
  #stock = new Map();

  add(sku, quantity) {
    if (quantity <= 0) {
      throw new RangeError(`Quantity must be positive: ${quantity}`);
    }
    this.#stock.set(sku, this.quantityOf(sku) + quantity);
  }

  remove(sku, quantity) {
    const available = this.quantityOf(sku);
    if (available < quantity) {
      return false;
    }
    this.#stock.set(sku, available - quantity);
    return true;
  }

  quantityOf(sku) {
    return this.#stock.get(sku) ?? 0;
  }

  // Intentional issues: loose equality and an unused local variable.
  isReserved(sku) {
    const marker = "unused";
    return sku == "RESERVED";
  }

  // Intentional issue: the error is swallowed by an empty catch block.
  parseQuantity(raw) {
    try {
      return JSON.parse(raw);
    } catch (e) {
    }
    return 0;
  }
}
