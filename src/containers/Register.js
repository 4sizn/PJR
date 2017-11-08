import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default class Register extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Input
            type="string"
            name="username"
            id="exampleUsername"
            placeholder="username"
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="password1"
            id="examplePassword1"
            placeholder="password"
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="password2"
            id="examplePassword2"
            placeholder="Comfirm password"
          />
        </FormGroup>
        <FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> 남성
            </Label>
            <Label check>
              <Input type="radio" name="radio1" /> 여성
            </Label>
          </FormGroup>
        </FormGroup>
        <Button>가입</Button>
      </Form>
    );
  }
}
