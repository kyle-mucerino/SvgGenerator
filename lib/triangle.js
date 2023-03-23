class Triangle {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
  render() {
    return `<polygon points="20, 80 50, 20 80, 80" fill="${this.color}" />`;
  }
}

module.exports = Triangle;
