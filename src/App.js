import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
    constructor(props) {
      super(props) 
      this.state = {
        name: '',
        pswd: '',
        login: {
          state: 0,
          admin: false
        },
      }
      this.onNameChange = this.onNameChange.bind(this);
      this.onPswdChange = this.onPswdChange.bind(this);
    }     
onNameChange(e) {
  this.setState({ name: e.target.value });
}

onPswdChange(e) {
  this.setState({ pswd: e.target.value });
}

handleSubmit(name,pswd) {
  if(name =='admin' && pswd == 'admin') {
    this.setState(
      {
        login: {
          state: 1,
          admin: true
        }
      });
    alert('Login Succesful');
  }
  else {
    alert('Enter again')
  }
}

render() {
    return (
      <div className="App">
      <table>
        <tr>
            <input 
              type='text'
              name='username'
              placeholder='User Name'
              value= {this.state.name}
              onChange= {this.onNameChange}
              />
              </tr>
              <tr>
              <input
              type='password'
              pswd='password'
              placeholder='Password'
              value= {this.state.pswd}
              onChange= {this.onPswdChange}
              />
              </tr>
              <tr>
              <button
                onClick={() =>this.handleSubmit(this.state.name,this.state.pswd)}>LOGIN
                </button>
                </tr>
                </table>
      </div>
    );
  }
}

export default App;
