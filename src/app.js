class IndecisionApp extends React.Component{
  constructor(props){
    super(props);
    this.removeAll = this.removeAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.addOption = this.addOption.bind(this);
    this.state ={
      options : []
    };
  }

  addOption(option){
    if(!option){
      return "Enter valid value in list!!"
    }
    else if(this.state.options.indexOf(option) > -1){
      return "This item is already present in list!"
    }
    console.log(option);
    this.setState((prevState)=>{
      return{
        options: prevState.options.concat(option) 
      };
    });
  }

  removeAll(){
    this.setState(()=>{
      return{
        options:[]
      };
    });
  }

  handlePick(){
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  render(){
    const title = "indecision App";
    const subTitle = "Put your life inthe hands of computer";
    //const options = ["One", "Two", "Four"];

    return(
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action 
          handlePick = {this.handlePick}
          hasOptions ={this.state.options.length > 0} 
        />
        <Options 
          options={this.state.options} 
          removeAll={this.removeAll} 
        />
        <AddOption 
          addOption = {this.addOption}
        />
      </div>
    );
  }
}


class Header extends React.Component{
  render(){
    return(
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    );  
  }
}

class Action extends React.Component{

  // handlePick() {
  //   alert("handlepick");
  // }
  render(){
    return(
      <div>
        <button 
          onClick = {this.props.handlePick} 
          disabled ={!this.props.hasOptions}
        >
        What Should I do??
        </button>
      </div>
    );
  }
}

class Options extends React.Component{

  // constructor(props){
  //   super(props);
  //   this.removeAll = this.removeAll.bind(this);
  // }
  
  // removeAll() {
  //   //alert("remove all"); 
  //   alert(this.props.options);
  // }

  render(){
    return(
      <div>
        <button onClick={this.props.removeAll}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
        <Option />
      </div>
    );
  }
}

class Option extends React.Component{
  render(){
    return(
      <div>
      {
        this.props.optionText
      }
      </div>
    );
  }
}

class AddOption extends React.Component{

  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    e.target.elements.option.value = '';
    let errorMsg = this.props.addOption(option);
    
    this.setState(() =>{
      return{
        error: errorMsg
      };
    });
  }

  render(){
    return(
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit = {this.handleAddOption}>
        <input type="text" name="option" />
        <button >Add option</button>
      </form>
      </div>
    );
  }
}


// const jsx = (
//   <div>
//     <Header />
//     <Action />
//     <Options />
//     <AddOption />
//   </div>
// );

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));  