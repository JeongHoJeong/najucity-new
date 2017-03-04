import React from 'react';
import { browserHistory } from 'react-router';
import Subsection from 'main-page/Subsection'

const MainSection = React.createClass({
  render() {
    return (
      <Subsection
        id='main'
        className='main'
      >
        <div
          className='title'
        >
          <div
            className='wave-icon'
          />
          <div
            className='text'
          >
            MAIN
          </div>
        </div>
        <CardList />
      </Subsection>
    );
  }
});

const CardList = React.createClass({
  render() {
    const baseUrl = '/subpage/';

    return (
      <div
        className='card-list'
      >
        <Card
          titleLine1='공모전'
          titleLine2='소개'
          content={<IntroductionContent />}
          link={baseUrl + 'introduction/overview/'}
        />
        <Card
          className='orange'
          titleLine1='1차'
          titleLine2='신청하기'
          content={<ApplicationContent />}
          link={baseUrl + 'application/'}
        />
        <Card
          titleLine1='개최'
          titleLine2='의의'
          content={null}
          link={baseUrl + 'importance/'}
        />
      </div>
    );
  }
});

const IntroductionContent = React.createClass({
  render() {
    return (
      <div
        className='introduction'
      >
        <div>
          - 요약 소개
        </div>
        <div>
          - 공모분야
        </div>
        <div>
          - 공모전 사전 워크숍
        </div>
        <div>
          - 공모전 본선 대회
        </div>
        <div>
          - 공모전 심사
        </div>
        <div>
          - 시상 내역
        </div>
      </div>
    );
  }
});

const ApplicationContent = React.createClass({
  render() {
    return (
      <div
        className='application'
      >
        <div
          className='subtitle'
        >
          기한
        </div>
        <div
          className='description'
        >
          <div>
            7/15~7/22 (금)
          </div>
          <div>
            18:00
          </div>
        </div>
      </div>
    );
  }
});

const Card = React.createClass({
  propTypes: {
    titleLine1: React.PropTypes.string.isRequired,
    titleLine2: React.PropTypes.string.isRequired,
    content: React.PropTypes.element,
    className: React.PropTypes.string,
    link: React.PropTypes.string.isRequired
  },

  handleClick() {
    browserHistory.push(this.props.link);
  },

  render() {
    return (
      <div
        className={`card ${this.props.className ? this.props.className : ''}`}
        onClick={this.handleClick}
      >
        <div
          className='front'
        >
          <div
            className='title'
          >
            <div>
              {this.props.titleLine1}
            </div>
            <div>
              {this.props.titleLine2}
            </div>
          </div>
          <div
            className='content'
          >
            {this.props.content}
          </div>
        </div>
        <div
          className='back'
        />
        <div
          className='cover'
        >
          <div>
            click
          </div>
        </div>
      </div>
    );
  }
});

export default MainSection