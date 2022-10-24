import React, {Component} from "react";

class Counter extends Component{
    constructor(){
        super ();
this.state = {
    counter: 0
}

    }


Increment (){
this.setState ({
    counter : this.state.counter+1
})
}
Decrement (){
    if(this.state.counter > 0)
    {
    this.setState ({
        counter : this.state.counter-1
    })
    }
    else {
        alert("Counter can't be less than 0")
    }
}

render (){
    return(
        <div>
            <h1>Counter App</h1>
            <h2>{this.state.counter}</h2>
            <button onClick={() => this.Increment()}>Increment</button>
            <button onClick={() => this.Decrement()}>Decrement</button>
        </div>
    )
}
} 

const ChildComponent = (props) => 
{
    return <p>this is {props.name} </p>;
}
export default Counter;