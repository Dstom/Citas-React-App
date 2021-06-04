import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";

import { startChecking } from '../actions/auth';
import { LoadingScreen } from '../components/auth/LoadingScreen';

import { LoginScreen } from '../components/auth/LoginScreen';
import { HomeScreen } from '../components/dashboard/HomeScreen';
import { DashboardRoutes } from './DashboardRoutes';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {


    const dispatch = useDispatch();
    const { checking, uid } = useSelector(state => state.auth);

      useEffect(() => {
          dispatch(startChecking());
      }, [dispatch])
  
      if (checking) {
          return <LoadingScreen />
      }
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        exact
                        path="/login"
                        component={LoginScreen}
                        isAuthenticated={!!uid}
                    />
                    <PrivateRoute                        
                        path="/"
                        component={DashboardRoutes}
                        isAuthenticated={!!uid}
                    />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
