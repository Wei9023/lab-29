import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props){
    super(props){
      
    }
  }
  const content = ['Vanessa', 'Tony', 'Albert','Natalie'];
  render() {
    return (
      <>
      <Router path="/" component={App}>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/code">Code</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Route path="/" exact component={Home} />
        <Route path="/code" exact component={App} />
        <Story>{content}</Story>;
      </Router>
      </>
    );
  }
}

const Home = () => <div>Welcome to Lab 29</div>;

class App extends React.Component {
  render() {
    
    return 
  }
}

const Story = props => (
  <div>
    <Details>{props.children}</Details>
  </div>
);

const Details = props => {
  const content = props.children.map((detail, i) => <li key={i}>{detail}</li>);
  return <ul>{content}</ul>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
