const Triangle = require("./triangle");

describe("Triangle", () => {
  test("should render triangle svg with text and color from prompted answers", () => {
    const expectedSvg = '<polygon points="20, 80 50, 20 80, 80" fill="pink" />';
    const triangle = new Triangle();
    triangle.setColor("pink");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});
