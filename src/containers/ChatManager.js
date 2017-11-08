import React, { Component } from "react";
import {TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

class ChatManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "1"
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab != tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Tab1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Moar Tabs
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>
                <Button color="primary" size="lg" block>
          채팅 다시시작하기
        </Button>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>일반 랜덤 채팅 추가</CardTitle>
                  <CardText>
                    모르는 친구와 랜덤채팅을 시작합니다.
                  </CardText>
                  <Button>일반 채팅 시작</Button>
                </Card>
              </Col>
              <Col  sm="6">
                <Card body>
                  <CardTitle>프리미엄 랜덤 채팅 추가</CardTitle>
                  <CardText>
                    선호도에 맞는 이성 및 친구와 랜덤채팅을 시작합니다.
                  </CardText>
                  <Button>프리미엄 채팅 시작</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default ChatManager;
