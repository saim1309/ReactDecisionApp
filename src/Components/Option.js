import React from "react";

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
  
 export default Option;
  
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
  