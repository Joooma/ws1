import React, { Component } from 'react';
import "./cloud.css";
import logo from '../../../logo.svg';
import cloudActionDispatcher from '../../actions/cloud-actions';
import { connect } from 'react-redux';

const log = console.log.bind(this);

class Cloud extends Component {
    constructor(props){
        super(props)
        this.state= this.props;
    }

    onAddFuel(cloud) {
        log("jjjjjjj");
      //  this.state.onAddFuel.bind(this, cloud);

    }

    render() {
        return (
            <div className="cloud">
                <img src={logo} className="App-logo" alt="logo"
                  />
            </div>
        );
    }
}


export default connect(
    (state) => {
        return {
            cloud: state.cloud
        }
    },
    cloudActionDispatcher
)(Cloud); 