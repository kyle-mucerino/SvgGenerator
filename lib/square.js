class Square {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
  render() {
    return `<rect x="50" y="50" width="300" height="200" fill="${this.color}" />`;
  }
}
module.exports = Square;
