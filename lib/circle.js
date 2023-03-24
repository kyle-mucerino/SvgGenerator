class Circle {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
  render() {
    return `<circle cx="25" cy="75" r="50" fill="${this.color}" />`;
  }
}
module.exports = Circle;