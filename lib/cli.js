const inquirer = require("inquirer");
const Circle = require("./circle");
const Square = require("./square");
const Triangle = require("./triangle");
const SVG = require("./svg");

class CLI {
  run() {
    return inquirer
    .prompt([
      {
        name: "text",
        type: "input",
        message: "Enter text up to three characters.",
        validate: (text) => text.length <= 3 ||"Text cannot have more than three characters",
      },
      {
        name: "textColor",
        type: "input",
        message: "Enter a text color",
      },
      {
        name: "shapeType",
        type: "list",
        message: "Choose a type of shape",
        choices: ["circle", "triangle", "square"],
      },
      {
        name: "shapeColor",
        type: "input",
        message: "Enter a shape color",
      }
    ])
    .then(({text, textColor, shapeType, shapeColor}) => {
      let shape;
      switch (shapeType) {
        case "circle":
          shape = new Circle();
          break;

        case "triangle":
          shape = new Triangle();
          break;

        default:
          shape = new Square();
          break;
      }
      shape.setColor(shapeColor);

      const svg = new SVG();
      svg.setText(text, textColor);
      svg.setShape(shape);
      return writeFile("logo.svg", svg.render();)
    })
    .catch((error) => {
      console.log(error)
      console.log("An error has occurred.")
    });
  }
}
module.exports = CLI;