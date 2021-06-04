import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ArticleScreen } from '../components/dashboard/ArticleScreen/ArticleScreen'
import { CampaignScreen } from '../components/dashboard/CampaignScreen/CampaignScreen'
import { HomeScreen } from '../components/dashboard/HomeScreen'
import { Sidebar } from '../components/dashboard/Sidebar'
import { SlideScreen } from '../components/dashboard/SlideScreen/SlideScreen'
import { TopBar } from '../components/dashboard/TopBar'
import { AddCitaScreen } from '../components/dashboard/User/AddCitaScreen'
import { CancelCitaScreen } from '../components/dashboard/User/CancelCitaScreen'
import { HistorialCitaScreen } from '../components/dashboard/User/HistorialCitaScreen'
import { ReCitaScreen } from '../components/dashboard/User/ReCitaScreen'
import Roles from '../config/Roles'

export const DashboardRoutes = () => {

    const { rol } = useSelector(state => state.auth);

    console.log((rol === Roles.admin));
    return (
        <div className="d-flex" id="dashboard">
            <Sidebar rol={rol} />

            <div className="w-100">

                <TopBar />
                <div id="content">

                    {                        
                        (rol === Roles.admin) ?
                            <Switch>
                                <Route exact path='/' component={HomeScreen} rol={rol} />
                                <Route exact path='/articles' component={ArticleScreen} />
                                <Route exact path='/slide' component={SlideScreen} />
                                <Route exact path='/campaigns' component={CampaignScreen} />
                                <Redirect to="/" />
                            </Switch>
                            :
                            <Switch>
                                <Route exact path='/' component={HomeScreen} rol={rol} />
                                <Route exact path='/addcita' component={AddCitaScreen} />
                                <Route exact path='/recita' component={ReCitaScreen} />
                                <Route exact path='/cancelcita' component={CancelCitaScreen} />
                                <Route exact path='/historial' component={HistorialCitaScreen} />

                                <Redirect to="/" />
                            </Switch>
                    }





                </div>

            </div>

        </div>
    )
}
