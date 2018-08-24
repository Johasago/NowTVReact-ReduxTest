import React, {Component} from 'react';

export class Messages extends Component {

    constructor(props){
        super(props);
        this.state={
            hoveredMessageId: null
        }
    }

    findUserById = (userId) => {
        let user = null;
        this.props.members.forEach(function(element) {
            if (element.id === userId) {
                user = element;
            }
        });
        return user;
    }

    displayEmail=(id) => {
       // console.log('you hovered...');
        this.setState({hoveredMessageId: id});

    }

    convertDate=(timestamp) => {
        let date= new Date(timestamp);
        return date.toString().substring(0,21);
    }

   render(){
      // console.log(this.props.messages);

    if(this.props.messages !== undefined){
    const messagesList = this.props.messages.map(message => {
        return (
        <div className="messages" key={ message.id }> 
            <p onMouseOver={() => this.displayEmail(message.id)}><img className="avatar" src={ this.findUserById(message.userId).avatar } alt='avatar'/>
            Message: { message.message }</p> 
            <p>Published: { this.convertDate(message.timestamp) }</p>
            {this.state.hoveredMessageId === message.id ? <p className="email">{ this.findUserById(message.userId).email }</p> : null }
        </div>
        )
    })
    return (
        <div className="messagesList">
           { messagesList }
        </div>
    )
}else {return <p>Messages Loading</p>}
   } 
};
