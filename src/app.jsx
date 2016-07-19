var React = require('react');
var Dropdown = require('./dropdown');

var options = {
  title: 'Choose a Dessert', // what should show up on the button to open/close the dropdown
  items: [
    'Chocolate Cake',
    'Cheesecake',
    'Vanille Cake',
    'Straweburry Short',
    'Fruitcake'
  ]
}

// ask ract to render this class
var element = React.createElement(Dropdown, options);

// when ask react to render this class,
// we will tell it where to place the rendered element in the DOM
React.render(element, document.querySelector('.container'));