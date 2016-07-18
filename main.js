(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/jared/firstApp/src/app.jsx":[function(require,module,exports){


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
ReactDOM.render(element, document.querySelector('.target'));
},{}]},{},["/home/jared/firstApp/src/app.jsx"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG5cbnZhciBvcHRpb25zID0ge1xuICB0aHVtYm5haWxEYXRhOiBbXG4gICAge1xuICAgICAgdGl0bGU6IFwiU2VlIFR1dG9yaWFsc1wiLFxuICAgICAgbnVtYmVyOiAzMixcbiAgICAgIGhlYWRlcjogXCJMZWFybiBSZWFjdFwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiUmVhY3QhXCIsXG4gICAgICBpbWFnZVVybDogXCJodHRwczovL2Nkbi5hdXRoMC5jb20vYmxvZy9yZWFjdC1qcy9yZWFjdC5wbmdcIlxuICAgIH0se1xuICAgICAgdGl0bGU6IFwiU2VlIFR1dG9yaWFsc1wiLFxuICAgICAgbnVtYmVyOiA2NCxcbiAgICAgIGhlYWRlcjogXCJTb21lIG90aGVyIHRoaW5nIVwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiUm9ja2V0c2hpcCFcIixcbiAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9ndWxwanMvYXJ0d29yay9tYXN0ZXIvZ3VscC0yeC5wbmdcIlxuICAgIH1cbiAgXVxufTtcblxuLy8gYXNrIHJhY3QgdG8gcmVuZGVyIHRoaXMgY2xhc3NcbnZhciBlbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChUaHVtYm5haWxMaXN0LCBvcHRpb25zKTtcblxuLy8gd2hlbiBhc2sgcmVhY3QgdG8gcmVuZGVyIHRoaXMgY2xhc3MsXG4vLyB3ZSB3aWxsIHRlbGwgaXQgd2hlcmUgdG8gcGxhY2UgdGhlIHJlbmRlcmVkIGVsZW1lbnQgaW4gdGhlIERPTVxuUmVhY3RET00ucmVuZGVyKGVsZW1lbnQsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXJnZXQnKSk7Il19
