import React, {Component} from 'react';

export class Members extends Component {
    render(){
    if(this.props.members !== undefined){
    const membersList = this.props.members.map(member => {
        
        return (
        <div className="members" key={ member.id }> 
           <img src={member.avatar} alt="avatar" />
            </div>
       )
    })
    return (
        <div className="membersList">
           { membersList }
        </div>
    )}else {return <p>Members Loading</p>}
} 
};