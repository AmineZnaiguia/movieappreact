import React from "react";
import { Modal, Button } from "antd";
import { Input } from 'antd';
import { Row, Col } from "antd";
export default class addfilm extends React.Component {
  state = {
    loading: false,
    visible: false,
    img: "",
    titlef: "",
    raiting:""
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  //   handlechangeimg = event =>{
  //       this.setState({
  //           img : event.target.value,

  //       })
  //   }
  //   handlechangetitle = event =>{
  //     this.setState({
  //         titlef : event.target.value,

  //     })
  // }
  // handlechangeraite = event =>{
  //     this.setState({
  //         raiting : event.target.value,

  //     })
  // }

  handelChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log("teeesdssseeest");
  };
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 0);
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <Row>
          <Col span={8}>
            <Button type="primary" onClick={this.showModal} size="large">
              ADD
            </Button>
          </Col>
        </Row>
        <Modal
          visible={visible}
          title="Title"
          onOk={() => {
            this.handleOk();
          }}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" size="large" onClick={this.handleCancel}>
              Return
            </Button>,
            <Button
              key="submit"
              type="primary"
              size="large"
              loading={loading}
              onClick={() => {
                this.handleOk();
                this.props.handleadd(
                  this.state.img,
                  this.state.titlef,
                  this.state.raiting
                );
              }}
            >
              Submit
            </Button>
          ]}
        >
          <label for="img">img url </label>
          <Input
            type="text"
            value={this.state.img}
            name="img"
            size="50"
            onChange={this.handelChange}
          />
          <label for="title">title </label>
          <Input
            type="text"
            value={this.state.titlef}
            name="titlef"
            size="50"
            onChange={this.handelChange}
          />
          <label for="name">rating </label>

          <Input
            type="text"
            value={this.state.raiting}
            name="raiting"
            size="5"
            onChange={this.handelChange}
          />
        </Modal>
      </div>
    );
  }
}
