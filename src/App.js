import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Messages } from './messages';
import getChatLog, { showMembers } from './service';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getChatLog();
    this.props.showMembers();
  };
  
  handleHover(){

  }
  
  render() {
    console.log(this.props);
    return (
      <div className="App">
      <h1>Hello Jo</h1>
      <Messages messages={this.props.messages} members={this.props.members} onMouseOver={this.handleHover} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ getChatLog, showMembers }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
