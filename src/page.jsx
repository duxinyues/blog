import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';

const Page = () => (
    <Router>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/list" push />} />
            <Route path="/" component={App} />
        </Switch>
    </Router>
);

export default Page