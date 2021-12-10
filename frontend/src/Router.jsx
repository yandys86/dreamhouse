import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/Home';
import Saleshouselist from './containers/Saleshouselist';
import Renthouselist from './containers/Renthouselist';
import Sellhouse from './containers/Sellhouse';
import Savehouse from './containers/Savehouse';
import ViewHome from './containers/ViewHome';
import SignUp from './containers/SignUp';
import SignIn from './containers/SignIn';

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/Saleshouselist.jsx'} component={Saleshouselist} />
                <Route exact path={'/Sellhouse.jsx'} component={Sellhouse} />
                <Route exact path={'/Renthouselist.jsx'} component={Renthouselist} />
                <Route exact path={'/Savehouse.jsx'} component={Savehouse} />
                <Route exact path={'/ViewHome.jsx'} component={ViewHome} />
                <Route exact path={'/SignUp.jsx'} component={SignUp} />
                <Route exact path={'/SignIn.jsx'} component={SignIn} />
            </Switch>
        </>
    );
};
export default Router;
