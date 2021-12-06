import React from 'react';
import { Route, Switch } from 'react-router';
import Index from './containers/Index';
import Saleshouselist from './containers/Saleshouselist';
import Renthouselist from './containers/Renthouselist';
import Sellhouse from './containers/Sellhouse';
import Savehouse from './containers/Savehouse';
import ViewHome from './containers/ViewHome';



const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Index} />
                <Route exact path={'/Saleshouselist.jsx'} component={Saleshouselist} />
                <Route exact path={'/Sellhouse.jsx'} component={Sellhouse} />
                <Route exact path={'/Renthouselist.jsx'} component={Renthouselist} />
                <Route exact path={'/Savehouse.jsx'} component={Savehouse} />
                <Route exact path={'/ViewHome.jsx'} component={ViewHome} />

            </Switch>
        </>
    );
};
export default Router;
