import React from "react";
import "./App.css";

function App() {
  return (
    <section className="App">
      <h1>React Routing Example</h1>
      <IndexPage />
      <AboutPage />
    </section>
  );
}

const IndexPage = () => {
  return <h3>Home Page</h3>;
};

const AboutPage = () => {
  return <h3>About Page</h3>;
};

export default App;
