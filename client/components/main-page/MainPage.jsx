import React from 'react';
import { browserHistory } from 'react-router';
import HeroSection from 'main-page/HeroSection'
import MainSection from 'main-page/MainSection'
import ScheduleSection from 'main-page/ScheduleSection'
import ContactUsSection from 'main-page/ContactUsSection'

function scrollIntoView(eleID) {
  var e = document.getElementById(eleID);
  if (!!e && e.scrollIntoView) {
    e.scrollIntoView();
  }
}

const MainPage = React.createClass({
  getInitialState() {
    return {
      currentPath: window.location.pathname
    };
  },

  componentWillMount() {
    this.pathChangeListener = browserHistory.listen((ev) => {
      this.setState({
        currentPath: ev.pathname
      });

      if (ev.pathname === '/') {
        this.handleHash(ev.hash);
      }
    });
  },

  componentWillUnmount() {
    if (this.pathChangeListener) {
      this.pathChangeListener();
      this.pathChangeListener = null;
    }
  },

  componentDidMount() {
    this.handleHash(this.props.location.hash);
  },

  handleHash(hash) {
    if (hash) {
      const id = hash.substr(1);
      scrollIntoView(id);
    }
  },

  render() {
    return (
      <div
        className='main-page'
      >
        <HeroSection />
        <MainSection />
        <ScheduleSection />
        <ContactUsSection />
      </div>
    );
  }
});

export default MainPage