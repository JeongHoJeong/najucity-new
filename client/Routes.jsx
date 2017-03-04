import React from 'react';
import { Router, Route, Link, IndexRoute, IndexRedirect, browserHistory } from 'react-router';
import AppLayout from 'AppLayout'
import MainPage from 'main-page/MainPage'
import Subpage from 'subpage/Subpage'
import ScheduleSection from 'main-page/ScheduleSection'
import IntroductionPage from 'subpage/IntroductionPage'
import OverviewPage from 'subpage/introduction/OverviewPage'
import CategoriesPage from 'subpage/introduction/Categories'
import AboutFinalsPage from 'subpage/introduction/AboutFinalsPage'
import WorkshopPage from 'subpage/introduction/WorkshopPage'
import EvaluationPage from 'subpage/introduction/EvaluationPage'
import AwardsPage from 'subpage/introduction/Awards'
import ImportancePage from 'subpage/ImportancePage'
import ApplicationPage from 'subpage/ApplicationPage'
import NotFound from 'NotFound'

const Routes = React.createClass({
  render() {
    return (
      <Router
        history={browserHistory}
      >
        <Route
          path='/'
          component={AppLayout}
        >
          <IndexRoute
            component={MainPage}
          />
          <Route
            path='subpage'
            component={Subpage}
          >
            <IndexRoute
              component={ScheduleSection}
            />
            <Route
              path='introduction'
              component={IntroductionPage}
            >
              <IndexRedirect
                to='overview'
              />
              <Route
                path='overview'
                component={OverviewPage}
              />
              <Route
                path='categories'
                component={CategoriesPage}
              />
              <Route
                path='finals'
                component={AboutFinalsPage}
              />
              <Route
                path='workshop'
                component={WorkshopPage}
              />
              <Route
                path='evaluation'
                component={EvaluationPage}
              />
              <Route
                path='awards'
                component={AwardsPage}
              />
            </Route>
            <Route
              path='importance'
              component={ImportancePage}
            />
            <Route
              path='application'
              component={ApplicationPage}
            />
          </Route>
        </Route>
        <Route
          path='*'
          component={NotFound}
        />
      </Router>
    );
  }
});

export default Routes