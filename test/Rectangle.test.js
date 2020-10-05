// capitalizeFirst.test.js
const assert = require("assert");
const Rectangle = require("../Rectangle");

describe("Rectangle", () => {
  it("is an class(function) that accepts two arguments", () => {
    assert.strictEqual(typeof Rectangle, "function");
    assert.strictEqual(Rectangle.length, 2);
  });
  it("check if square", () => {
    const pasCarre = new Rectangle(2, 3);
    const carre = new Rectangle(2, 2);
    assert.strictEqual(pasCarre.isSquare(), false);
    assert.strictEqual(carre.isSquare(), true);
  });
  it("return area ", () => {
    const rectangle = new Rectangle(13, 7);
    assert.strictEqual(rectangle.getArea(), 91);
  });
  it("return perimeter", () => {
    const rectangle = new Rectangle(8, 10);
    assert.strictEqual(rectangle.getPerimeter(), 36);
  });
});
