import React from 'react';
import NewMessageForm from './NewMessageForm';
import { Comment } from "semantic-ui-react"

const MessagesArea = ({
  chatroom: { id, messages },
}) => {
  return (
    <Comment.Group>
      <ul>{orderedMessages(messages)}</ul>
      <NewMessageForm chatroom_id={id} />
    </Comment.Group>
  );
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
            <Comment.Author>{message.user.first_name}</Comment.Author>
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