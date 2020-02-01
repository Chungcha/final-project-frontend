import React from 'react';
import NewMessageForm from './NewMessageForm';
import { animateScroll } from "react-scroll";
import { Comment } from "semantic-ui-react"

// const MessagesArea = ({chatroom: { id, messages }, currentUser}) => {
//   return (
//     <Comment.Group>
//       <div style={{"height":"200px", "width":"83vw", "overflow":"auto", "marginLeft":"3%", "marginTop":"3%", "border":"1px solid black"}} >
//         {messages && orderedMessages(messages)}
//       </div>
//       <NewMessageForm chatroom_id={id} user_id={currentUser.id}/>
//     </Comment.Group>
//   );
// };

class MessagesArea extends React.Component {

  constructor(){
    super()
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    const {chatroom: {id}} = this.props
    animateScroll.scrollToBottom({
      containerId: `chatgroup${id}`
    });
  }

  render(){

    const {chatroom: { id, messages }, currentUser} = this.props

    return (
      <Comment.Group>
        <div id={`chatgroup${id}`} style={{"height":"200px", "width":"83vw", "overflow":"auto", "marginLeft":"3%", "marginTop":"3%", "border":"1px solid black"}} >
          {messages && orderedMessages(messages)}
        </div>
        <NewMessageForm chatroom_id={id} user_id={currentUser.id}/>
      </Comment.Group>
    );
  }
};

export default MessagesArea;

// helpers

const orderedMessages = messages => {
  const sortedMessages = messages.sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at)
  );
  return sortedMessages.map(message => {
    return <Comment key={message.id}>
        {/* <Comment.Avatar/> */}
        <Comment.Content>
            <Comment.Author>{`${message.user.first_name}:`}</Comment.Author>
            {/* <Comment.Metadata>
                Time
            </Comment.Metadata> */}
            <Comment.Text>
                {message.body}
            </Comment.Text>
        </Comment.Content>
    </Comment>;
  });
};