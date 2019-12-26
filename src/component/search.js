import React, { Component } from "react";
import { Row, Col } from "antd";
import { Input } from "antd";

import Raiting from './raiting'
import { Button, Radio, Icon } from "antd";
const { Search } = Input;

export default class search extends Component {

  handleChange = (event) => {
    this.setState({
      testInput: event.target.value
    });
  };


  render() {
    return (
      <Row className="marg-imput">
        <Col span={8}></Col>
        <Col span={8}>
          <Search
            placeholder="Film"
            enterButton="Search"
            size="large"
            onChange={(event)=>this.props.testinput(event.target.value)}
            
          />
        </Col>
       
      </Row>
    );
  }
}
