import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Messages } from './messages';
//import { Members } from './members';
import { getChatLog, showMembers, sortMessages } from './service';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getChatLog();
    this.props.showMembers();
    this.props.sortMessages();
  };
  
  
  render() {
   // console.log(this.props);
    return (
      <div className="App">
      
      <Messages className="messages" messages={this.props.messages} members={this.props.members}/>
      
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages,
    members: state.members
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ getChatLog, showMembers, sortMessages }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
