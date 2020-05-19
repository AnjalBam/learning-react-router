import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";

const users = [
  {
    name: "Param",
    description:
      "Guy who writes lorem ipsum all the time when he needs content placeholder.",
    tabs: [
      {
        name: "personal",
        content: {
          firstname: "Param",
          lastname: "Harrison",
        },
      },
      {
        name: "employer",
        content: {
          name: "Jobbatical",
          city: "Tallinn, Estonia",
        },
      },
    ],
  },
  {
    name: "Miguel",
    description:
      "the best guy doing deployment in his own clusters of kubernetes world",
    tabs: [
      {
        name: "personal",
        content: {
          firstname: "Miguel",
          lastname: "Medina",
        },
      },
      {
        name: "employer",
        content: {
          name: "Skype",
          city: "Arizona, US",
        },
      },
      {
        name: "other",
        content: {
          country: "Mexico",
          age: 30,
        },
      },
    ],
  },
];

const App = () => {
  return (
    <div className="App">
      <Router>
        <h3>Top Level Routes:</h3>
        <ul className="unlist">
          {users.map((user, index) => {
            return (
              <li key={index}>
                <Link to={`/user/${user.name}`}>{user.name}</Link>
              </li>
            );
          })}
        </ul>
        <Route path="/user/:userName" component={UserPage} />
      </Router>
    </div>
  );
};

const UserPage = ({ match }) => {
  const {
    params: { userName },
  } = match;
  const user = users.find(({ name }) => name === userName);

  return (
    <div>
      User Name: <strong>{user.name}</strong>
      <p>{user.description}</p>
      <p>Dynamic Nested Routes</p>
      <ul className="unlist">
        {user.tabs.map((tab, index) => {
          return (
            <li key={index}>
              <Link to={`${match.url}/tab/${tab.name}`}>{tab.name}</Link>
            </li>
          );
        })}
      </ul>
      <Route path={`${match.path}/tab/:tabName`} component={TabPage} />
    </div>
  );
};

const TabPage = ({ match }) => {
  const {
    params: { userName, tabName },
  } = match;
  console.log(match);
  const tab = users
    .find(({ name }) => name === userName)
    .tabs.find(({ name }) => name === tabName);

  return (
    <div>
      Tab Name: <strong>{tab.name}</strong>
      <h6>Tab Content:</h6>
      <ul>
        {Object.keys(tab.content).map((key, index) => {
          return (
            <li key={index}>
              <span>{key} :</span>
              <strong>{tab.content[key]}</strong>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
