class IndecisionApp extends React.Component{
  constructor(props){
    super(props);
    this.removeAll = this.removeAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.addOption = this.addOption.bind(this);
    this.removeOne = this.removeOne.bind(this);
    this.state ={
      options : props.options
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
    // this.setState((prevState)=>{
    //   return{
    //     options: prevState.options.concat(option) 
    //   };
    // });
    this.setState((prevState)=> ({
      options: prevState.options.concat(option)
    }));
  }

  // removeAll(){
  //   this.setState(()=>{
  //     return{
  //       options:[]
  //     };
  //   });
  // }
  /*NEW SYNTAX FOR SETSTATE */
  removeAll(){
    this.setState(()=> ({options:[]}));
  }

  //filter fn removes the option when false is returned and add option to new array when true is returned
  removeOne(optionToRemove){
    this.setState((prevState)=>({
      options : prevState.options.filter((option)=>{
        return optionToRemove !== option
      })
    }));
  }

  handlePick(){
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  render(){
    //const title = "Indecision App";
    const subTitle = "Put your life inthe hands of computer";
    //const options = ["One", "Two", "Four"];

    return(
      <div>
        <Header subTitle={subTitle} />
        <Action 
          handlePick = {this.handlePick}
          hasOptions ={this.state.options.length > 0} 
        />
        <Options 
          options={this.state.options} 
          removeAll={this.removeAll}
          removeOne={this.removeOne} 
        />
        <AddOption 
          addOption = {this.addOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options:[]
}


const Header = (props) =>{
  return(
    <div>
      <h1>{props.title}</h1>
      {props.subTitle && <h2>{props.subTitle}</h2>}
    </div>
  ); 
}

Header.defaultProps = {
  title: "Indecision App"
};


// class Header extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subTitle}</h2>
//       </div>
//     );  
//   }
// }

const Action = (props) =>{
  return(
    <div>
      <button 
        onClick = {props.handlePick} 
        disabled ={!props.hasOptions}
      >
      What Should I do??
      </button>
    </div>
  );
}

// class Action extends React.Component{

//   // handlePick() {
//   //   alert("handlepick");
//   // }
//   render(){
//     return(
//       <div>
//         <button 
//           onClick = {this.props.handlePick} 
//           disabled ={!this.props.hasOptions}
//         >
//         What Should I do??
//         </button>
//       </div>
//     );
//   }
// }

const Options = (props) =>{
  return(
      <div>
        <button onClick={props.removeAll}>Remove All</button>
        {
          props.options.map((option) => (
            <Option 
              key={option} 
              optionText={option}
              removeOne={props.removeOne} 
            />
          ))
        }
        
      </div>
    );
}


// class Options extends React.Component{

//   // constructor(props){
//   //   super(props);
//   //   this.removeAll = this.removeAll.bind(this);
//   // }
  
//   // removeAll() {
//   //   //alert("remove all"); 
//   //   alert(this.props.options);
//   // }

//   render(){
//     return(
//       <div>
//         <button onClick={this.props.removeAll}>Remove All</button>
//         {
//           this.props.options.map((option) => <Option key={option} optionText={option} />)
//         }
//         <Option />
//       </div>
//     );
//   }
// }

const Option = (props) =>{
  return(
    <div>
    {props.optionText}
    <button 
      onClick={(e)=>{
        props.removeOne(props.optionText);
      }}
    >
      Remove
    </button>
    </div>
  );
};

// class Option extends React.Component{
//   render(){
//     return(
//       <div>
//       {
//         this.props.optionText
//       }
//       </div>
//     );
//   }
// }

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
    
    // this.setState(() =>{
    //   return{
    //     error: errorMsg
    //   };
    // });
    this.setState(()=>({error:errorMsg}));
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