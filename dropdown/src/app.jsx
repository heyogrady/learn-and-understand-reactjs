var React = require("react");
var Dropdown = require("./dropdown");

var options = {
  title: "Choose a dessert", // Waht should show up on the button to open/close the dropdown
  items: [ // List of items in dropdown
    "Apple Pie",
    "Peach Cobbler",
    "Coconut Cream Pie"
  ]
};

var element = React.createElement(Dropdown, options);

React.render(element, document.querySelector(".container"));
