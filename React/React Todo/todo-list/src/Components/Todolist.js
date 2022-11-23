import React, {component} from "react";
import TodoItems from "./TodoItems";

class Todolist extends component{
    constructor(props){
        super(props);
        this.state = {items:[]};
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

addItem (e){
    if(this._inputElement.value !== "")
    {
        var newitem = {
            text: this._inputElement.value,
            key: Date.now()
        }
        this.state((prevState) => {
            return {
                items: prevState.items.concat(newitem)
            }
        });
        this._inputElement.value = "";
    }
    console.log(this.state.items);
    e.preventDefault();
}
deleteItem(key)
{
    var filteredItems = this.state.items.filter (function(item){
        return (item.key !== key);
    });
    this.setState({
        items : filteredItems
    })
}
render (){
        return(
            <div className="TodolistMain">
            <div className="header">
                <form onSubmit={this.addItem}>
                    <input type="text" placeholder="Enter task" ref={(a) => this._inputElement = a}></input>
                    <button type="submit">Add</button>
                </form>
                <TodoItems entries={this.state.items} delete={this.deleteItem}/>
            </div>
            </div>
        )
    }
}
export default Todolist;