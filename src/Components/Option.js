import React from "react";

const Option = (props) =>{
    return(
      <div className="option">
      <p className="option__text">{props.count} . {props.optionText}</p>
      
      <button 
        className="button button--link"
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
  