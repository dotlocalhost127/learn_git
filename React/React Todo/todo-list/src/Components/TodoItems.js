import React, {component} from "react";

class TodoItems extends component{
    constructor (props)
    {
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }
    createTasks(item)
    {
        return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
    }
delete(key)
{
    this.props.delete(key);
}
    render (){
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
        return (
            <ul className="taskslist">
                {listItems}
            </ul>
        )
    }
}
export default TodoItems;