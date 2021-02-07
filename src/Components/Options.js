import React from "react";
import Option from "./Option";

const Options = (props) => {
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button onClick={props.removeAll} className="button button--link">
          Remove All
        </button>
      </div>

      {props.options.length === 0 && (
        <p className="widget__message">Please add an option to get started</p>
      )}
      {props.options.map((option, index) => (
        <Option key={option} optionText={option} count={index+1} removeOne={props.removeOne} />
      ))}
    </div>
  );
};

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
