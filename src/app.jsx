var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
  thumbnailData: [
    {
      title: "See Tutorials",
      number: 32,
      header: "Learn React",
      description: "React!",
      imageUrl: "https://cdn.auth0.com/blog/react-js/react.png"
    },{
      title: "See Tutorials",
      number: 64,
      header: "Some other thing!",
      description: "Rocketship!",
      imageUrl: "https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png"
    }
  ]
};

// ask ract to render this class
var element = React.createElement(ThumbnailList, options);

// when ask react to render this class,
// we will tell it where to place the rendered element in the DOM
React.render(element, document.querySelector('.container'));