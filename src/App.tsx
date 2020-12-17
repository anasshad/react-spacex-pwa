import * as React from "react";
import { Router, RouteComponentProps, Link } from "@reach/router";

//import styling
import "./App.css";

//import components
import LaunchList from "./components/LaunchList";
import LaunchProfile from "./components/LaunchProfile";

let LaunchListRoute = (props: RouteComponentProps) => <LaunchList />;
let LaunchProfileRoute = (props: RouteComponentProps) => (
  <LaunchProfile {...props} />
);

function App() {
  return (
    <>
      <h1>Space X Shuttle Launches</h1>
      <Router>
        <LaunchListRoute path="/" />
        <LaunchProfileRoute path="launch/:id" />
      </Router>
    </>
  );
}

export default App;
