import React from 'react';

TextGroup = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    oneLine: React.PropTypes.bool,
    contentClassName: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      oneLine: false
    };
  },

  render() {
    return (
      <div
        className={`text-group ${this.props.oneLine ? 'one-line ' : ''}`}
      >
        <div
          className='title'
        >
          {this.props.title}
        </div>
        <div
          className={`content ${this.props.contentClassName ? this.props.contentClassName : ''}`}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
});
