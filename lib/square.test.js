const Square = require("./square");

describe("Square", () => {
  test("should render square svg with text and color from prompted answers", () => {
    const expectedSvg = '<rect x="50" y="50" width="100" height="100" fill="pink" />';
    const square = new Square();
    square.setColor("pink");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});