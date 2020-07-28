'use strict';

console.log('App.js is running!');

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  render();
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};

var appRoot = document.getElementById('app');

var render = function render() {
  var template = React.createElement(
    'div',
    { className: 'container' },
    React.createElement(
      'h1',
      { className: 'app-title' },
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
      'button',
      { className: 'btn', disabled: app.options.length === 0, onClick: onMakeDecision },
      'What should I do?'
    ),
    React.createElement(
      'button',
      { className: 'btn', onClick: onRemoveAll },
      'Remove All'
    ),
    React.createElement(
      'div',
      { className: 'list' },
      React.createElement(
        'ol',
        null,
        app.options.map(function (option) {
          return React.createElement(
            'li',
            { key: option },
            option
          );
        })
      )
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { className: 'input-text', type: 'text', name: 'option' }),
      React.createElement(
        'button',
        { className: 'add-btn' },
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
