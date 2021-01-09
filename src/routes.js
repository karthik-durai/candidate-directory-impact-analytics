import { Switch, Route, Link } from "react-router-dom";
import {
  Candidate,
  Home,
  RejectedCandidates,
  ShortlistedCandidates,
} from "./pages";
import Layout from "./components/layout";

function Routes() {
  return (
    <Layout>
      <Switch>
        <Route path="/shortlisted">
          <ShortlistedCandidates />
        </Route>
        <Route path="/rejected">
          <RejectedCandidates />
        </Route>
        <Route path="/:id">
          <Candidate />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Layout>
  );
}

export default Routes;
