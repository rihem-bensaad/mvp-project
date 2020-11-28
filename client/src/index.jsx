import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/todo.jsx';
import Login from './components/login.jsx';


class App extends React.Component {
    constructor() {
      super();
    }
    render(){
        return(
        <div>
            <Login />
            <Todo />
            
        </div>
    )
}
}

ReactDOM.render(<App />, document.getElementById('app'));

