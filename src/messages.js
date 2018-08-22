import React, {Component} from 'react';

export class Messages extends Component {

   render(){
    if(this.props.messages !== undefined){
    const messagesList = this.props.messages.map(message => {
        
        return (
        <div className="messages" key={ message.id }> 
            <ul>
            <li>Message: { message.message }</li>
            <li>User ID: { message.userId }</li>
            <li>Timestamp: { message.timestamp}</li>
            </ul>
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
