import React from 'react';
import { Router, Route, Link, IndexRoute, IndexRedirect, browserHistory } from 'react-router';

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

Meteor.startup(function() {
  const root = document.createElement('div');
  root.setAttribute('id', 'root');
  document.body.appendChild(root);

  ReactDOM.render(<Routes/>, root);
});
