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
                name='radioGroup'
                value='Italian'
                checked={this.state.value === 'Italian'}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label='Korean'
                name='radioGroup'
                value='Korean'
                checked={this.state.value === 'Korean'}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label='Salvadoran'
                name='radioGroup'
                value='Salvadoran'
                checked={this.state.value === 'Salvadoran'}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label='Indian'
                name='radioGroup'
                value='Indian'
                checked={this.state.value === 'Indian'}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label='Japanese'
                name='radioGroup'
                value='Japanese'
                checked={this.state.value === 'Japanese'}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label='Thai'
                name='radioGroup'
                value='Thai'
                checked={this.state.value === 'Thai'}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label='Soul'
                name='radioGroup'
                value='Soul'
                checked={this.state.value === 'Soul'}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label='Vietnamese'
                name='radioGroup'
                value='Vietnamese'
                checked={this.state.value === 'Vietnamese'}
                onChange={this.handleChange}
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