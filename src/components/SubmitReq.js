import React from "react"
import { Form, Radio, Button, Segment } from "semantic-ui-react"

export default class SubmitReq extends React.Component{

    state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
      <Segment>
        <Form onSubmit={this.state.value ? ()=>this.props.submitFoodChoice(this.state) : null}>
          <Form.Field>
            Selected value: <b>{this.state.value}</b>
          </Form.Field>
          <Form.Group inline>
          <Form.Field>
            <Radio
              label='Chinese'
              name='radioGroup'
              value='Chinese'
              checked={this.state.value === 'Chinese'}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='Mexican'
              name='radioGroup'
              value='Mexican'
              checked={this.state.value === 'Mexican'}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='Ethiopian'
              name='radioGroup'
              value='Ethiopian'
              checked={this.state.value === 'Ethiopian'}
              onChange={this.handleChange}
            />
          </Form.Field>
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </Segment>
    )
  }

    // constructor(){
    //     super()
    //     this.state={
    //         radioGroup: ""
    //     }
    // }

    // handleChange = (e) => {
    //     this.setState({
    //         radioGroup: e.target.value
    //     })
    // }

    // render(){
    //     return(
    //         <div></div>
    //     )
    // }

}