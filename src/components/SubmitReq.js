import React from "react"
import { Form, Radio, Button, Segment, Header } from "semantic-ui-react"

export default class SubmitReq extends React.Component{

    state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
      <Segment>
        <Header textAlign='center'>What would you like to eat for dinner tomorrow??</Header>
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
            <Form.Field>
              <Radio
                label='Italian'
                checked=""
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label='Korean'
                checked=""
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label='Salvadoran'
                checked=""
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label='Indian'
                checked=""
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label='Japanese'
                checked=""
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label='Thai'
                checked=""
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label='Soul'
                checked=""
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label='Vietnamese'
                checked=""
              />
            </Form.Field>
          </Form.Group>
        <Header textAlign='center'>Where would you like to eat??</Header>
        <Form.Field>
            Selected value: <b>DC</b>
          </Form.Field>
        <Form.Field>
            <Radio
              label='DC'
              checked={true}
            />
        </Form.Field>
        {this.state.value ? <Header as="h3" textAlign='center'>{`I want to grab ${this.state.value} food in DC.`}</Header>: null}
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