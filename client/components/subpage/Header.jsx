import React from 'react';
import { browserHistory } from 'react-router';

const Header = React.createClass({
  render() {
    return (
      <div
        className='header'
      >
        <div
          className='cover'
        >
          <Header.Title />
          <Header.Menubar />
        </div>
      </div>
    );
  }
});

Header.Title = React.createClass({
  render() {
    return (
      <div
        className='title'
      >
        <div>
          2016
        </div>
        <div>
          학생참여도시재생
        </div>
        <div>
          아이디어공모대회
        </div>
      </div>
    );
  }
});

Header.Menubar = React.createClass({
  render() {
    return (
      <div
        className='menubar'
      >
        <Header.Menubar.Menu
          text='홈'
          link='/'
        />
        <Header.Menubar.Menu
          text='메인'
          link='/#main'
        />
        <Header.Menubar.Menu
          text='대회 일정'
          link='/#schedule'
        />
        <Header.Menubar.Menu
          text='Contact Us'
          link='/#contact-us'
        />
        <Header.Menubar.Menu
          text='나주시'
          link='http://www.naju.go.kr/'
          anchor={true}
        />
      </div>
    );
  }
});

Header.Menubar.Menu = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    link: React.PropTypes.string.isRequired,
    anchor: React.PropTypes.bool
  },

  getDefaultProps() {
    return {
      anchor: false
    };
  },

  handleClick() {
    browserHistory.push(this.props.link);
  },

  render() {
    return this.props.anchor ?
    (
      <a
        className='menu'
        href={this.props.link}
        target='_blank'
      >
        {this.props.text}
      </a>
    ) : (
      <span
        className='menu'
        onClick={this.handleClick}
      >
        {this.props.text}
      </span>
    );
  }
});

export default Header