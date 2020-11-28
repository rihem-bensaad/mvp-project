import React, { Component } from 'react';
import axios from "axios";
 
export default class Todo extends Component {
  constructor(props) {
       super(props)
       this.state = {
           newItem:"",
           list:[]
       }
       this.updateInput = this.updateInput.bind(this);
       this.deleteItem = this.deleteItem.bind(this);
       this.addItem = this.addItem.bind(this);
       this.add = this.add.bind(this)

   }
   fetchUsers() {
    axios.get("/api/users").then(({ data }) => {
        this.setState({
          users: data,
        
        });
      });
    
   }

   deleteItem(id){
       //es6 syntax like push
       const list = [...this.state.list];

       const updateList = list.filter(item => item.id !== id);
       this.setState({list: updateList})
   }
   updateInput(e) {
       this.setState({
           newItem: e.target.value
       });
   }
   //create item with unique id
   addItem(e){
       e.preventDefault()
       const newItem = {
           id: 1 + Math.random(),
           value: this.state.newItem.slice()
       };
    //copy of current list of items
    const list = [...this.state.list];

    //add new list of item to list
    list.push(newItem);

    //update state with new list and reset newItem input
    this.setState({
        list,
        newItem: ""
    })
   
   }
   add(e){
    e.preventDefault()
    console.log(this.state)
}
    render() {
        return (
            <div>
                <form onSubmit={(e)=>this.add(e)}>
                    Add an Item...
                    <br/>
                    <input type="text" placeholder="Type item here..." name="item" value={this.state.newItem} onChange={this.updateInput} >
                    </input> 
                    
                    <button onClick={this.addItem}>Add</button>
                    <br/>
                    <ul>
                        {this.state.list.map(item => {
                            return(
                                <li key={item.id}>
                                    {item.value}
                                <button onClick={() => this.deleteItem(item.id)}> X </button>
                                
                                </li>
                            )
                        })}
                    </ul>
                    </form>
            </div>
        )
    }
}