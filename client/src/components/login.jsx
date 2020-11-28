import React from 'react';
import {BrowserRouter  ,Switch,Route} from 'react-router-dom';



export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName:"",
            lastName:"",
        }
    }


    render() {
        return (
            <div>
                
 <form >
  
  <label >First Name</label>
  <input type="text" placeholder="Enter FirstName..." name="firstName" onChange={(e)=>this.setState({firstName:e.target.value})} value={this.state.firstName} ></input>

  <hr></hr>

  <label>Last Name</label>
  <input type="text" placeholder="Enter LastName..." name="lastName" onChange={(e)=>this.setState({lastName:e.target.value})} value={this.state.lastName} ></input>

  <hr></hr>


  <button type="submit" value="Login" >Login</button>

</form>
</div>
)
}
}
