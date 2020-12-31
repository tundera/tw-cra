/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { proxy, useProxy } from "valtio";

import Home from "../pages/Home";
import About from "../pages/About";
import Topics from "../pages/Topics";

const Heading = tw.h1`flex justify-center text-blue-500 text-2xl p-2`;
const BigHeading = tw(Heading)`text-8xl`;
const Container = tw.div`max-w-4xl mx-auto p-5 mt-5`;

const state = proxy({ count: 0, title: "Tailwind Demo" });

function App() {
  const snapshot = useProxy(state);

  return (
    <Container>
      <BigHeading>{snapshot.title}</BigHeading>
      <Router>
        <div>
          <nav>
            <ul tw="flex justify-center text-red-500 text-2xl space-x-8 p-8">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Container>
  );
}

export default App;
