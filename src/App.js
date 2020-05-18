import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const users = [
  {
    id: `1aa`,
    name: `Param`,
  },
  {
    id: `1ab`,
    name: `Vennila`,
  },
  {
    id: `1ac`,
    name: `Afrin`,
  },
  {
    id: `1ad`,
    name: `Anjal`,
  },
  {
    id: `1ae`,
    name: `Amar`,
  },
];

function App() {
  return (
    <section className="App">
      <h1>React Routing Example</h1>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Route path="/" exact component={IndexPage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/users" exact component={UsersPage} />

        <Route exact path="/user/:slug" component={UserPage} />
      </Router>
    </section>
  );
}

const IndexPage = () => {
  return <h3>Home Page</h3>;
};

const AboutPage = () => {
  return <h3>About Page</h3>;
};

const UsersPage = () => {
  return (
    <div>
      <h3>Users Page</h3>
      {users.map((user, index) => (
        <h5 key={index}>
          <Link to={`/user/${user.id}`}>{user.name}'s Page</Link>
        </h5>
      ))}
    </div>
  );
};

const UserPage = ({ match, location }) => {
  const {
    params: { slug },
  } = match;
  return (
    <>
      {/* <p>
        <strong>User Id:</strong>
        {userId}
      </p>
      <p>
        <strong>User Name:</strong>
        {users[userId].name}
      </p> */}

      <p>
        <strong>Match Props: </strong>
        <code>{JSON.stringify(match, null, 2)}</code>
      </p>
      <p>
        <strong>Location Props: </strong>
        <code>{JSON.stringify(location, null, 2)}</code>
      </p>
      {users.map((user) => {
        if (user.id === slug) {
          let userData = user;
          return (
            <>
              <p>
                <strong>User Id:</strong>
                {userData.id}
              </p>
              <p>
                <strong>User Name:</strong>
                {userData.name}
              </p>
            </>
          );
        }
        return null;
      })}
    </>
  );
};

export default App;
