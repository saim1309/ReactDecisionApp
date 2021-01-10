class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.onButtonClick =this.onButtonClick.bind(this);
        this.state={
            visibility: false
        };
    }

    onButtonClick(){
        console.log("button pressed");
        this.setState ((prevState) =>{
            return{
                visibility : !prevState.visibility
            };
        });  
    }


    render(){
        return(
            <div>
                <h1>Visibilty Toggle</h1>
                <button onClick = {this.onButtonClick}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
                {this.state.visibility && (<p>"showing details"</p>)}
            </div>
        );
    }

}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));