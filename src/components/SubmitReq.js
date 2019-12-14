import React from "react"
import { Form, Radio, Button } from "semantic-ui-react"

export default class SubmitReq extends React.Component{

    state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
      <Form onSubmit={this.state.value ? ()=>this.props.submitFoodChoice(this.state) : null}>
        <Form.Field>
          Selected value: <b>{this.state.value}</b>
        </Form.Field>
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
            label='Ethiopean'
            name='radioGroup'
            value='Ethiopean'
            checked={this.state.value === 'Ethiopean'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
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