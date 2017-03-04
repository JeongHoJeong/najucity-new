import React from 'react';

const Content = React.createClass({
  getDefaultProps() {
    return {
      className: ''
    };
  },

  render() {
    return (
      <div
        className={`content ${this.props.className}`}
      >
        <div
          className='title'
        >
          {this.props.title}
        </div>
        <div
          className='subtitle'
        >
          2016 학생 참여 도시 재생 아이디어 공모 대회
        </div>
        {this.props.children}
      </div>
    );
  }
});

export default Content