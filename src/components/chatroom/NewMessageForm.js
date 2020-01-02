import React from 'react';
import { API_ROOT, HEADERS } from '../../constants';

class NewMessageForm extends React.Component {
  state = {
    body: '',
    chatroom_id: "",
    user_id: ""
  };

//   componentWillReceiveProps = nextProps => {
//     this.setState({ chatroom_id: nextProps.chatroom_id });
//   };

  componentDidMount(){
      this.setState({ chatroom_id: this.props.chatroom_id, user_id: this.props.user_id})
  }

  handleChange = e => {
    this.setState({ body: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    fetch(`${API_ROOT}/messages`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(this.state)
    });
    this.setState({ body: '' });
  };

  render = () => {
    return (
      <div className="newMessageForm">
        <form onSubmit={this.handleSubmit}>
          <label>New Message:</label>
          <br />
          <input
            type="text"
            value={this.state.body}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  };
}

export default NewMessageForm;