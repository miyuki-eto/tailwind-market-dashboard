import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import OpenInterestPage from './pages/openInterest';

import DashboardLayout from './dashboard/layout';

function App() {
  return (
      <Router>
        <DashboardLayout>
          <Switch>
            <Route exact path="/">
              <OpenInterestPage />
            </Route>
            <Route exact path="/openinterest">
              <OpenInterestPage />
            </Route>
          </Switch>
        </DashboardLayout>
      </Router>
  );
}

export default App;
