
console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div className="container">
      <h1 className="app-title">{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button className="btn" disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button className="btn" onClick={onRemoveAll}>Remove All</button>
      <div className="list">
      <ol>
        {
          app.options.map((option) => <li key={option}>{option}</li>)
        }
      </ol>
      </div>
      <form onSubmit={onFormSubmit}>
        <input className="input-text" type="text" name="option" />
        <button className="add-btn">Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
