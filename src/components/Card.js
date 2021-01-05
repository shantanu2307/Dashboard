import React from "react";
import "./Card.css";
import { ArrowUp, ArrowDown } from "react-bootstrap-icons";
import { Card } from "react-bootstrap";
class ImageCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const val = this.props.footer > 0 ? "green" : "red";
    let button;
    if (this.props.footer > 0) {
      button = <ArrowUp color="green"></ArrowUp>;
    } else {
      button = <ArrowDown color="red"></ArrowDown>;
    }
    return (
      <div>
        <Card className="text-center card-style">
          <Card.Title>
            <span className="card-heading">{this.props.title}</span>
          </Card.Title>
          <Card.Body>
            <span className="card-body">{this.props.body}</span>
          </Card.Body>
          <Card.Text>
            {button}
            <span className={`${val}`}>{this.props.footer}%</span>
          </Card.Text>
        </Card>
      </div>
    );
  }
}

export default ImageCard;
