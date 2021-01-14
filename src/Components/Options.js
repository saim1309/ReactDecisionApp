import React from "react";
import Option from "./Option";

const Options = (props) =>{
    return(
        <div>
          <button onClick={props.removeAll}>Remove All</button>
          {props.options.length===0 && <p>Please add an option to get started</p>}
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
  
 export default Options; 
  
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
  