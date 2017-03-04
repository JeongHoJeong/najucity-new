import React from 'react';
import { browserHistory } from 'react-router';

HeroSection = React.createClass({
  render() {
    return (
      <Section
        id='hero'
        className='hero'
      >
        <div
          className='opaque-layer'
        >
          <Header />
          <Title />
          <Menubar />
        </div>
      </Section>
    );
  }
});

const Header = React.createClass({
  render() {
    return (
      <div
        className='header'
      >
        <a
          href='http://www.naju.go.kr/'
          target='_blank'
        >
          <div>
            <div
              className='logo'
            />
            <div>
              나주시 홈페이지 바로가기
            </div>
          </div>
        </a>
      </div>
    );
  }
});

const Title = React.createClass({
  render() {
    return (
      <div
        className='title'
      >
        <div
          className='corners'
        >
          <div
            className='left-top'
          />
          <div
            className='right-top'
          />
          <div
            className='left-bottom'
          />
          <div
            className='right-bottom'
          />
        </div>
        <div
          className='border-text top'
        >
          2016
        </div>
        <div
          className='text'
        >
          <Title.Line
            text='학생참여'
          />
          <Title.Line
            text='도시재생'
          />
          <Title.Line
            text='아이디어'
          />
          <Title.Line
            text='공모대회'
          />
        </div>
        <div
          className='border-text bottom'
        >
          시민과 함께하는 행복한 나주시
        </div>
      </div>
    );
  }
});

Title.Line = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired
  },

  render() {
    return (
      <div
        className='line'
      >
        {this.props.text}
      </div>
    );
  }
});

const Menubar = React.createClass({
  render() {
    return (
      <div
        className='menubar'
      >
        <Menubar.Menu
          text='시상 내역'
          link='/#award'
        />
        <Menubar.Menu
          text='대회 일정'
          link='/#schedule'
        />
        <Menubar.Menu
          text='메인 페이지'
          link='/#main'
        />
        <Menubar.Menu
          text='관련 문의'
          link='/#contact-us'
        />
      </div>
    );
  }
});

Menubar.Menu = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    link: React.PropTypes.string.isRequired
  },

  handleClick() {
    browserHistory.push(this.props.link);
  },

  render() {
    return (
      <span
        className='menu'
        onClick={this.handleClick}
      >
        {this.props.text}
      </span>
    );
  }
});
