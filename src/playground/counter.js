
let count=0;
const addOne = () =>{
  console.log("addOne pressed");
  if(count<=9){
    count = count+1;
    renderApp();
  }
  else{
    alert("max value of 10 reached");
  }
  console.log("count value: "+count);
}
const minusOne = () =>{
  console.log("minusOne pressed");
  if(count>=1){
    count = count-1;
    renderApp();
  }
  else{
    alert("min value of 0 reached");
  }
  console.log("count value: "+count);
}
const reset = () =>{
  console.log("reset pressed");
  count = 0;
  renderApp();
}

var appRoot = document.getElementById('app');

const renderApp = () => {
  var template2 = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick = {addOne}>+1</button>
      <button onClick = {reset}>reset</button>
      <button onClick = {minusOne}>-1</button>
      
    </div>
  );

  ReactDOM.render(template2,appRoot);
} 
renderApp();