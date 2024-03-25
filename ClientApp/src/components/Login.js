import React, { Component } from 'react';

export class Login extends Component {
  static displayName = "Home.name";

  render() {
    return ( 
        <form>
            <label>
            <p>Username</p>
            <input type="text" />
            </label>
            <label>
            <p>Password</p>
            <input type="password" />
            </label>
            <div>
            <button type="submit">Submit</button>
            </div>
        </form>
    );
  }
}


