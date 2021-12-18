import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/Home';
import Saleshouselist from './containers/Saleshouselist';
import Renthouselist from './containers/Renthouselist';
import Sellhouse from './containers/Sellhouse';
import Search from './containers/Search';
import Savehouse from './containers/Savehouse';
import ViewHome from './containers/ViewHome';
import SignUp from './containers/SignUp';
import SignIn from './containers/SignIn';
import Thankyou from './containers/Thankyou';

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/Saleshouselist'} component={Saleshouselist} />
                <Route exact path={'/Sellhouse'} component={Sellhouse} />
                <Route exact path={'/Renthouselist'} component={Renthouselist} />
                <Route exact path={'/Savehouse'} component={Savehouse} />
                <Route exact path={'/ViewHome'} component={ViewHome} />
                <Route exact path={'/Signup'} component={SignUp} />
                <Route exact path={'/Signin'} component={SignIn} />
                <Route exact path={'/Thankyou'} component={Thankyou} />
                <Route exact path={'/Search'} component={Search} />
            </Switch>
        </>
    );
};
export default Router;
