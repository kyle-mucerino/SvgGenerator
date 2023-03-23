const Circle = require("./circle");

describe("Circle", () => {
  test("should render circle svg with text and color from prompted answers", () => {
    const expectedSvg = '<circle cx="25" cy="75" r="20" fill="pink" />';
    const circle = new Circle();
    circle.setColor("pink");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});