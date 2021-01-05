import React from "react";
import MenuBar from "./MenuBar";
import ImageCard from "./Card";
import Dashboard from "./DashBoard";
import Pie from "./Pie";
import Graph from "./Graph";
import "./App.css";
import randomColor from "randomcolor";
class App extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "lightgrey",
          justifyContent: "center",
        }}
      >
        <MenuBar name="Welcome Back !" />
        <Dashboard>
          <div className="con" style={{ justifyContent: "center" }}>
            <ImageCard title={"Posts"} body={2930} footer={4.7} />
            <ImageCard title={"Pages"} body={182} footer={12.4} />
            <ImageCard title={"Comments"} body={8147} footer={-3.7} />
            <ImageCard title={"New Customers"} body={29} footer={-2.71} />
            <ImageCard title={"Subscribers"} body={17281} footer={-2.4} />
          </div>
          <div className="con" style={{ justifyContent: "center" }}>
            <Graph />
            <Pie
              data={[
                { title: "One", value: 10, color: randomColor() },
                { title: "Two", value: 15, color: randomColor() },
                { title: "Three", value: 20, color: randomColor() },
              ]}
            />
          </div>
        </Dashboard>
      </div>
    );
  }
}
export default App;
