import React, { Fragment } from 'react';
import { ActionCable } from 'react-actioncable-provider';

const Cable = ({ chatroom, handleReceivedMessage }) => {
  return (
    <Fragment>
        <ActionCable
        channel={{ channel: 'MessagesChannel', chatroom: 1 }}
        onReceived={handleReceivedMessage}
        />
    </Fragment>
  );
};

export default Cable;