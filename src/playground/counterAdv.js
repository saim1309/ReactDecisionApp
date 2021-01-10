class Counter extends React.Component{ 
    constructor(props){
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count : props.count
        };
    }

    addOne(){
        console.log("addOne called");
        this.setState ((prevState)=> {
            if(prevState.count <= 4){
                return{
                    count: prevState.count +1
                };
            }
            else{
                alert("Reached max limit")
            }
            
        });
    }

    minusOne(){
        console.log("minusOne called");
        this.setState ((prevState)=> {
            if(prevState.count>0){
                return{
                    count: prevState.count - 1
                };
            }
            else{
                alert("Reached min limit")
            }
        });
    }

    reset(){
        console.log("reset called");
        this.setState (()=> {
            return{
                count: 0
            };
        });
    }

    render(){
        return(
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick = {this.addOne}>+1</button>
                <button onClick = {this.minusOne}>-1</button>
                <button onClick = {this.reset}>Reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count : 0
};

ReactDOM.render(<Counter />, document.getElementById('app'));