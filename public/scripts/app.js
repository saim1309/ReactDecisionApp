"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.removeAll = _this.removeAll.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.addOption = _this.addOption.bind(_this);
    _this.state = {
      options: props.options
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "addOption",
    value: function addOption(option) {
      if (!option) {
        return "Enter valid value in list!!";
      } else if (this.state.options.indexOf(option) > -1) {
        return "This item is already present in list!";
      }
      console.log(option);
      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: "removeAll",
    value: function removeAll() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      alert(option);
    }
  }, {
    key: "render",
    value: function render() {
      //const title = "Indecision App";
      var subTitle = "Put your life inthe hands of computer";
      //const options = ["One", "Two", "Four"];

      return React.createElement(
        "div",
        null,
        React.createElement(Header, { subTitle: subTitle }),
        React.createElement(Action, {
          handlePick: this.handlePick,
          hasOptions: this.state.options.length > 0
        }),
        React.createElement(Options, {
          options: this.state.options,
          removeAll: this.removeAll
        }),
        React.createElement(AddOption, {
          addOption: this.addOption
        })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
  options: []
};

var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    props.subTitle && React.createElement(
      "h2",
      null,
      props.subTitle
    )
  );
};

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

var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      {
        onClick: props.handlePick,
        disabled: !props.hasOptions
      },
      "What Should I do??"
    )
  );
};

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

var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.removeAll },
      "Remove All"
    ),
    props.options.map(function (option) {
      return React.createElement(Option, { key: option, optionText: option });
    }),
    React.createElement(Option, null)
  );
};

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

var Option = function Option(props) {
  return React.createElement(
    "div",
    null,
    props.optionText
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

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      e.target.elements.option.value = '';
      var errorMsg = this.props.addOption(option);

      this.setState(function () {
        return {
          error: errorMsg
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAddOption },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            "Add option"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

// const jsx = (
//   <div>
//     <Header />
//     <Action />
//     <Options />
//     <AddOption />
//   </div>
// );

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
