import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux';

import {Sidebar, LogoPic} from '@acomponents';
import {LogoPicClient, SidebarClientContainer} from '@ccomponents';

import Header from './common/containers/headerContainer';

import {adminRoutes, shopRoutes} from './common/utilities/routes';
import './App.css';

class App extends React.Component {

    renderRoutes(routes) {
        return routes.map(({path, exact, component}, index) => {
            return (
                <Route path={path} exact={exact} component={component} key={index}/>
            )
        })
    };

    render() {
        let {isAuth, isAdmin}=this.props;

        const checkAuthAndRender = () => {
            if (isAuth && isAdmin) {
                return this.renderRoutes(adminRoutes)
            }
            if (isAuth && !isAdmin) {
                return this.renderRoutes(shopRoutes.loggedIn)
            }
        }

        return (
            <div className='App'>
                {isAuth && <Header/>}
                {isAuth && (<Switch>
                    <Route path='/admin' component={LogoPic}/>
                    <Route path='/' component={LogoPicClient}/>
                    </Switch>)}
                <div className='body'>
                    {isAuth && (
                        <Switch>
                            <Route path='/admin' component={Sidebar}/>
                            <Route path='/' component={SidebarClientContainer}/>
                        </Switch>
                    )}
                    <div className='main__content'>
                        <Suspense fallback={<div>Spinner for loading a component</div>}>
                            <Switch>
                                {checkAuthAndRender()}
                                {this.renderRoutes(shopRoutes.rest)}
                            </Switch>
                        </Suspense>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => ({isAuth: state.auth.isAuth,isAdmin:state.auth.user.isAdmin}), {})(App);