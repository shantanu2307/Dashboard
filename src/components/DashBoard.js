import React from "react";
import "./DashBoard.css";
class DashBoard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="db">Dashboard</div>
        <div className="blog">Blog Overview</div>
        {this.props.children}
      </div>
    );
  }
}
export default DashBoard;
