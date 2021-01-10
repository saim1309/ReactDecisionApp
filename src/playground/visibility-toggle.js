console.log("inside visibility toggle")
let displayOn = false

const onButtonClick = () =>{
    displayOn = !displayOn;
    renderApp();    

}

const renderApp = () =>{
    var template = (
      <div>    
        <h1>Visibilty Toggle</h1>
        <button onClick = {onButtonClick}>{displayOn ? "Hide Details" : "Show Details"}</button>
        {//displayOn ? <p>"showing details"</p> : ""
        }
        {displayOn && (<p>"showing details"</p>)}
      </div>
    );
  
    ReactDOM.render(template,appRoot);
  }

  var appRoot = document.getElementById('app');
  renderApp(); 