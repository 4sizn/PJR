import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default class Login extends Component {
     divStyle = { 
            margin : '50px'
        }
    
    render(divStyle) {
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
            name="password"
            id="examplePassword"
            placeholder="password"
          />
        </FormGroup>
        <FormGroup>
          <Input type="checkbox" />자동로그인
        </FormGroup>
        <Button>로그인</Button>
      </Form>
    );
  }
}
