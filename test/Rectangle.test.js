// capitalizeFirst.test.js
const assert = require("assert");
const Rectangle = require("../Rectangle");

describe("Rectangle", () => {
  it("is an class(function) that accepts two arguments", () => {
    assert.strictEqual(typeof Rectangle, "function");
    assert.strictEqual(Rectangle.length, 2);
  });
  it("check if square", () => {
    assert.strictEqual(new Rectangle(2, 3).isSquare, "false");
    assert.strictEqual(new Rectangle(2, 2).isSquare, "true");
  });
  it("return area ", () => {
    assert.strictEqual(new Rectangle(13, 7).getArea, "91");
  });
  it("return perimeter", () => {
    assert.strictEqual(new Rectangle(8, 10).getPerimeter, "36");
  });
});
