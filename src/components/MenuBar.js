import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {
  PencilFill,
  BookFill,
  Grid3x3GapFill,
  Table,
  PersonCircle,
  ExclamationTriangleFill,
  LockFill,
} from "react-bootstrap-icons";
class MenuBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Navbar
        style={{
          backgroundColor: "black",
        }}
        expand="lg"
      >
        <Navbar.Brand
          href="#home"
          style={{
            color: "red",
          }}
        >
          {this.props.name}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{
            backgroundColor: "white",
          }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              href="#blogDashboard"
              style={{
                color: "white",
              }}
            >
              <PencilFill />
              <span> Blog Dashboard</span>
            </Nav.Link>
            <Nav.Link
              href="#AddNewPost"
              style={{
                color: "white",
              }}
            >
              <BookFill />
              <span> Add New Post</span>
            </Nav.Link>
            <Nav.Link
              href="#FormsAndComponents"
              style={{
                color: "white",
              }}
            >
              <Grid3x3GapFill />
              <span> Forms and Components</span>
            </Nav.Link>
            <Nav.Link
              href="#Tables"
              style={{
                color: "white",
              }}
            >
              <Table />
              <span> Tables</span>
            </Nav.Link>
            <Nav.Link
              href="#UserProfiles"
              style={{
                color: "white",
              }}
            >
              <PersonCircle />
              <span> User Profile</span>
            </Nav.Link>
            <Nav.Link
              href="#Errors"
              style={{
                color: "white",
              }}
            >
              <ExclamationTriangleFill />
              <span> Errors</span>
            </Nav.Link>
            <Nav.Link
              href="#Logout"
              style={{
                color: "white",
              }}
            >
              <LockFill />
              <span> Logout</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MenuBar;
