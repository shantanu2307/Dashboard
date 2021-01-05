import React from "react";
import { Card, Form } from "react-bootstrap";
import { PieChart } from "react-minimal-pie-chart";
import "./Card.css";
import "./App.css";

class Pie extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const labels = this.props.data.map((item) => {
      return (
        <div
          style={{
            backgroundColor: item.color,
            width: "40px",
            fontSize: "10px",
            margin: "20px",
            borderColor: "black",
            borderWidth: "10px",
          }}
        >
          {item.title}
        </div>
      );
    });
    return (
      <div>
        <Card className="card-style">
          <Card.Header>
            <div
              className="title"
              style={{
                color: "navy",
              }}
            >
              Users by Device
            </div>
          </Card.Header>
          <Card.Body>
            <PieChart data={this.props.data} />
            <div
              className="con"
              style={{
                justifyContent: "center",
              }}
            >
              {labels}
            </div>
          </Card.Body>
          <Card.Footer>
            <Form.Group
              style={{
                width: "50%",
              }}
            >
              <Form.Control as="select">
                <option>Last Week</option>
                <option>Last Month</option>
                <option>Last Year</option>
              </Form.Control>
            </Form.Group>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}
export default Pie;
