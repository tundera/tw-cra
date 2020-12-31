/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import Topic from "../components/Topic";

const Heading = tw.h2`text-black font-bold text-4xl p-2`;

function Topics() {
  let match = useRouteMatch();

  return (
    <div tw="flex-col text-center">
      <Heading>Topics</Heading>
      <ul>
        <li tw="hover:font-bold">
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li tw="hover:font-bold">
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3 tw="text-green-500 font-bold p-2">Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

export default Topics;
