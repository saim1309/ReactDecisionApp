console.log("app.js is running");

var app = {
  title: "Indecision App",
  subTitle: "Put your life in the hands of computer!",
  options: []
};

const onFormSubmit = (e) =>{
  e.preventDefault();
  console.log("form Submitted!!")
  const option = e.target.elements.option.value;
  if(option){
    console.log(option);
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
}   

const onRemoveAll = () =>{
  console.log("clear pressed");
  app.options = [];
  renderApp();
}

const onMakeDecision = () =>{
  console.log("onMakeDecision is pressed");
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
}

const renderApp = () =>{
  var template = (
    <div>    
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>{app.options.length>0 ? "Here are your options:" : "No options"}</p>
      <button disabled = {app.options.length === 0}  onClick = {onMakeDecision}>What should I do??</button>
      <button onClick = {onRemoveAll}>Remove All</button>
      <ol>
        {
          app.options.map((option)=>{
            return <li key={option}>{option}</li>
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );

  ReactDOM.render(template,appRoot);
}
var appRoot = document.getElementById('app');
renderApp();


