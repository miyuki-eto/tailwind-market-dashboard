import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import OpenInterestPage from './pages/openInterest';
import NftPage from "./pages/nft";

import DashboardLayout from './dashboard/layout';

function App() {
    return (
        <Router>
            <DashboardLayout>
                <Switch>
                    <Route exact path="/">
                        <OpenInterestPage/>
                    </Route>
                    <Route exact path="/openinterest">
                        <OpenInterestPage/>
                    </Route>
                    <Route exact path="/nft">
                        <NftPage/>
                    </Route>
                </Switch>
            </DashboardLayout>
        </Router>
    );
}

export default App;
