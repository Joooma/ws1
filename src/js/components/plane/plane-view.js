import React, { Component } from 'react';

import logo from '../../../logo.svg';

class Plane extends Component {

    onClickPlane(){
        console.log("aaa"+Math.random(100));
    }
    
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" onClick={()=>this.onClickPlane()}/>
    
      </div>
    );
  }
}


export default Plane;