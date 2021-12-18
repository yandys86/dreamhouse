import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/Home';

import Sellhouse from './containers/Sellhouse';
import Search from './containers/Search';
import Savehouse from './containers/Savehouse';
import ViewHome from './containers/ViewHome';
import SignUp from './containers/SignUp';
import SignIn from './containers/SignIn';
import Thankyou from './containers/Thankyou';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './reducks/users/selectors';
import { fetchUserFromLocalStorage } from './reducks/users/operations';

const Router = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const user = getUser(selector);
    const token = user ? user.token : null;

    console.log('Token', token);

    useEffect(() => {
        dispatch(fetchUserFromLocalStorage());
        // eslint-disable-next-line
    }, []);
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />

                <Route exact path={'/Sellhouse'} component={token ? Sellhouse : SignIn} />

                <Route exact path={'/Savehouse'} component={Savehouse} />
                <Route exact path={'/ViewHome'} component={ViewHome} />
                <Route exact path={'/Signup'} component={SignUp} />
                <Route exact path={'/Signin'} component={SignIn} />
                <Route exact path={'/Thankyou'} component={Thankyou} />
                <Route exact path={'/Search'} component={token ? Search : SignIn} />
            </Switch>
        </>
    );
};
export default Router;
