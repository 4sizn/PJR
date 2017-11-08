import React, { Component } from "react";
import {Jumbotron, Button} from 'reactstrap';
import {Chart} from '../components'

export default class Home extends Component {
  render() {
    return (
      <div>
      <Chart></Chart>
      <Jumbotron>
        <h1 className="display-3">Hello, RanChat</h1>
        <p className="lead">다양한 사람들과의 자유로운 소통 공간을 제공하기 위해 익명성을 보장합니다</p>
        <hr className="my-2" />
        <p>다양한 사람들과 자유로운 소통 공간을 제공하기 위해 익명성을 보장합니다</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
    );
  }
}
