import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import "./Card.css";
import { Line } from "react-chartjs-2";
class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Views",
          fill: true,
          lineTension: 0.5,
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: [65, 59, 80, 81, 56],
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <Card className="card-style">
          <Card.Header style={{ color: "navy" }}>Users Overview</Card.Header>
          <Card.Body>
            <Form inline>
              <Form.Control type="date" placeholder="Start Date"></Form.Control>
              <Form.Control type="date" placeholder="End Date"></Form.Control>
              <Button>View full report -&gt;</Button>
            </Form>
          </Card.Body>
          <Card.Footer>
            <Line
              data={this.state}
              options={{
                title: {
                  display: true,
                  text: "Average Blog Views",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "top",
                },
              }}
            />
          </Card.Footer>
        </Card>
      </div>
    );
  }
}
export default Graph;
