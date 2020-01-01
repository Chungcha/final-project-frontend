import React from 'react';
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT, HEADERS } from '../../constants';
import MessagesArea from './MessagesArea';
import Cable from './Cable';


export default class Chatroom extends React.Component {

    state = {
        chatroom: null
    }

    componentDidMount = () => {
        fetch(`${API_ROOT}/chatrooms/${(this.props.chatroomId)}`, {headers: HEADERS})
        .then(res=>res.json())
        .then(chatroom => this.setState({ chatroom }))
    }
    
    handleReceivedMessage = response => {
        const { message } = response;
        const chatroom = this.state.chatroom;
        chatroom.messages = [...chatroom.messages, message];
        this.setState({ chatroom });
    };

    render = () => {
        const { chatroom } = this.state;
        return (
          <div className="conversationsList">
            <ActionCable
              channel={{ channel: 'ChatroomsChannel' }}
              onReceived={this.handleReceivedChatroom}
            />
          
              {chatroom && <Cable
                chatroom={chatroom}
                handleReceivedMessage={this.handleReceivedMessage}
              />}
    
            {/* <ul>{mapConversations(conversations, this.handleClick)}</ul> */}
            {chatroom ? (
              <MessagesArea
                chatroom={this.state.chatroom}
                //will need to format these props
              />
            ) : null}
          </div>
        );
      };

}