import React from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  // constructor(props){
  //   super(props);
  //   this.removeAll = this.removeAll.bind(this);
  //   this.handlePick = this.handlePick.bind(this);
  //   this.addOption = this.addOption.bind(this);
  //   this.removeOne = this.removeOne.bind(this);
  //   this.state ={
  //     options : props.options
  //   };
  // }

  /**Life cycle methods availble only to class based components*/
  componentDidMount() {
    try {
      console.log("fetching data");
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      console.log("saving data");
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("Unmount");
  }

  addOption = (option) => {
    if (!option) {
      return "Enter valid value in list!!";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This item is already present in list!";
    }
    console.log(option);
    // this.setState((prevState)=>{
    //   return{
    //     options: prevState.options.concat(option)
    //   };
    // });
    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  };

  // removeAll(){
  //   this.setState(()=>{
  //     return{
  //       options:[]
  //     };
  //   });
  // }
  /*NEW SYNTAX FOR SETSTATE */
  removeAll = () => {
    this.setState(() => ({ options: [] }));
  };

  closeModal = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  //filter fn removes the option when false is returned and add option to new array when true is returned
  removeOne = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      }),
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    //alert(option);
    this.setState(() => ({
      selectedOption: option,
    }));
  };

  render() {
    //const title = "Indecision App";
    const subTitle = "Put your life inthe hands of computer";
    //const options = ["One", "Two", "Four"];

    return (
      <div>
        <Header subTitle={subTitle} />

        <div className="container">
          <Action
            handlePick={this.handlePick}
            hasOptions={this.state.options.length > 0}
          />
          <div className= "widget">
            <Options
              options={this.state.options}
              removeAll={this.removeAll}
              removeOne={this.removeOne}
            />
            <AddOption addOption={this.addOption} />
          </div>
        </div>

        <OptionModal
          selectedOption={this.state.selectedOption}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: [],
};
